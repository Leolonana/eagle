import WritingChar from './WritingChar';
import WritingDot from './WritingDot';
import Practice from './Practice';

const { ccclass, property } = cc._decorator;

const DOT_SHOWN_GAP = 0.15;
const GUIDE_SHOWN_DURATION = WritingDot.LAST_DOT_SHOWN_DURATION;

// 两点的最小距离，如果小于这个，则不画
const DRAW_DOT_DISTANCE_MIN = 30;

// 描红练习状态定义
const enum WritingState {
    /**
     * 初始状态
     */
    Init,
    /**
     * 初始显示动画播放中
     */
    ShownAnimating,
    /**
     * 可拖动
     */
    Dragable,
    /**
     * 拖动完成动画播放中
     */
    DragCompleteAnimating,
    /**
     * 可绘制
     */
    Paintable,
    /**
     * 绘制完成动画播放中
     */
    PaintCompleteAnimating,
    /**
     * 已完成
     */
    Finished,
}

/**
 * 描红练习
 */
@ccclass
export default class Writing extends Practice {
    @property(cc.Node)
    rocket: cc.Node = null;

    @property(cc.Node)
    pen: cc.Node = null;

    @property(cc.Node)
    charContainer: cc.Node = null;

    @property({ tooltip: '字母果冻效果音效', type: cc.AudioClip })
    jellyAudio: cc.AudioClip = null;

    @property({ tooltip: '黄色点出现音效', type: cc.AudioClip })
    mainDotShown: cc.AudioClip = null;

    @property({ tooltip: '黄色点擦除音效', type: cc.AudioClip })
    mainDotErased: cc.AudioClip = null;

    @property({ tooltip: '彩色星星出现音效', type: cc.AudioClip })
    starFinishedShown: cc.AudioClip = null;

    @property({ tooltip: '白色星星出现音效', type: cc.AudioClip })
    rightStarShown: cc.AudioClip = null;

    drawPanel: cc.Graphics = null;

    private state: WritingState = WritingState.Init;

    private char: WritingChar = null;
    private currentLine = -1;
    private nextDot = -1;

    private text: string = null;
    // 对应的音频
    private spelling: cc.AudioClip = null;

    onLoad() {
        this.init("", "", "a")
    }

    public init(courseId: string, practiceId: string, practiceData: string): Promise<void> {
        // 数据就是预制体的名称（字符）
        this.text = practiceData;

        return new Promise((resolve, reject) => {
            cc.loader.loadRes(`Writing/${practiceData}`, cc.Prefab, (error: Error, res: cc.Prefab) => {
                if (error) {
                    console.error('描红练习加载失败', practiceData, error);
                    reject(error);
                    return;
                }
                if (!this.isValid) {
                    cc.loader.release(res);
                    reject();
                    return;
                }

                const charNode = cc.instantiate(res);
                charNode.parent = this.charContainer;
                this.char = charNode.getComponent(WritingChar);
                // 提前初始化节点并设置音效
                this.char.getLines().forEach((line) => {
                    line.forEach((dot) => {
                        dot.setAudios(
                            this.mainDotShown,
                            this.mainDotErased,
                            this.starFinishedShown,
                            this.rightStarShown
                        );
                    });
                });
                // 初始化画板
                this.drawPanel = this.char.drawPanel;
            });
        });
    }

    private isFirstLineGuided = false;

    public onShow() {
        // 在首次显示时启动动画
        if (!this.isFirstLineGuided) {
            this.isFirstLineGuided = true;
            // 播完音频再播动画
            this.playCharAudio().then(() => {
                if (this.state === WritingState.Init) {
                    this.state = WritingState.ShownAnimating;
                    this.playCharAnimation().then(() => {
                        if (this.state === WritingState.ShownAnimating) {
                            this.state = WritingState.Dragable;
                            this.animNextLine();
                        } else {
                            console.error('显示动画完成时状态不是初始动画播放中状态', this.state);
                        }
                    });
                } else {
                    console.error('初始引导时状态不是初始状态', this.state);
                }
            });
        }
    }

    /**
     * 播放字母音频
     */
    private playCharAudio() {
        return new Promise((resolve) => {
            if (this.spelling) {
                cc.audioEngine.setFinishCallback(cc.audioEngine.play(this.spelling, false, 1), resolve);
            } else {
                console.error('缺少音频资源', this.text);
                resolve();
            }
        });
    }

    /**
     * 播放字母动画
     */
    private playCharAnimation() {
        return new Promise((resolve) => {
            const upDur = 0.2,
                downDur = 0.15,
                flatDur = 0.15,
                elasticDur = 0.2;
            const originY = this.char.node.y;
            const scaleX = [0.8, 1, 1.2, 0.9, 1.1, 1];
            const scaleY = [1.2, 1, 0.8, 1.1, 0.9, 1];
            //果冻效果
            this.char.node.runAction(
                cc.sequence(
                    cc.delayTime(0.3),
                    cc.callFunc(() => {
                        //播放果冻音效
                        cc.audioEngine.play(this.jellyAudio, false, 1);
                    }),
                    cc.spawn(
                        // 变瘦向上飞，然后掉下来变扁，再弹一下恢复
                        cc.sequence(
                            cc.moveTo(upDur, 0, originY + 100),
                            cc.moveTo(downDur, 0, originY)
                            // cc.delayTime(flatDur),
                            // cc.moveTo(elasticDur, 0, originY + 50),
                            // cc.moveTo(elasticDur, 0, originY)
                        ),
                        cc.sequence(
                            cc.scaleTo(upDur, scaleX[0], scaleY[0]),
                            cc.scaleTo(downDur, scaleX[1], scaleY[1]),
                            cc.scaleTo(flatDur, scaleX[2], scaleY[2]),
                            cc.scaleTo(elasticDur, scaleX[3], scaleY[3]),
                            cc.scaleTo(elasticDur, scaleX[4], scaleY[4]),
                            cc.scaleTo(elasticDur, scaleX[5], scaleY[5])
                        ),
                        cc.sequence(
                            cc.delayTime(upDur + downDur + flatDur + elasticDur * 3 + 0.5), // 多等0.5秒再到下一步
                            cc.callFunc(resolve)
                        )
                    )
                )
            );
        });
    }

    /**
     * 引导下一笔，动画显示各点，并将火箭或画笔移到第一个点上
     */
    private animNextLine() {
        const lines = this.char.getLines();
        const nextLine = this.currentLine + 1;
        if (nextLine >= 0 && nextLine < lines.length) {
            this.currentLine = nextLine;
            this.nextDot = 0;
            // 仅对引导节点做动画
            const line = lines[nextLine];

            line.forEach((dot, index) => {
                this.scheduleOnce(() => {
                    dot.showGuide();
                    if (index === line.length - 1) {
                        // 火箭或笔和最后一个点同步出来
                        const guideNode = this.state === WritingState.Dragable ? this.rocket : this.pen;

                        if (line.length > 1) {
                            guideNode.scale = 0;
                            // 计算前两个引导点的方向
                            const firstNode = line[0].node;
                            const firstNodePosition = firstNode.getPosition();
                            const dir0To1 = cc.v2(line[1].node.getPosition().sub(firstNodePosition));

                            if (this.state === WritingState.Dragable) {
                                // 沿着前两个节点的反向移动半个火箭的距离
                                guideNode.setPosition(guideNode.parent
                                    .convertToNodeSpaceAR(firstNode.parent.convertToWorldSpaceAR(firstNodePosition))
                                    .sub(dir0To1.mul(guideNode.height / 2 / dir0To1.mag())));
                                // 火箭的角度是要变的
                                guideNode.angle = -this.vectorsToDegress(dir0To1);
                            } else {
                                guideNode.setPosition(guideNode.parent
                                    .convertToNodeSpaceAR(firstNode.parent.convertToWorldSpaceAR(firstNodePosition))
                                    .sub(dir0To1.mul(10 / dir0To1.mag())));
                            }
                            guideNode.opacity = 255;
                            guideNode.active = true;
                            guideNode.runAction(
                                cc.sequence(
                                    cc.scaleTo(GUIDE_SHOWN_DURATION, 1, 1).easing(cc.easeBackOut()),
                                    cc.callFunc(() => {
                                        // 引导节点（火箭/笔）显示出来后，再设置触摸回调
                                        if (this.state === WritingState.Dragable) {
                                            this.switchRocketListener(true);
                                        } else if (this.state === WritingState.Paintable) {
                                            this.switchPenListener(true);
                                            this.char.showDrawPanel();
                                        } else {
                                            console.error('引导节点动画显示完毕时不是可操作状态', this.state);
                                        }
                                    })
                                )
                            );
                        } else {
                            // 如果只有一个点，隐藏引导工具图片，星星闪烁
                            // 直接移到引导点上
                            guideNode.position = guideNode.parent.convertToNodeSpaceAR(
                                dot.node.parent.convertToWorldSpaceAR(dot.node.position)
                            );
                            if (this.state === WritingState.Dragable) {
                                // 火箭的话，一个点的不显示
                                guideNode.opacity = 0;
                            }
                            guideNode.active = true;
                            this.scheduleOnce(() => {
                                if (this.state === WritingState.Dragable || this.state === WritingState.Paintable) {
                                    // 隐藏引导节点图片后，再设置触摸回调
                                    if (this.state === WritingState.Dragable) {
                                        this.switchRocketListener(true);
                                    } else {
                                        this.switchPenListener(true);
                                        this.char.showDrawPanel();
                                    }

                                    // 星星节点缩放
                                    const duration = 1,
                                        gap = 0.3;
                                    dot.node.runAction(
                                        cc.repeatForever(
                                            cc.sequence(
                                                cc.scaleTo(duration / 2, 1.1),
                                                cc.scaleTo(duration / 2, 1),
                                                cc.delayTime(gap)
                                            )
                                        )
                                    );
                                } else {
                                    console.error('引导节点动画显示完毕时不是可操作状态', this.state);
                                }
                            }, 1);
                        }
                    }
                }, DOT_SHOWN_GAP * index);
            });
        } else {
            console.error('当前已经是最后一条线了，没有下一条做动画');
        }
    }

    /**
     * 向量转角度值
     * @param dirVec 待计算向量
     */
    private vectorsToDegress(dirVec: cc.Vec2) {
        const comVec = cc.v2(0, 1); // 水平向右的对比向量
        const radian = dirVec.signAngle(comVec); // 求方向向量与对比向量间的弧度
        const degree = cc.misc.radiansToDegrees(radian); // 将弧度转换为角度
        return degree;
    }

    /**
     * 切换火箭拖拽支持状态
     */
    private switchRocketListener(enabled: boolean) {
        if (enabled) {
            this.rocket.on(cc.Node.EventType.TOUCH_START, this.onRocketTouchStart, this);
            this.rocket.on(cc.Node.EventType.TOUCH_MOVE, this.onRocketTouchMove, this);
            this.rocket.on(cc.Node.EventType.TOUCH_CANCEL, this.onRocketTouchEndOrCancel, this);
            this.rocket.on(cc.Node.EventType.TOUCH_END, this.onRocketTouchEndOrCancel, this);
        } else {
            this.rocket.off(cc.Node.EventType.TOUCH_START, this.onRocketTouchStart, this);
            this.rocket.off(cc.Node.EventType.TOUCH_MOVE, this.onRocketTouchMove, this);
            this.rocket.off(cc.Node.EventType.TOUCH_CANCEL, this.onRocketTouchEndOrCancel, this);
            this.rocket.off(cc.Node.EventType.TOUCH_END, this.onRocketTouchEndOrCancel, this);
        }
    }

    // 最后一次有效拖动触发位置
    private lastDragAvailablePosition: cc.Vec2 = null;

    private onRocketTouchStart(event: cc.Event.EventTouch) {
        // 记录一开始拖拽的坐标，后面手的移动，都和前一次的有效位置比较，沿着轨迹方向的才允许动
        this.lastDragAvailablePosition = event.getLocation();

        const line = this.char.getLines()[this.currentLine];
        if (line && this.nextDot < line.length) {
            if (line.length > 1) {
                // 启动移动动画
                this.rocket.getComponent(cc.Animation).play('rocket_moving');
            } else {
                // 只有一个点，点上了就激活
                const next = line[this.nextDot];
                // 取消缩放引导
                next.node.stopAllActions();
                next.turnOn();
                this.nextDot++;
            }
        }
    }

    /**
     * 火箭拖拽，只有移动方向是朝着下一个点的，才动。如果碰到下一个点，点亮。
     * @param event
     */
    private onRocketTouchMove(event: cc.Event.EventTouch) {
        if (this.state !== WritingState.Dragable) {
            console.error('火箭拖拽中状态不对', this.state);
            return;
        }

        // 计算当前移动距离在当前点与下一个点之间的投影，作为新的点
        const line = this.char.getLines()[this.currentLine];
        if (line && this.nextDot < line.length) {
            // 距离上一次有效点的偏移量
            const newLocation = event.getLocation();
            const delta = newLocation.sub(this.lastDragAvailablePosition);

            if (delta.magSqr() === 0) {
                // 位置没变，无需计算
                return;
            }

            const node = this.rocket;
            const next = line[this.nextDot];

            // 当前火箭位置与下一个点的向量
            const dirToNext = cc.v2(
                next.node.parent
                    .convertToWorldSpaceAR(next.node.position)
                    .sub(node.parent.convertToWorldSpaceAR(node.position))
            );

            // 如果夹角在正负90度范围内，说明新的方向一致，可以移动
            const radian = dirToNext.signAngle(delta);
            if (radian > -Math.PI / 2 && radian < Math.PI / 2) {
                // 按投影方向移动指定距离
                const projection = delta.project(dirToNext);

                let newPos = node.getPosition().add(projection);
                if (projection.magSqr() >= dirToNext.magSqr()) {
                    // 防止超出下一个点
                    newPos = node.parent.convertToNodeSpaceAR(
                        next.node.parent.convertToWorldSpaceAR(next.node.getPosition())
                    );

                    // 已经到了下一个点，激活
                    next.turnOn();
                    this.nextDot++;
                } else {
                    // 针对绑定在下一个点的未点亮的星星或小点，若已经过，则点亮之
                    next.getRelativeDots()
                        .filter((dot) => !dot.isTriggered())
                        .forEach((dot) => {
                            // 新位置指向星星或小点的向量
                            const dirToDot = cc.v2(
                                dot.node.parent
                                    .convertToWorldSpaceAR(dot.node.getPosition())
                                    .sub(node.parent.convertToWorldSpaceAR(newPos))
                            );

                            let turnOn = false;
                            if (dirToDot.magSqr() === 0) {
                                // 就在星星或小点上面，点亮
                                turnOn = true;
                            } else {
                                // 看新位置与下一个点及星星或小点的两个向量夹角，若是直角或钝角，说明已经经过了，可以点亮
                                // 因为火箭是沿着两个引导点之间的线段移动的，可以直接用之前位置与下一个点的向量代替最新点与下一个点的向量来计算夹角
                                const radianOfDotAndNext = dirToNext.signAngle(dirToDot);
                                turnOn = radianOfDotAndNext <= -Math.PI / 2 || radianOfDotAndNext >= Math.PI / 2;
                            }

                            if (turnOn) {
                                dot.turnOn();
                            }
                        });
                }
                node.x = newPos.x;
                node.y = newPos.y;

                // 火箭的角度由前一个点指向当前目标点
                node.angle = -this.vectorsToDegress(dirToNext);

                // 更新拖拽位置
                this.lastDragAvailablePosition = newLocation;
            } else {
                console.debug('反向不变化', radian, dirToNext.magSqr());
            }
        } else {
            console.warn('当前笔画已经拖完了');
        }
    }

    /**
     * 火箭拖拽完毕，如果最后一点已经触发，转下一条线
     */
    private onRocketTouchEndOrCancel() {
        if (this.state !== WritingState.Dragable) {
            console.error('火箭拖拽完毕状态不对', this.state);
            return;
        }

        // 切换到空闲状态动画
        this.rocket.getComponent(cc.Animation).play('rocket_idel');

        const lines = this.char.getLines();
        if (this.nextDot === lines[this.currentLine].length) {
            // 抬手时当前笔画的最后一笔已激活，触发下一笔动画
            this.switchRocketListener(false);
            this.rocket.active = false;
            if (this.currentLine < lines.length - 1) {
                // 还没到最后一条线
                this.animNextLine();
            } else {
                this.state = WritingState.DragCompleteAnimating;
                this.playCharAnimation()
                    // 播完动画后播下音频
                    .then(this.playCharAudio.bind(this))
                    .then(() => {
                        if (this.state === WritingState.DragCompleteAnimating) {
                            // 重置所有点
                            this.char.reset();
                            this.currentLine = -1;
                            this.nextDot = -1;
                            // 引导画线
                            this.state = WritingState.Paintable;
                            this.animNextLine();
                        } else {
                            console.error('拖拽动画显示完毕时状态不对', this.state);
                        }
                    });
            }
        }
    }

    /**
     * 切换画笔拖拽支持状态
     */
    private switchPenListener(enabled: boolean) {
        if (enabled) {
            this.pen.on(cc.Node.EventType.TOUCH_START, this.onPenTouchStart, this);
            this.pen.on(cc.Node.EventType.TOUCH_MOVE, this.onPenTouchMove, this);
            this.pen.on(cc.Node.EventType.TOUCH_CANCEL, this.onPenTouchEndOrCancel, this);
            this.pen.on(cc.Node.EventType.TOUCH_END, this.onPenTouchEndOrCancel, this);
        } else {
            this.pen.off(cc.Node.EventType.TOUCH_START, this.onPenTouchStart, this);
            this.pen.off(cc.Node.EventType.TOUCH_MOVE, this.onPenTouchMove, this);
            this.pen.off(cc.Node.EventType.TOUCH_CANCEL, this.onPenTouchEndOrCancel, this);
            this.pen.off(cc.Node.EventType.TOUCH_END, this.onPenTouchEndOrCancel, this);
        }
    }

    private drawPath: cc.Vec2[][] = [];
    private isDrawingReset = false;

    private onPenTouchStart() {
        // 新的按下时，重置标记
        this.isDrawingReset = false;

        if (!Array.isArray(this.drawPath[this.currentLine])) {
            // 起始点是画笔所在
            // TODO 非2.1.2版本，要切换到节点坐标系，2.1.2有bug
            // https://forum.cocos.com/t/cocos-creator-2-1-2-graphics/80904/8
            this.drawPath[this.currentLine] = [
                // 将画笔所在点作为第一个触摸点
                // this.char.drawPanel.node.convertToNodeSpaceAR(this.pen.parent.convertToWorldSpaceAR(this.pen.position)),
                this.pen.parent.convertToWorldSpaceAR(this.pen.getPosition()),
            ];
        }

        const line = this.char.getLines()[this.currentLine];
        if (line && line.length === 1 && this.nextDot < line.length) {
            // 取消缩放动效
            line[0].node.stopAllActions();
            // 只有一个点，点上了就激活
            this.onPenTouchMove({ getDelta: () => cc.v2(1, 1) });
        }
    }

    private onPenTouchMove(event: { getDelta: () => cc.Vec2 }) {
        if (this.state !== WritingState.Paintable) {
            console.error('画笔绘制中状态不对', this.state);
            return;
        }

        if (this.isDrawingReset) {
            // 已重置，不处理
            return;
        }

        if (event.getDelta().magSqr() === 0) {
            // 位置没变化，不画
            return;
        }

        const lines = this.char.getLines();
        const line = lines[this.currentLine];
        if (line && this.nextDot < line.length) {
            const next = line[this.nextDot];
            // TODO 非2.1.2版本，要切换到世界坐标系，2.1.2有bug
            // const nextPosD = this.drawPanel.node.convertToNodeSpaceAR(next.node.parent.convertToWorldSpaceAR(next.node.position));
            const nextPosW = next.node.parent.convertToWorldSpaceAR(next.node.getPosition());
            // 计算新点的位置
            const linePath = this.drawPath[this.currentLine];
            const delta = event.getDelta();

            // 转换成投影路线上的点
            const prevPosD = linePath[linePath.length - 1];
            const dirToNext = cc.v2(nextPosW.sub(prevPosD));
            const dirToNextLength = dirToNext.mag();

            let projectionLength = 0;
            let projection: cc.Vec2;
            if (dirToNextLength != 0) {
                projection = delta.project(dirToNext);
                projectionLength = projection.mag();
                if (projectionLength === 0) {
                    // 在投影方向上没有移动，不处理
                    return;
                }
            } else {
                // 对于一个点的情况，由于起始点就在下一个点上，dirToNextLength为0
                projection = cc.v2(0, 0);
            }

            let newPosD = prevPosD.add(projection);
            const distanceToNext = nextPosW.sub(newPosD).mag();
            const radian = dirToNextLength != 0 ? dirToNext.signAngle(projection) : 0;
            if (radian > -Math.PI / 2 && radian < Math.PI / 2) {
                // 方向相同
                if (dirToNextLength <= projectionLength) {
                    // 超出了，切下一个点
                    newPosD = nextPosW;
                    this.nextDot++;

                    // 防止一笔画太远，之前没被擦掉
                    if (!next.isTriggered()) {
                        next.erase();
                    }
                } else if (!next.isTriggered() && distanceToNext < this.drawPanel.lineWidth / 2) {
                    // 画到了，提前擦除，并防止重复擦
                    next.erase();
                }
            } else {
                // 方向相反，看下距离有没有超过前后两个点距离（如果一个点还没激活，就看有没有超过画笔起始点和第一个点的距离）
                // const distanceOfPrevAndNext =
                //     this.nextDot > 0
                //         ? next.node.position.sub(line[this.nextDot - 1].node.position).mag()
                //         : 0;
                //         // : linePath[0].sub(newPosD).mag();
                // if (distanceToNext > distanceOfPrevAndNext + this.drawPanel.lineWidth / 2) {
                //     console.warn(
                //         '超过了，重置当前线段',
                //         `距离下一个 ${distanceToNext}`,
                //         `上一个点是 ${this.nextDot > 0 ? '实际点' : '初始点'}`,
                //         distanceOfPrevAndNext
                //     );
                //     this.isDrawingReset = true;
                //     this.switchPenListener(false);
                //     this.pen.active = false;
                //     this.nextDot = -1;
                //     this.currentLine -= 1;
                //     this.drawPath.pop();
                //     this.draw(this.drawPath);
                //     this.animNextLine();

                //     return;
                // }

                //反向，改为直接返回
                return;
            }

            // 根据当前偏移，在graphic上对应位置画，并移动画笔
            this.drawPath[this.currentLine].push(newPosD);
            this.draw(this.drawPath);
            // TODO 非2.1.2版本，要切换到世界坐标系，2.1.2有bug
            // const penPos = this.pen.parent.convertToNodeSpaceAR(this.drawPanel.node.convertToWorldSpaceAR(newPosD));
            const penPos = this.pen.parent.convertToNodeSpaceAR(newPosD);
            this.pen.x = penPos.x;
            this.pen.y = penPos.y;

            // 如果激活了最后一个点，要转下一笔了
            if (this.nextDot === lines[this.currentLine].length) {
                // 先设置重置标记，不处理后续的事件
                this.turnToNextDraw(lines);
            }
        } else {
            console.warn('当前笔画已经都画到了');
        }
    }

    /**
     * 转向下一笔的绘制或直接完成
     * @param lines 所有笔画
     */
    private turnToNextDraw(lines: WritingDot[][]) {
        this.isDrawingReset = true;

        this.switchPenListener(false);
        this.pen.active = false;
        if (this.currentLine < lines.length - 1) {
            // 还没到最后一条线，动画引导
            this.animNextLine();
        } else {
            this.framework && this.framework.lockSwitch();
            this.state = WritingState.PaintCompleteAnimating;

            // 填充画布
            this.char
                .fill()
                .then(this.playCharAnimation.bind(this))
                // 动画完播下音频再通关
                .then(this.playCharAudio.bind(this))
                .then(() => {
                    if (this.state === WritingState.PaintCompleteAnimating) {
                        this.state = WritingState.Finished;
                        console.debug('描红完成');

                        if (this.framework) {
                            this.framework.onStarGot(3);
                            this.framework.onPracticeFinished();
                        }
                    } else {
                        console.error('绘制动画显示完毕时状态不对', this.state);
                    }
                });
        }
    }

    private onPenTouchEndOrCancel() {
        if (this.state !== WritingState.Paintable) {
            console.error('画笔绘制完毕状态不对', this.state);
            return;
        }

        if (this.isDrawingReset) {
            // 已重置，不处理
            return;
        }

        const lines = this.char.getLines();
        const line = lines[this.currentLine];
        if (line && this.nextDot < line.length && this.nextDot === lines[this.currentLine].length - 1) {
            const next = line[this.nextDot];
            if (next.isTriggered()) {
                // 抬笔时，最后一个点已擦除了，只是没画到，自动切
                this.nextDot++;
                this.turnToNextDraw(lines);
            }
        }
    }

    /**
     * 绘制路径，每次都是清除画布后重新绘制完整路径，这样stroke几次，drawcall才会增加多少
     * @param path
     */
    private draw(path: cc.Vec2[][]) {
        this.drawPanel.clear();
        path.forEach((line) => {
            if (line.length === 2 && line[0].equals(line[1])) {
                this.drawPanel.arc(line[0].x, line[0].y, 10, 0, 360);
            } else {
                let prevValidDot: cc.Vec2 = null;
                line.forEach((dot, index) => {
                    if (index === 0) {
                        this.drawPanel.moveTo(dot.x, dot.y);
                    } else {
                        if (index < line.length - 1) {
                            // 过滤距离太近的若干个点
                            if (dot.sub(prevValidDot).mag() < DRAW_DOT_DISTANCE_MIN) {
                                // console.debug('skip', dot.x, dot.y);
                                return;
                            }
                        }
                        this.drawPanel.lineTo(dot.x, dot.y);
                    }
                    prevValidDot = dot;
                });
            }
            this.drawPanel.stroke();
        });
    }
}
