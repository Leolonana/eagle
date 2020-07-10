
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/Writing.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73186T7eDZAtK7tWjHJ/+0V', 'Writing');
// Writing/Script/Writing.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WritingChar_1 = require("./WritingChar");
var WritingDot_1 = require("./WritingDot");
var Practice_1 = require("./Practice");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DOT_SHOWN_GAP = 0.15;
var GUIDE_SHOWN_DURATION = WritingDot_1.default.LAST_DOT_SHOWN_DURATION;
// 两点的最小距离，如果小于这个，则不画
var DRAW_DOT_DISTANCE_MIN = 30;
// 描红练习状态定义
var WritingState;
(function (WritingState) {
    /**
     * 初始状态
     */
    WritingState[WritingState["Init"] = 0] = "Init";
    /**
     * 初始显示动画播放中
     */
    WritingState[WritingState["ShownAnimating"] = 1] = "ShownAnimating";
    /**
     * 可拖动
     */
    WritingState[WritingState["Dragable"] = 2] = "Dragable";
    /**
     * 拖动完成动画播放中
     */
    WritingState[WritingState["DragCompleteAnimating"] = 3] = "DragCompleteAnimating";
    /**
     * 可绘制
     */
    WritingState[WritingState["Paintable"] = 4] = "Paintable";
    /**
     * 绘制完成动画播放中
     */
    WritingState[WritingState["PaintCompleteAnimating"] = 5] = "PaintCompleteAnimating";
    /**
     * 已完成
     */
    WritingState[WritingState["Finished"] = 6] = "Finished";
})(WritingState || (WritingState = {}));
/**
 * 描红练习
 */
var Writing = /** @class */ (function (_super) {
    __extends(Writing, _super);
    function Writing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rocket = null;
        _this.pen = null;
        _this.charContainer = null;
        _this.jellyAudio = null;
        _this.mainDotShown = null;
        _this.mainDotErased = null;
        _this.starFinishedShown = null;
        _this.rightStarShown = null;
        _this.drawPanel = null;
        _this.state = WritingState.Init;
        _this.char = null;
        _this.currentLine = -1;
        _this.nextDot = -1;
        _this.text = null;
        // 对应的音频
        _this.spelling = null;
        _this.isFirstLineGuided = false;
        // 最后一次有效拖动触发位置
        _this.lastDragAvailablePosition = null;
        _this.drawPath = [];
        _this.isDrawingReset = false;
        return _this;
    }
    Writing.prototype.onLoad = function () {
        this.init("", "", "a");
    };
    Writing.prototype.init = function (courseId, practiceId, practiceData) {
        var _this = this;
        // 数据就是预制体的名称（字符）
        this.text = practiceData;
        return new Promise(function (resolve, reject) {
            cc.loader.loadRes("Writing/" + practiceData, cc.Prefab, function (error, res) {
                if (error) {
                    console.error('描红练习加载失败', practiceData, error);
                    reject(error);
                    return;
                }
                if (!_this.isValid) {
                    cc.loader.release(res);
                    reject();
                    return;
                }
                var charNode = cc.instantiate(res);
                charNode.parent = _this.charContainer;
                _this.char = charNode.getComponent(WritingChar_1.default);
                // 提前初始化节点并设置音效
                _this.char.getLines().forEach(function (line) {
                    line.forEach(function (dot) {
                        dot.setAudios(_this.mainDotShown, _this.mainDotErased, _this.starFinishedShown, _this.rightStarShown);
                    });
                });
                // 初始化画板
                _this.drawPanel = _this.char.drawPanel;
            });
        });
    };
    Writing.prototype.onShow = function () {
        var _this = this;
        // 在首次显示时启动动画
        if (!this.isFirstLineGuided) {
            this.isFirstLineGuided = true;
            // 播完音频再播动画
            this.playCharAudio().then(function () {
                if (_this.state === WritingState.Init) {
                    _this.state = WritingState.ShownAnimating;
                    _this.playCharAnimation().then(function () {
                        if (_this.state === WritingState.ShownAnimating) {
                            _this.state = WritingState.Dragable;
                            _this.animNextLine();
                        }
                        else {
                            console.error('显示动画完成时状态不是初始动画播放中状态', _this.state);
                        }
                    });
                }
                else {
                    console.error('初始引导时状态不是初始状态', _this.state);
                }
            });
        }
    };
    /**
     * 播放字母音频
     */
    Writing.prototype.playCharAudio = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.spelling) {
                cc.audioEngine.setFinishCallback(cc.audioEngine.play(_this.spelling, false, 1), resolve);
            }
            else {
                console.error('缺少音频资源', _this.text);
                resolve();
            }
        });
    };
    /**
     * 播放字母动画
     */
    Writing.prototype.playCharAnimation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var upDur = 0.2, downDur = 0.15, flatDur = 0.15, elasticDur = 0.2;
            var originY = _this.char.node.y;
            var scaleX = [0.8, 1, 1.2, 0.9, 1.1, 1];
            var scaleY = [1.2, 1, 0.8, 1.1, 0.9, 1];
            //果冻效果
            _this.char.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(function () {
                //播放果冻音效
                cc.audioEngine.play(_this.jellyAudio, false, 1);
            }), cc.spawn(
            // 变瘦向上飞，然后掉下来变扁，再弹一下恢复
            cc.sequence(cc.moveTo(upDur, 0, originY + 100), cc.moveTo(downDur, 0, originY)
            // cc.delayTime(flatDur),
            // cc.moveTo(elasticDur, 0, originY + 50),
            // cc.moveTo(elasticDur, 0, originY)
            ), cc.sequence(cc.scaleTo(upDur, scaleX[0], scaleY[0]), cc.scaleTo(downDur, scaleX[1], scaleY[1]), cc.scaleTo(flatDur, scaleX[2], scaleY[2]), cc.scaleTo(elasticDur, scaleX[3], scaleY[3]), cc.scaleTo(elasticDur, scaleX[4], scaleY[4]), cc.scaleTo(elasticDur, scaleX[5], scaleY[5])), cc.sequence(cc.delayTime(upDur + downDur + flatDur + elasticDur * 3 + 0.5), // 多等0.5秒再到下一步
            cc.callFunc(resolve)))));
        });
    };
    /**
     * 引导下一笔，动画显示各点，并将火箭或画笔移到第一个点上
     */
    Writing.prototype.animNextLine = function () {
        var _this = this;
        var lines = this.char.getLines();
        var nextLine = this.currentLine + 1;
        if (nextLine >= 0 && nextLine < lines.length) {
            this.currentLine = nextLine;
            this.nextDot = 0;
            // 仅对引导节点做动画
            var line_1 = lines[nextLine];
            line_1.forEach(function (dot, index) {
                _this.scheduleOnce(function () {
                    dot.showGuide();
                    if (index === line_1.length - 1) {
                        // 火箭或笔和最后一个点同步出来
                        var guideNode = _this.state === WritingState.Dragable ? _this.rocket : _this.pen;
                        if (line_1.length > 1) {
                            guideNode.scale = 0;
                            // 计算前两个引导点的方向
                            var firstNode = line_1[0].node;
                            var firstNodePosition = firstNode.getPosition();
                            var dir0To1 = cc.v2(line_1[1].node.getPosition().sub(firstNodePosition));
                            if (_this.state === WritingState.Dragable) {
                                // 沿着前两个节点的反向移动半个火箭的距离
                                guideNode.setPosition(guideNode.parent
                                    .convertToNodeSpaceAR(firstNode.parent.convertToWorldSpaceAR(firstNodePosition))
                                    .sub(dir0To1.mul(guideNode.height / 2 / dir0To1.mag())));
                                // 火箭的角度是要变的
                                guideNode.angle = -_this.vectorsToDegress(dir0To1);
                            }
                            else {
                                guideNode.setPosition(guideNode.parent
                                    .convertToNodeSpaceAR(firstNode.parent.convertToWorldSpaceAR(firstNodePosition))
                                    .sub(dir0To1.mul(10 / dir0To1.mag())));
                            }
                            guideNode.opacity = 255;
                            guideNode.active = true;
                            guideNode.runAction(cc.sequence(cc.scaleTo(GUIDE_SHOWN_DURATION, 1, 1).easing(cc.easeBackOut()), cc.callFunc(function () {
                                // 引导节点（火箭/笔）显示出来后，再设置触摸回调
                                if (_this.state === WritingState.Dragable) {
                                    _this.switchRocketListener(true);
                                }
                                else if (_this.state === WritingState.Paintable) {
                                    _this.switchPenListener(true);
                                    _this.char.showDrawPanel();
                                }
                                else {
                                    console.error('引导节点动画显示完毕时不是可操作状态', _this.state);
                                }
                            })));
                        }
                        else {
                            // 如果只有一个点，隐藏引导工具图片，星星闪烁
                            // 直接移到引导点上
                            guideNode.position = guideNode.parent.convertToNodeSpaceAR(dot.node.parent.convertToWorldSpaceAR(dot.node.position));
                            if (_this.state === WritingState.Dragable) {
                                // 火箭的话，一个点的不显示
                                guideNode.opacity = 0;
                            }
                            guideNode.active = true;
                            _this.scheduleOnce(function () {
                                if (_this.state === WritingState.Dragable || _this.state === WritingState.Paintable) {
                                    // 隐藏引导节点图片后，再设置触摸回调
                                    if (_this.state === WritingState.Dragable) {
                                        _this.switchRocketListener(true);
                                    }
                                    else {
                                        _this.switchPenListener(true);
                                        _this.char.showDrawPanel();
                                    }
                                    // 星星节点缩放
                                    var duration = 1, gap = 0.3;
                                    dot.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(duration / 2, 1.1), cc.scaleTo(duration / 2, 1), cc.delayTime(gap))));
                                }
                                else {
                                    console.error('引导节点动画显示完毕时不是可操作状态', _this.state);
                                }
                            }, 1);
                        }
                    }
                }, DOT_SHOWN_GAP * index);
            });
        }
        else {
            console.error('当前已经是最后一条线了，没有下一条做动画');
        }
    };
    /**
     * 向量转角度值
     * @param dirVec 待计算向量
     */
    Writing.prototype.vectorsToDegress = function (dirVec) {
        var comVec = cc.v2(0, 1); // 水平向右的对比向量
        var radian = dirVec.signAngle(comVec); // 求方向向量与对比向量间的弧度
        var degree = cc.misc.radiansToDegrees(radian); // 将弧度转换为角度
        return degree;
    };
    /**
     * 切换火箭拖拽支持状态
     */
    Writing.prototype.switchRocketListener = function (enabled) {
        if (enabled) {
            this.rocket.on(cc.Node.EventType.TOUCH_START, this.onRocketTouchStart, this);
            this.rocket.on(cc.Node.EventType.TOUCH_MOVE, this.onRocketTouchMove, this);
            this.rocket.on(cc.Node.EventType.TOUCH_CANCEL, this.onRocketTouchEndOrCancel, this);
            this.rocket.on(cc.Node.EventType.TOUCH_END, this.onRocketTouchEndOrCancel, this);
        }
        else {
            this.rocket.off(cc.Node.EventType.TOUCH_START, this.onRocketTouchStart, this);
            this.rocket.off(cc.Node.EventType.TOUCH_MOVE, this.onRocketTouchMove, this);
            this.rocket.off(cc.Node.EventType.TOUCH_CANCEL, this.onRocketTouchEndOrCancel, this);
            this.rocket.off(cc.Node.EventType.TOUCH_END, this.onRocketTouchEndOrCancel, this);
        }
    };
    Writing.prototype.onRocketTouchStart = function (event) {
        // 记录一开始拖拽的坐标，后面手的移动，都和前一次的有效位置比较，沿着轨迹方向的才允许动
        this.lastDragAvailablePosition = event.getLocation();
        var line = this.char.getLines()[this.currentLine];
        if (line && this.nextDot < line.length) {
            if (line.length > 1) {
                // 启动移动动画
                this.rocket.getComponent(cc.Animation).play('rocket_moving');
            }
            else {
                // 只有一个点，点上了就激活
                var next = line[this.nextDot];
                // 取消缩放引导
                next.node.stopAllActions();
                next.turnOn();
                this.nextDot++;
            }
        }
    };
    /**
     * 火箭拖拽，只有移动方向是朝着下一个点的，才动。如果碰到下一个点，点亮。
     * @param event
     */
    Writing.prototype.onRocketTouchMove = function (event) {
        if (this.state !== WritingState.Dragable) {
            console.error('火箭拖拽中状态不对', this.state);
            return;
        }
        // 计算当前移动距离在当前点与下一个点之间的投影，作为新的点
        var line = this.char.getLines()[this.currentLine];
        if (line && this.nextDot < line.length) {
            // 距离上一次有效点的偏移量
            var newLocation = event.getLocation();
            var delta = newLocation.sub(this.lastDragAvailablePosition);
            if (delta.magSqr() === 0) {
                // 位置没变，无需计算
                return;
            }
            var node_1 = this.rocket;
            var next = line[this.nextDot];
            // 当前火箭位置与下一个点的向量
            var dirToNext_1 = cc.v2(next.node.parent
                .convertToWorldSpaceAR(next.node.position)
                .sub(node_1.parent.convertToWorldSpaceAR(node_1.position)));
            // 如果夹角在正负90度范围内，说明新的方向一致，可以移动
            var radian = dirToNext_1.signAngle(delta);
            if (radian > -Math.PI / 2 && radian < Math.PI / 2) {
                // 按投影方向移动指定距离
                var projection = delta.project(dirToNext_1);
                var newPos_1 = node_1.getPosition().add(projection);
                if (projection.magSqr() >= dirToNext_1.magSqr()) {
                    // 防止超出下一个点
                    newPos_1 = node_1.parent.convertToNodeSpaceAR(next.node.parent.convertToWorldSpaceAR(next.node.getPosition()));
                    // 已经到了下一个点，激活
                    next.turnOn();
                    this.nextDot++;
                }
                else {
                    // 针对绑定在下一个点的未点亮的星星或小点，若已经过，则点亮之
                    next.getRelativeDots()
                        .filter(function (dot) { return !dot.isTriggered(); })
                        .forEach(function (dot) {
                        // 新位置指向星星或小点的向量
                        var dirToDot = cc.v2(dot.node.parent
                            .convertToWorldSpaceAR(dot.node.getPosition())
                            .sub(node_1.parent.convertToWorldSpaceAR(newPos_1)));
                        var turnOn = false;
                        if (dirToDot.magSqr() === 0) {
                            // 就在星星或小点上面，点亮
                            turnOn = true;
                        }
                        else {
                            // 看新位置与下一个点及星星或小点的两个向量夹角，若是直角或钝角，说明已经经过了，可以点亮
                            // 因为火箭是沿着两个引导点之间的线段移动的，可以直接用之前位置与下一个点的向量代替最新点与下一个点的向量来计算夹角
                            var radianOfDotAndNext = dirToNext_1.signAngle(dirToDot);
                            turnOn = radianOfDotAndNext <= -Math.PI / 2 || radianOfDotAndNext >= Math.PI / 2;
                        }
                        if (turnOn) {
                            dot.turnOn();
                        }
                    });
                }
                node_1.x = newPos_1.x;
                node_1.y = newPos_1.y;
                // 火箭的角度由前一个点指向当前目标点
                node_1.angle = -this.vectorsToDegress(dirToNext_1);
                // 更新拖拽位置
                this.lastDragAvailablePosition = newLocation;
            }
            else {
                console.debug('反向不变化', radian, dirToNext_1.magSqr());
            }
        }
        else {
            console.warn('当前笔画已经拖完了');
        }
    };
    /**
     * 火箭拖拽完毕，如果最后一点已经触发，转下一条线
     */
    Writing.prototype.onRocketTouchEndOrCancel = function () {
        var _this = this;
        if (this.state !== WritingState.Dragable) {
            console.error('火箭拖拽完毕状态不对', this.state);
            return;
        }
        // 切换到空闲状态动画
        this.rocket.getComponent(cc.Animation).play('rocket_idel');
        var lines = this.char.getLines();
        if (this.nextDot === lines[this.currentLine].length) {
            // 抬手时当前笔画的最后一笔已激活，触发下一笔动画
            this.switchRocketListener(false);
            this.rocket.active = false;
            if (this.currentLine < lines.length - 1) {
                // 还没到最后一条线
                this.animNextLine();
            }
            else {
                this.state = WritingState.DragCompleteAnimating;
                this.playCharAnimation()
                    // 播完动画后播下音频
                    .then(this.playCharAudio.bind(this))
                    .then(function () {
                    if (_this.state === WritingState.DragCompleteAnimating) {
                        // 重置所有点
                        _this.char.reset();
                        _this.currentLine = -1;
                        _this.nextDot = -1;
                        // 引导画线
                        _this.state = WritingState.Paintable;
                        _this.animNextLine();
                    }
                    else {
                        console.error('拖拽动画显示完毕时状态不对', _this.state);
                    }
                });
            }
        }
    };
    /**
     * 切换画笔拖拽支持状态
     */
    Writing.prototype.switchPenListener = function (enabled) {
        if (enabled) {
            this.pen.on(cc.Node.EventType.TOUCH_START, this.onPenTouchStart, this);
            this.pen.on(cc.Node.EventType.TOUCH_MOVE, this.onPenTouchMove, this);
            this.pen.on(cc.Node.EventType.TOUCH_CANCEL, this.onPenTouchEndOrCancel, this);
            this.pen.on(cc.Node.EventType.TOUCH_END, this.onPenTouchEndOrCancel, this);
        }
        else {
            this.pen.off(cc.Node.EventType.TOUCH_START, this.onPenTouchStart, this);
            this.pen.off(cc.Node.EventType.TOUCH_MOVE, this.onPenTouchMove, this);
            this.pen.off(cc.Node.EventType.TOUCH_CANCEL, this.onPenTouchEndOrCancel, this);
            this.pen.off(cc.Node.EventType.TOUCH_END, this.onPenTouchEndOrCancel, this);
        }
    };
    Writing.prototype.onPenTouchStart = function () {
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
        var line = this.char.getLines()[this.currentLine];
        if (line && line.length === 1 && this.nextDot < line.length) {
            // 取消缩放动效
            line[0].node.stopAllActions();
            // 只有一个点，点上了就激活
            this.onPenTouchMove({ getDelta: function () { return cc.v2(1, 1); } });
        }
    };
    Writing.prototype.onPenTouchMove = function (event) {
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
        var lines = this.char.getLines();
        var line = lines[this.currentLine];
        if (line && this.nextDot < line.length) {
            var next = line[this.nextDot];
            // TODO 非2.1.2版本，要切换到世界坐标系，2.1.2有bug
            // const nextPosD = this.drawPanel.node.convertToNodeSpaceAR(next.node.parent.convertToWorldSpaceAR(next.node.position));
            var nextPosW = next.node.parent.convertToWorldSpaceAR(next.node.getPosition());
            // 计算新点的位置
            var linePath = this.drawPath[this.currentLine];
            var delta = event.getDelta();
            // 转换成投影路线上的点
            var prevPosD = linePath[linePath.length - 1];
            var dirToNext = cc.v2(nextPosW.sub(prevPosD));
            var dirToNextLength = dirToNext.mag();
            var projectionLength = 0;
            var projection = void 0;
            if (dirToNextLength != 0) {
                projection = delta.project(dirToNext);
                projectionLength = projection.mag();
                if (projectionLength === 0) {
                    // 在投影方向上没有移动，不处理
                    return;
                }
            }
            else {
                // 对于一个点的情况，由于起始点就在下一个点上，dirToNextLength为0
                projection = cc.v2(0, 0);
            }
            var newPosD = prevPosD.add(projection);
            var distanceToNext = nextPosW.sub(newPosD).mag();
            var radian = dirToNextLength != 0 ? dirToNext.signAngle(projection) : 0;
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
                }
                else if (!next.isTriggered() && distanceToNext < this.drawPanel.lineWidth / 2) {
                    // 画到了，提前擦除，并防止重复擦
                    next.erase();
                }
            }
            else {
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
            var penPos = this.pen.parent.convertToNodeSpaceAR(newPosD);
            this.pen.x = penPos.x;
            this.pen.y = penPos.y;
            // 如果激活了最后一个点，要转下一笔了
            if (this.nextDot === lines[this.currentLine].length) {
                // 先设置重置标记，不处理后续的事件
                this.turnToNextDraw(lines);
            }
        }
        else {
            console.warn('当前笔画已经都画到了');
        }
    };
    /**
     * 转向下一笔的绘制或直接完成
     * @param lines 所有笔画
     */
    Writing.prototype.turnToNextDraw = function (lines) {
        var _this = this;
        this.isDrawingReset = true;
        this.switchPenListener(false);
        this.pen.active = false;
        if (this.currentLine < lines.length - 1) {
            // 还没到最后一条线，动画引导
            this.animNextLine();
        }
        else {
            this.framework && this.framework.lockSwitch();
            this.state = WritingState.PaintCompleteAnimating;
            // 填充画布
            this.char
                .fill()
                .then(this.playCharAnimation.bind(this))
                // 动画完播下音频再通关
                .then(this.playCharAudio.bind(this))
                .then(function () {
                if (_this.state === WritingState.PaintCompleteAnimating) {
                    _this.state = WritingState.Finished;
                    console.debug('描红完成');
                    if (_this.framework) {
                        _this.framework.onStarGot(3);
                        _this.framework.onPracticeFinished();
                    }
                }
                else {
                    console.error('绘制动画显示完毕时状态不对', _this.state);
                }
            });
        }
    };
    Writing.prototype.onPenTouchEndOrCancel = function () {
        if (this.state !== WritingState.Paintable) {
            console.error('画笔绘制完毕状态不对', this.state);
            return;
        }
        if (this.isDrawingReset) {
            // 已重置，不处理
            return;
        }
        var lines = this.char.getLines();
        var line = lines[this.currentLine];
        if (line && this.nextDot < line.length && this.nextDot === lines[this.currentLine].length - 1) {
            var next = line[this.nextDot];
            if (next.isTriggered()) {
                // 抬笔时，最后一个点已擦除了，只是没画到，自动切
                this.nextDot++;
                this.turnToNextDraw(lines);
            }
        }
    };
    /**
     * 绘制路径，每次都是清除画布后重新绘制完整路径，这样stroke几次，drawcall才会增加多少
     * @param path
     */
    Writing.prototype.draw = function (path) {
        var _this = this;
        this.drawPanel.clear();
        path.forEach(function (line) {
            if (line.length === 2 && line[0].equals(line[1])) {
                _this.drawPanel.arc(line[0].x, line[0].y, 10, 0, 360);
            }
            else {
                var prevValidDot_1 = null;
                line.forEach(function (dot, index) {
                    if (index === 0) {
                        _this.drawPanel.moveTo(dot.x, dot.y);
                    }
                    else {
                        if (index < line.length - 1) {
                            // 过滤距离太近的若干个点
                            if (dot.sub(prevValidDot_1).mag() < DRAW_DOT_DISTANCE_MIN) {
                                // console.debug('skip', dot.x, dot.y);
                                return;
                            }
                        }
                        _this.drawPanel.lineTo(dot.x, dot.y);
                    }
                    prevValidDot_1 = dot;
                });
            }
            _this.drawPanel.stroke();
        });
    };
    __decorate([
        property(cc.Node)
    ], Writing.prototype, "rocket", void 0);
    __decorate([
        property(cc.Node)
    ], Writing.prototype, "pen", void 0);
    __decorate([
        property(cc.Node)
    ], Writing.prototype, "charContainer", void 0);
    __decorate([
        property({ tooltip: '字母果冻效果音效', type: cc.AudioClip })
    ], Writing.prototype, "jellyAudio", void 0);
    __decorate([
        property({ tooltip: '黄色点出现音效', type: cc.AudioClip })
    ], Writing.prototype, "mainDotShown", void 0);
    __decorate([
        property({ tooltip: '黄色点擦除音效', type: cc.AudioClip })
    ], Writing.prototype, "mainDotErased", void 0);
    __decorate([
        property({ tooltip: '彩色星星出现音效', type: cc.AudioClip })
    ], Writing.prototype, "starFinishedShown", void 0);
    __decorate([
        property({ tooltip: '白色星星出现音效', type: cc.AudioClip })
    ], Writing.prototype, "rightStarShown", void 0);
    Writing = __decorate([
        ccclass
    ], Writing);
    return Writing;
}(Practice_1.default));
exports.default = Writing;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9Xcml0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QywyQ0FBc0M7QUFDdEMsdUNBQWtDO0FBRTVCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzNCLElBQU0sb0JBQW9CLEdBQUcsb0JBQVUsQ0FBQyx1QkFBdUIsQ0FBQztBQUVoRSxxQkFBcUI7QUFDckIsSUFBTSxxQkFBcUIsR0FBRyxFQUFFLENBQUM7QUFFakMsV0FBVztBQUNYLElBQVcsWUE2QlY7QUE3QkQsV0FBVyxZQUFZO0lBQ25COztPQUVHO0lBQ0gsK0NBQUksQ0FBQTtJQUNKOztPQUVHO0lBQ0gsbUVBQWMsQ0FBQTtJQUNkOztPQUVHO0lBQ0gsdURBQVEsQ0FBQTtJQUNSOztPQUVHO0lBQ0gsaUZBQXFCLENBQUE7SUFDckI7O09BRUc7SUFDSCx5REFBUyxDQUFBO0lBQ1Q7O09BRUc7SUFDSCxtRkFBc0IsQ0FBQTtJQUN0Qjs7T0FFRztJQUNILHVEQUFRLENBQUE7QUFDWixDQUFDLEVBN0JVLFlBQVksS0FBWixZQUFZLFFBNkJ0QjtBQUVEOztHQUVHO0FBRUg7SUFBcUMsMkJBQVE7SUFEN0M7UUFBQSxxRUE0ckJDO1FBenJCRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFHbkMsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUd2QyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFF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bEM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7a0RBQ2xCO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3NEQUNmO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO21EQUNsQjtJQXZCbkIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTJyQjNCO0lBQUQsY0FBQztDQTNyQkQsQUEyckJDLENBM3JCb0Msa0JBQVEsR0EyckI1QztrQkEzckJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdyaXRpbmdDaGFyIGZyb20gJy4vV3JpdGluZ0NoYXInO1xuaW1wb3J0IFdyaXRpbmdEb3QgZnJvbSAnLi9Xcml0aW5nRG90JztcbmltcG9ydCBQcmFjdGljZSBmcm9tICcuL1ByYWN0aWNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgRE9UX1NIT1dOX0dBUCA9IDAuMTU7XG5jb25zdCBHVUlERV9TSE9XTl9EVVJBVElPTiA9IFdyaXRpbmdEb3QuTEFTVF9ET1RfU0hPV05fRFVSQVRJT047XG5cbi8vIOS4pOeCueeahOacgOWwj+i3neemu++8jOWmguaenOWwj+S6jui/meS4qu+8jOWImeS4jeeUu1xuY29uc3QgRFJBV19ET1RfRElTVEFOQ0VfTUlOID0gMzA7XG5cbi8vIOaPj+e6oue7g+S5oOeKtuaAgeWumuS5iVxuY29uc3QgZW51bSBXcml0aW5nU3RhdGUge1xuICAgIC8qKlxuICAgICAqIOWIneWni+eKtuaAgVxuICAgICAqL1xuICAgIEluaXQsXG4gICAgLyoqXG4gICAgICog5Yid5aeL5pi+56S65Yqo55S75pKt5pS+5LitXG4gICAgICovXG4gICAgU2hvd25BbmltYXRpbmcsXG4gICAgLyoqXG4gICAgICog5Y+v5ouW5YqoXG4gICAgICovXG4gICAgRHJhZ2FibGUsXG4gICAgLyoqXG4gICAgICog5ouW5Yqo5a6M5oiQ5Yqo55S75pKt5pS+5LitXG4gICAgICovXG4gICAgRHJhZ0NvbXBsZXRlQW5pbWF0aW5nLFxuICAgIC8qKlxuICAgICAqIOWPr+e7mOWItlxuICAgICAqL1xuICAgIFBhaW50YWJsZSxcbiAgICAvKipcbiAgICAgKiDnu5jliLblrozmiJDliqjnlLvmkq3mlL7kuK1cbiAgICAgKi9cbiAgICBQYWludENvbXBsZXRlQW5pbWF0aW5nLFxuICAgIC8qKlxuICAgICAqIOW3suWujOaIkFxuICAgICAqL1xuICAgIEZpbmlzaGVkLFxufVxuXG4vKipcbiAqIOaPj+e6oue7g+S5oFxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JpdGluZyBleHRlbmRzIFByYWN0aWNlIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByb2NrZXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGVuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYXJDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogJ+Wtl+avjeaenOWGu+aViOaenOmfs+aViCcsIHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGplbGx5QXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn6buE6Imy54K55Ye6546w6Z+z5pWIJywgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgbWFpbkRvdFNob3duOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogJ+m7hOiJsueCueaTpumZpOmfs+aViCcsIHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIG1haW5Eb3RFcmFzZWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn5b2p6Imy5pif5pif5Ye6546w6Z+z5pWIJywgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc3RhckZpbmlzaGVkU2hvd246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn55m96Imy5pif5pif5Ye6546w6Z+z5pWIJywgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgcmlnaHRTdGFyU2hvd246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBkcmF3UGFuZWw6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGU6IFdyaXRpbmdTdGF0ZSA9IFdyaXRpbmdTdGF0ZS5Jbml0O1xuXG4gICAgcHJpdmF0ZSBjaGFyOiBXcml0aW5nQ2hhciA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJyZW50TGluZSA9IC0xO1xuICAgIHByaXZhdGUgbmV4dERvdCA9IC0xO1xuXG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmcgPSBudWxsO1xuICAgIC8vIOWvueW6lOeahOmfs+mikVxuICAgIHByaXZhdGUgc3BlbGxpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdChcIlwiLCBcIlwiLCBcImFcIilcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdChjb3Vyc2VJZDogc3RyaW5nLCBwcmFjdGljZUlkOiBzdHJpbmcsIHByYWN0aWNlRGF0YTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIOaVsOaNruWwseaYr+mihOWItuS9k+eahOWQjeensO+8iOWtl+espu+8iVxuICAgICAgICB0aGlzLnRleHQgPSBwcmFjdGljZURhdGE7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGBXcml0aW5nLyR7cHJhY3RpY2VEYXRhfWAsIGNjLlByZWZhYiwgKGVycm9yOiBFcnJvciwgcmVzOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5o+P57qi57uD5Lmg5Yqg6L295aSx6LSlJywgcHJhY3RpY2VEYXRhLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyk7XG4gICAgICAgICAgICAgICAgY2hhck5vZGUucGFyZW50ID0gdGhpcy5jaGFyQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhciA9IGNoYXJOb2RlLmdldENvbXBvbmVudChXcml0aW5nQ2hhcik7XG4gICAgICAgICAgICAgICAgLy8g5o+Q5YmN5Yid5aeL5YyW6IqC54K55bm26K6+572u6Z+z5pWIXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyLmdldExpbmVzKCkuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmZvckVhY2goKGRvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90LnNldEF1ZGlvcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5Eb3RTaG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5Eb3RFcmFzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFyRmluaXNoZWRTaG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U3RhclNob3duXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbnlLvmnb9cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYW5lbCA9IHRoaXMuY2hhci5kcmF3UGFuZWw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0ZpcnN0TGluZUd1aWRlZCA9IGZhbHNlO1xuXG4gICAgcHVibGljIG9uU2hvdygpIHtcbiAgICAgICAgLy8g5Zyo6aaW5qyh5pi+56S65pe25ZCv5Yqo5Yqo55S7XG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0TGluZUd1aWRlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TGluZUd1aWRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyDmkq3lrozpn7PpopHlho3mkq3liqjnlLtcbiAgICAgICAgICAgIHRoaXMucGxheUNoYXJBdWRpbygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBXcml0aW5nU3RhdGUuSW5pdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gV3JpdGluZ1N0YXRlLlNob3duQW5pbWF0aW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDaGFyQW5pbWF0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLlNob3duQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFdyaXRpbmdTdGF0ZS5EcmFnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1OZXh0TGluZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmmL7npLrliqjnlLvlrozmiJDml7bnirbmgIHkuI3mmK/liJ3lp4vliqjnlLvmkq3mlL7kuK3nirbmgIEnLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5Yid5aeL5byV5a+85pe254q25oCB5LiN5piv5Yid5aeL54q25oCBJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL7lrZfmr43pn7PpopFcbiAgICAgKi9cbiAgICBwcml2YXRlIHBsYXlDaGFyQXVkaW8oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3BlbGxpbmcpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc3BlbGxpbmcsIGZhbHNlLCAxKSwgcmVzb2x2ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+e8uuWwkemfs+mikei1hOa6kCcsIHRoaXMudGV4dCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL7lrZfmr43liqjnlLtcbiAgICAgKi9cbiAgICBwcml2YXRlIHBsYXlDaGFyQW5pbWF0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwRHVyID0gMC4yLFxuICAgICAgICAgICAgICAgIGRvd25EdXIgPSAwLjE1LFxuICAgICAgICAgICAgICAgIGZsYXREdXIgPSAwLjE1LFxuICAgICAgICAgICAgICAgIGVsYXN0aWNEdXIgPSAwLjI7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5ZID0gdGhpcy5jaGFyLm5vZGUueTtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IFswLjgsIDEsIDEuMiwgMC45LCAxLjEsIDFdO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gWzEuMiwgMSwgMC44LCAxLjEsIDAuOSwgMV07XG4gICAgICAgICAgICAvL+aenOWGu+aViOaenFxuICAgICAgICAgICAgdGhpcy5jaGFyLm5vZGUucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4zKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/mkq3mlL7mnpzlhrvpn7PmlYhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5qZWxseUF1ZGlvLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPmOeYpuWQkeS4iumjnu+8jOeEtuWQjuaOieS4i+adpeWPmOaJge+8jOWGjeW8ueS4gOS4i+aBouWkjVxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKHVwRHVyLCAwLCBvcmlnaW5ZICsgMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oZG93bkR1ciwgMCwgb3JpZ2luWSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5kZWxheVRpbWUoZmxhdER1ciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubW92ZVRvKGVsYXN0aWNEdXIsIDAsIG9yaWdpblkgKyA1MCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubW92ZVRvKGVsYXN0aWNEdXIsIDAsIG9yaWdpblkpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyh1cER1ciwgc2NhbGVYWzBdLCBzY2FsZVlbMF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZG93bkR1ciwgc2NhbGVYWzFdLCBzY2FsZVlbMV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZmxhdER1ciwgc2NhbGVYWzJdLCBzY2FsZVlbMl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZWxhc3RpY0R1ciwgc2NhbGVYWzNdLCBzY2FsZVlbM10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZWxhc3RpY0R1ciwgc2NhbGVYWzRdLCBzY2FsZVlbNF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZWxhc3RpY0R1ciwgc2NhbGVYWzVdLCBzY2FsZVlbNV0pXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKHVwRHVyICsgZG93bkR1ciArIGZsYXREdXIgKyBlbGFzdGljRHVyICogMyArIDAuNSksIC8vIOWkmuetiTAuNeenkuWGjeWIsOS4i+S4gOatpVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKHJlc29sdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvJXlr7zkuIvkuIDnrJTvvIzliqjnlLvmmL7npLrlkITngrnvvIzlubblsIbngavnrq3miJbnlLvnrJTnp7vliLDnrKzkuIDkuKrngrnkuIpcbiAgICAgKi9cbiAgICBwcml2YXRlIGFuaW1OZXh0TGluZSgpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSB0aGlzLmNoYXIuZ2V0TGluZXMoKTtcbiAgICAgICAgY29uc3QgbmV4dExpbmUgPSB0aGlzLmN1cnJlbnRMaW5lICsgMTtcbiAgICAgICAgaWYgKG5leHRMaW5lID49IDAgJiYgbmV4dExpbmUgPCBsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpbmUgPSBuZXh0TGluZTtcbiAgICAgICAgICAgIHRoaXMubmV4dERvdCA9IDA7XG4gICAgICAgICAgICAvLyDku4Xlr7nlvJXlr7zoioLngrnlgZrliqjnlLtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tuZXh0TGluZV07XG5cbiAgICAgICAgICAgIGxpbmUuZm9yRWFjaCgoZG90LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG90LnNob3dHdWlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGxpbmUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g54Gr566t5oiW56yU5ZKM5pyA5ZCO5LiA5Liq54K55ZCM5q2l5Ye65p2lXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBndWlkZU5vZGUgPSB0aGlzLnN0YXRlID09PSBXcml0aW5nU3RhdGUuRHJhZ2FibGUgPyB0aGlzLnJvY2tldCA6IHRoaXMucGVuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVOb2RlLnNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDorqHnrpfliY3kuKTkuKrlvJXlr7zngrnnmoTmlrnlkJFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE5vZGUgPSBsaW5lWzBdLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3ROb2RlUG9zaXRpb24gPSBmaXJzdE5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXIwVG8xID0gY2MudjIobGluZVsxXS5ub2RlLmdldFBvc2l0aW9uKCkuc3ViKGZpcnN0Tm9kZVBvc2l0aW9uKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLkRyYWdhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOayv+edgOWJjeS4pOS4quiKgueCueeahOWPjeWQkeenu+WKqOWNiuS4queBq+eureeahOi3neemu1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUuc2V0UG9zaXRpb24oZ3VpZGVOb2RlLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKGZpcnN0Tm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGZpcnN0Tm9kZVBvc2l0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIoZGlyMFRvMS5tdWwoZ3VpZGVOb2RlLmhlaWdodCAvIDIgLyBkaXIwVG8xLm1hZygpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDngavnrq3nmoTop5LluqbmmK/opoHlj5jnmoRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVOb2RlLmFuZ2xlID0gLXRoaXMudmVjdG9yc1RvRGVncmVzcyhkaXIwVG8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUuc2V0UG9zaXRpb24oZ3VpZGVOb2RlLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKGZpcnN0Tm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGZpcnN0Tm9kZVBvc2l0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIoZGlyMFRvMS5tdWwoMTAgLyBkaXIwVG8xLm1hZygpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oR1VJREVfU0hPV05fRFVSQVRJT04sIDEsIDEpLmVhc2luZyhjYy5lYXNlQmFja091dCgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlvJXlr7zoioLngrnvvIjngavnrq0v56yU77yJ5pi+56S65Ye65p2l5ZCO77yM5YaN6K6+572u6Kem5pG45Zue6LCDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFdyaXRpbmdTdGF0ZS5EcmFnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFJvY2tldExpc3RlbmVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLlBhaW50YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFBlbkxpc3RlbmVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXIuc2hvd0RyYXdQYW5lbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W8leWvvOiKgueCueWKqOeUu+aYvuekuuWujOavleaXtuS4jeaYr+WPr+aTjeS9nOeKtuaAgScsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlj6rmnInkuIDkuKrngrnvvIzpmpDol4/lvJXlr7zlt6Xlhbflm77niYfvvIzmmJ/mmJ/pl6rng4FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnm7TmjqXnp7vliLDlvJXlr7zngrnkuIpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUucG9zaXRpb24gPSBndWlkZU5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Qubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGRvdC5ub2RlLnBvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFdyaXRpbmdTdGF0ZS5EcmFnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDngavnrq3nmoTor53vvIzkuIDkuKrngrnnmoTkuI3mmL7npLpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVOb2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBXcml0aW5nU3RhdGUuRHJhZ2FibGUgfHwgdGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLlBhaW50YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6ZqQ6JeP5byV5a+86IqC54K55Zu+54mH5ZCO77yM5YaN6K6+572u6Kem5pG45Zue6LCDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLkRyYWdhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hSb2NrZXRMaXN0ZW5lcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hQZW5MaXN0ZW5lcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXIuc2hvd0RyYXdQYW5lbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmmJ/mmJ/oioLngrnnvKnmlL5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXAgPSAwLjM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Qubm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKGR1cmF0aW9uIC8gMiwgMS4xKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZHVyYXRpb24gLyAyLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZShnYXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5byV5a+86IqC54K55Yqo55S75pi+56S65a6M5q+V5pe25LiN5piv5Y+v5pON5L2c54q25oCBJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIERPVF9TSE9XTl9HQVAgKiBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W9k+WJjeW3sue7j+aYr+acgOWQjuS4gOadoee6v+S6hu+8jOayoeacieS4i+S4gOadoeWBmuWKqOeUuycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCR6YeP6L2s6KeS5bqm5YC8XG4gICAgICogQHBhcmFtIGRpclZlYyDlvoXorqHnrpflkJHph49cbiAgICAgKi9cbiAgICBwcml2YXRlIHZlY3RvcnNUb0RlZ3Jlc3MoZGlyVmVjOiBjYy5WZWMyKSB7XG4gICAgICAgIGNvbnN0IGNvbVZlYyA9IGNjLnYyKDAsIDEpOyAvLyDmsLTlubPlkJHlj7PnmoTlr7nmr5TlkJHph49cbiAgICAgICAgY29uc3QgcmFkaWFuID0gZGlyVmVjLnNpZ25BbmdsZShjb21WZWMpOyAvLyDmsYLmlrnlkJHlkJHph4/kuI7lr7nmr5TlkJHph4/pl7TnmoTlvKfluqZcbiAgICAgICAgY29uc3QgZGVncmVlID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKHJhZGlhbik7IC8vIOWwhuW8p+W6pui9rOaNouS4uuinkuW6plxuICAgICAgICByZXR1cm4gZGVncmVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIh+aNoueBq+eureaLluaLveaUr+aMgeeKtuaAgVxuICAgICAqL1xuICAgIHByaXZhdGUgc3dpdGNoUm9ja2V0TGlzdGVuZXIoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5yb2NrZXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Sb2NrZXRUb3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucm9ja2V0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Sb2NrZXRUb3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yb2NrZXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uUm9ja2V0VG91Y2hFbmRPckNhbmNlbCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJvY2tldC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Sb2NrZXRUb3VjaEVuZE9yQ2FuY2VsLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9ja2V0Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblJvY2tldFRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yb2NrZXQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Sb2NrZXRUb3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yb2NrZXQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblJvY2tldFRvdWNoRW5kT3JDYW5jZWwsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yb2NrZXQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblJvY2tldFRvdWNoRW5kT3JDYW5jZWwsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5pyA5ZCO5LiA5qyh5pyJ5pWI5ouW5Yqo6Kem5Y+R5L2N572uXG4gICAgcHJpdmF0ZSBsYXN0RHJhZ0F2YWlsYWJsZVBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcblxuICAgIHByaXZhdGUgb25Sb2NrZXRUb3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIC8vIOiusOW9leS4gOW8gOWni+aLluaLveeahOWdkOagh++8jOWQjumdouaJi+eahOenu+WKqO+8jOmDveWSjOWJjeS4gOasoeeahOacieaViOS9jee9ruavlOi+g++8jOayv+edgOi9qOi/ueaWueWQkeeahOaJjeWFgeiuuOWKqFxuICAgICAgICB0aGlzLmxhc3REcmFnQXZhaWxhYmxlUG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLmNoYXIuZ2V0TGluZXMoKVt0aGlzLmN1cnJlbnRMaW5lXTtcbiAgICAgICAgaWYgKGxpbmUgJiYgdGhpcy5uZXh0RG90IDwgbGluZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAvLyDlkK/liqjnp7vliqjliqjnlLtcbiAgICAgICAgICAgICAgICB0aGlzLnJvY2tldC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCdyb2NrZXRfbW92aW5nJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWPquacieS4gOS4queCue+8jOeCueS4iuS6huWwsea/gOa0u1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBsaW5lW3RoaXMubmV4dERvdF07XG4gICAgICAgICAgICAgICAgLy8g5Y+W5raI57yp5pS+5byV5a+8XG4gICAgICAgICAgICAgICAgbmV4dC5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgbmV4dC50dXJuT24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHREb3QrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeBq+eureaLluaLve+8jOWPquacieenu+WKqOaWueWQkeaYr+acneedgOS4i+S4gOS4queCueeahO+8jOaJjeWKqOOAguWmguaenOeisOWIsOS4i+S4gOS4queCue+8jOeCueS6ruOAglxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgb25Sb2NrZXRUb3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFdyaXRpbmdTdGF0ZS5EcmFnYWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign54Gr566t5ouW5ou95Lit54q25oCB5LiN5a+5JywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorqHnrpflvZPliY3np7vliqjot53nprvlnKjlvZPliY3ngrnkuI7kuIvkuIDkuKrngrnkuYvpl7TnmoTmipXlvbHvvIzkvZzkuLrmlrDnmoTngrlcbiAgICAgICAgY29uc3QgbGluZSA9IHRoaXMuY2hhci5nZXRMaW5lcygpW3RoaXMuY3VycmVudExpbmVdO1xuICAgICAgICBpZiAobGluZSAmJiB0aGlzLm5leHREb3QgPCBsaW5lLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8g6Led56a75LiK5LiA5qyh5pyJ5pWI54K555qE5YGP56e76YePXG4gICAgICAgICAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IG5ld0xvY2F0aW9uLnN1Yih0aGlzLmxhc3REcmFnQXZhaWxhYmxlUG9zaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVsdGEubWFnU3FyKCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyDkvY3nva7msqHlj5jvvIzml6DpnIDorqHnrpdcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnJvY2tldDtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBsaW5lW3RoaXMubmV4dERvdF07XG5cbiAgICAgICAgICAgIC8vIOW9k+WJjeeBq+eureS9jee9ruS4juS4i+S4gOS4queCueeahOWQkemHj1xuICAgICAgICAgICAgY29uc3QgZGlyVG9OZXh0ID0gY2MudjIoXG4gICAgICAgICAgICAgICAgbmV4dC5ub2RlLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAuY29udmVydFRvV29ybGRTcGFjZUFSKG5leHQubm9kZS5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgLnN1Yihub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbikpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyDlpoLmnpzlpLnop5LlnKjmraPotJ85MOW6puiMg+WbtOWGhe+8jOivtOaYjuaWsOeahOaWueWQkeS4gOiHtO+8jOWPr+S7peenu+WKqFxuICAgICAgICAgICAgY29uc3QgcmFkaWFuID0gZGlyVG9OZXh0LnNpZ25BbmdsZShkZWx0YSk7XG4gICAgICAgICAgICBpZiAocmFkaWFuID4gLU1hdGguUEkgLyAyICYmIHJhZGlhbiA8IE1hdGguUEkgLyAyKSB7XG4gICAgICAgICAgICAgICAgLy8g5oyJ5oqV5b2x5pa55ZCR56e75Yqo5oyH5a6a6Led56a7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IGRlbHRhLnByb2plY3QoZGlyVG9OZXh0KTtcblxuICAgICAgICAgICAgICAgIGxldCBuZXdQb3MgPSBub2RlLmdldFBvc2l0aW9uKCkuYWRkKHByb2plY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0aW9uLm1hZ1NxcigpID49IGRpclRvTmV4dC5tYWdTcXIoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDpmLLmraLotoXlh7rkuIvkuIDkuKrngrlcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Lm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihuZXh0Lm5vZGUuZ2V0UG9zaXRpb24oKSlcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDlt7Lnu4/liLDkuobkuIvkuIDkuKrngrnvvIzmv4DmtLtcbiAgICAgICAgICAgICAgICAgICAgbmV4dC50dXJuT24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0RG90Kys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZKI5a+557uR5a6a5Zyo5LiL5LiA5Liq54K555qE5pyq54K55Lqu55qE5pif5pif5oiW5bCP54K577yM6Iul5bey57uP6L+H77yM5YiZ54K55Lqu5LmLXG4gICAgICAgICAgICAgICAgICAgIG5leHQuZ2V0UmVsYXRpdmVEb3RzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRvdCkgPT4gIWRvdC5pc1RyaWdnZXJlZCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGRvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaWsOS9jee9ruaMh+WQkeaYn+aYn+aIluWwj+eCueeahOWQkemHj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpclRvRG90ID0gY2MudjIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdC5ub2RlLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihkb3Qubm9kZS5nZXRQb3NpdGlvbigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yihub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobmV3UG9zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR1cm5PbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJUb0RvdC5tYWdTcXIoKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlsLHlnKjmmJ/mmJ/miJblsI/ngrnkuIrpnaLvvIzngrnkuq5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVybk9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnnIvmlrDkvY3nva7kuI7kuIvkuIDkuKrngrnlj4rmmJ/mmJ/miJblsI/ngrnnmoTkuKTkuKrlkJHph4/lpLnop5LvvIzoi6XmmK/nm7Top5LmiJbpkp3op5LvvIzor7TmmI7lt7Lnu4/nu4/ov4fkuobvvIzlj6/ku6Xngrnkuq5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Zug5Li654Gr566t5piv5rK/552A5Lik5Liq5byV5a+854K55LmL6Ze055qE57q/5q6156e75Yqo55qE77yM5Y+v5Lul55u05o6l55So5LmL5YmN5L2N572u5LiO5LiL5LiA5Liq54K555qE5ZCR6YeP5Luj5pu/5pyA5paw54K55LiO5LiL5LiA5Liq54K555qE5ZCR6YeP5p2l6K6h566X5aS56KeSXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlhbk9mRG90QW5kTmV4dCA9IGRpclRvTmV4dC5zaWduQW5nbGUoZGlyVG9Eb3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJuT24gPSByYWRpYW5PZkRvdEFuZE5leHQgPD0gLU1hdGguUEkgLyAyIHx8IHJhZGlhbk9mRG90QW5kTmV4dCA+PSBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHVybk9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdC50dXJuT24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS54ID0gbmV3UG9zLng7XG4gICAgICAgICAgICAgICAgbm9kZS55ID0gbmV3UG9zLnk7XG5cbiAgICAgICAgICAgICAgICAvLyDngavnrq3nmoTop5LluqbnlLHliY3kuIDkuKrngrnmjIflkJHlvZPliY3nm67moIfngrlcbiAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gLXRoaXMudmVjdG9yc1RvRGVncmVzcyhkaXJUb05leHQpO1xuXG4gICAgICAgICAgICAgICAgLy8g5pu05paw5ouW5ou95L2N572uXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RHJhZ0F2YWlsYWJsZVBvc2l0aW9uID0gbmV3TG9jYXRpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ+WPjeWQkeS4jeWPmOWMlicsIHJhZGlhbiwgZGlyVG9OZXh0Lm1hZ1NxcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign5b2T5YmN56yU55S75bey57uP5ouW5a6M5LqGJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDngavnrq3mi5bmi73lrozmr5XvvIzlpoLmnpzmnIDlkI7kuIDngrnlt7Lnu4/op6blj5HvvIzovazkuIvkuIDmnaHnur9cbiAgICAgKi9cbiAgICBwcml2YXRlIG9uUm9ja2V0VG91Y2hFbmRPckNhbmNlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFdyaXRpbmdTdGF0ZS5EcmFnYWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign54Gr566t5ouW5ou95a6M5q+V54q25oCB5LiN5a+5JywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliIfmjaLliLDnqbrpl7LnirbmgIHliqjnlLtcbiAgICAgICAgdGhpcy5yb2NrZXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgncm9ja2V0X2lkZWwnKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IHRoaXMuY2hhci5nZXRMaW5lcygpO1xuICAgICAgICBpZiAodGhpcy5uZXh0RG90ID09PSBsaW5lc1t0aGlzLmN1cnJlbnRMaW5lXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIOaKrOaJi+aXtuW9k+WJjeeslOeUu+eahOacgOWQjuS4gOeslOW3sua/gOa0u++8jOinpuWPkeS4i+S4gOeslOWKqOeUu1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hSb2NrZXRMaXN0ZW5lcihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnJvY2tldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMaW5lIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIC8vIOi/mOayoeWIsOacgOWQjuS4gOadoee6v1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbU5leHRMaW5lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBXcml0aW5nU3RhdGUuRHJhZ0NvbXBsZXRlQW5pbWF0aW5nO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUNoYXJBbmltYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAvLyDmkq3lrozliqjnlLvlkI7mkq3kuIvpn7PpopFcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odGhpcy5wbGF5Q2hhckF1ZGlvLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBXcml0aW5nU3RhdGUuRHJhZ0NvbXBsZXRlQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YeN572u5omA5pyJ54K5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGluZSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dERvdCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW8leWvvOeUu+e6v1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBXcml0aW5nU3RhdGUuUGFpbnRhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbU5leHRMaW5lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aLluaLveWKqOeUu+aYvuekuuWujOavleaXtueKtuaAgeS4jeWvuScsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIh+aNoueUu+eslOaLluaLveaUr+aMgeeKtuaAgVxuICAgICAqL1xuICAgIHByaXZhdGUgc3dpdGNoUGVuTGlzdGVuZXIoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5wZW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25QZW5Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGVuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25QZW5Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wZW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uUGVuVG91Y2hFbmRPckNhbmNlbCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBlbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25QZW5Ub3VjaEVuZE9yQ2FuY2VsLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGVuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblBlblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wZW4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25QZW5Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wZW4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblBlblRvdWNoRW5kT3JDYW5jZWwsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wZW4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblBlblRvdWNoRW5kT3JDYW5jZWwsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3UGF0aDogY2MuVmVjMltdW10gPSBbXTtcbiAgICBwcml2YXRlIGlzRHJhd2luZ1Jlc2V0ID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIG9uUGVuVG91Y2hTdGFydCgpIHtcbiAgICAgICAgLy8g5paw55qE5oyJ5LiL5pe277yM6YeN572u5qCH6K6wXG4gICAgICAgIHRoaXMuaXNEcmF3aW5nUmVzZXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5kcmF3UGF0aFt0aGlzLmN1cnJlbnRMaW5lXSkpIHtcbiAgICAgICAgICAgIC8vIOi1t+Wni+eCueaYr+eUu+eslOaJgOWcqFxuICAgICAgICAgICAgLy8gVE9ETyDpnZ4yLjEuMueJiOacrO+8jOimgeWIh+aNouWIsOiKgueCueWdkOagh+ezu++8jDIuMS4y5pyJYnVnXG4gICAgICAgICAgICAvLyBodHRwczovL2ZvcnVtLmNvY29zLmNvbS90L2NvY29zLWNyZWF0b3ItMi0xLTItZ3JhcGhpY3MvODA5MDQvOFxuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aFt0aGlzLmN1cnJlbnRMaW5lXSA9IFtcbiAgICAgICAgICAgICAgICAvLyDlsIbnlLvnrJTmiYDlnKjngrnkvZzkuLrnrKzkuIDkuKrop6bmkbjngrlcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNoYXIuZHJhd1BhbmVsLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5wZW4ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBlbi5wb3NpdGlvbikpLFxuICAgICAgICAgICAgICAgIHRoaXMucGVuLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wZW4uZ2V0UG9zaXRpb24oKSksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluZSA9IHRoaXMuY2hhci5nZXRMaW5lcygpW3RoaXMuY3VycmVudExpbmVdO1xuICAgICAgICBpZiAobGluZSAmJiBsaW5lLmxlbmd0aCA9PT0gMSAmJiB0aGlzLm5leHREb3QgPCBsaW5lLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8g5Y+W5raI57yp5pS+5Yqo5pWIXG4gICAgICAgICAgICBsaW5lWzBdLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIC8vIOWPquacieS4gOS4queCue+8jOeCueS4iuS6huWwsea/gOa0u1xuICAgICAgICAgICAgdGhpcy5vblBlblRvdWNoTW92ZSh7IGdldERlbHRhOiAoKSA9PiBjYy52MigxLCAxKSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25QZW5Ub3VjaE1vdmUoZXZlbnQ6IHsgZ2V0RGVsdGE6ICgpID0+IGNjLlZlYzIgfSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gV3JpdGluZ1N0YXRlLlBhaW50YWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign55S756yU57uY5Yi25Lit54q25oCB5LiN5a+5JywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0RyYXdpbmdSZXNldCkge1xuICAgICAgICAgICAgLy8g5bey6YeN572u77yM5LiN5aSE55CGXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuZ2V0RGVsdGEoKS5tYWdTcXIoKSA9PT0gMCkge1xuICAgICAgICAgICAgLy8g5L2N572u5rKh5Y+Y5YyW77yM5LiN55S7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5lcyA9IHRoaXMuY2hhci5nZXRMaW5lcygpO1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbdGhpcy5jdXJyZW50TGluZV07XG4gICAgICAgIGlmIChsaW5lICYmIHRoaXMubmV4dERvdCA8IGxpbmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gbGluZVt0aGlzLm5leHREb3RdO1xuICAgICAgICAgICAgLy8gVE9ETyDpnZ4yLjEuMueJiOacrO+8jOimgeWIh+aNouWIsOS4lueVjOWdkOagh+ezu++8jDIuMS4y5pyJYnVnXG4gICAgICAgICAgICAvLyBjb25zdCBuZXh0UG9zRCA9IHRoaXMuZHJhd1BhbmVsLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobmV4dC5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobmV4dC5ub2RlLnBvc2l0aW9uKSk7XG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zVyA9IG5leHQubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5leHQubm9kZS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIC8vIOiuoeeul+aWsOeCueeahOS9jee9rlxuICAgICAgICAgICAgY29uc3QgbGluZVBhdGggPSB0aGlzLmRyYXdQYXRoW3RoaXMuY3VycmVudExpbmVdO1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBldmVudC5nZXREZWx0YSgpO1xuXG4gICAgICAgICAgICAvLyDovazmjaLmiJDmipXlvbHot6/nur/kuIrnmoTngrlcbiAgICAgICAgICAgIGNvbnN0IHByZXZQb3NEID0gbGluZVBhdGhbbGluZVBhdGgubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCBkaXJUb05leHQgPSBjYy52MihuZXh0UG9zVy5zdWIocHJldlBvc0QpKTtcbiAgICAgICAgICAgIGNvbnN0IGRpclRvTmV4dExlbmd0aCA9IGRpclRvTmV4dC5tYWcoKTtcblxuICAgICAgICAgICAgbGV0IHByb2plY3Rpb25MZW5ndGggPSAwO1xuICAgICAgICAgICAgbGV0IHByb2plY3Rpb246IGNjLlZlYzI7XG4gICAgICAgICAgICBpZiAoZGlyVG9OZXh0TGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uID0gZGVsdGEucHJvamVjdChkaXJUb05leHQpO1xuICAgICAgICAgICAgICAgIHByb2plY3Rpb25MZW5ndGggPSBwcm9qZWN0aW9uLm1hZygpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0aW9uTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWcqOaKleW9seaWueWQkeS4iuayoeacieenu+WKqO+8jOS4jeWkhOeQhlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlr7nkuo7kuIDkuKrngrnnmoTmg4XlhrXvvIznlLHkuo7otbflp4vngrnlsLHlnKjkuIvkuIDkuKrngrnkuIrvvIxkaXJUb05leHRMZW5ndGjkuLowXG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbiA9IGNjLnYyKDAsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbmV3UG9zRCA9IHByZXZQb3NELmFkZChwcm9qZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlVG9OZXh0ID0gbmV4dFBvc1cuc3ViKG5ld1Bvc0QpLm1hZygpO1xuICAgICAgICAgICAgY29uc3QgcmFkaWFuID0gZGlyVG9OZXh0TGVuZ3RoICE9IDAgPyBkaXJUb05leHQuc2lnbkFuZ2xlKHByb2plY3Rpb24pIDogMDtcbiAgICAgICAgICAgIGlmIChyYWRpYW4gPiAtTWF0aC5QSSAvIDIgJiYgcmFkaWFuIDwgTWF0aC5QSSAvIDIpIHtcbiAgICAgICAgICAgICAgICAvLyDmlrnlkJHnm7jlkIxcbiAgICAgICAgICAgICAgICBpZiAoZGlyVG9OZXh0TGVuZ3RoIDw9IHByb2plY3Rpb25MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6LaF5Ye65LqG77yM5YiH5LiL5LiA5Liq54K5XG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc0QgPSBuZXh0UG9zVztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0RG90Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g6Ziy5q2i5LiA56yU55S75aSq6L+c77yM5LmL5YmN5rKh6KKr5pOm5o6JXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dC5pc1RyaWdnZXJlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmVyYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFuZXh0LmlzVHJpZ2dlcmVkKCkgJiYgZGlzdGFuY2VUb05leHQgPCB0aGlzLmRyYXdQYW5lbC5saW5lV2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOeUu+WIsOS6hu+8jOaPkOWJjeaTpumZpO+8jOW5tumYsuatoumHjeWkjeaTplxuICAgICAgICAgICAgICAgICAgICBuZXh0LmVyYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDmlrnlkJHnm7jlj43vvIznnIvkuIvot53nprvmnInmsqHmnInotoXov4fliY3lkI7kuKTkuKrngrnot53nprvvvIjlpoLmnpzkuIDkuKrngrnov5jmsqHmv4DmtLvvvIzlsLHnnIvmnInmsqHmnInotoXov4fnlLvnrJTotbflp4vngrnlkoznrKzkuIDkuKrngrnnmoTot53nprvvvIlcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBkaXN0YW5jZU9mUHJldkFuZE5leHQgPVxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5leHREb3QgPiAwXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA/IG5leHQubm9kZS5wb3NpdGlvbi5zdWIobGluZVt0aGlzLm5leHREb3QgLSAxXS5ub2RlLnBvc2l0aW9uKS5tYWcoKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gOiBsaW5lUGF0aFswXS5zdWIobmV3UG9zRCkubWFnKCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgKGRpc3RhbmNlVG9OZXh0ID4gZGlzdGFuY2VPZlByZXZBbmROZXh0ICsgdGhpcy5kcmF3UGFuZWwubGluZVdpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAn6LaF6L+H5LqG77yM6YeN572u5b2T5YmN57q/5q61JyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGDot53nprvkuIvkuIDkuKogJHtkaXN0YW5jZVRvTmV4dH1gLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYOS4iuS4gOS4queCueaYryAke3RoaXMubmV4dERvdCA+IDAgPyAn5a6e6ZmF54K5JyA6ICfliJ3lp4vngrknfWAsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBkaXN0YW5jZU9mUHJldkFuZE5leHRcbiAgICAgICAgICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5pc0RyYXdpbmdSZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc3dpdGNoUGVuTGlzdGVuZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnBlbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5uZXh0RG90ID0gLTE7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudExpbmUgLT0gMTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5kcmF3UGF0aC5wb3AoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5kcmF3KHRoaXMuZHJhd1BhdGgpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1OZXh0TGluZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAvL+WPjeWQke+8jOaUueS4uuebtOaOpei/lOWbnlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5qC55o2u5b2T5YmN5YGP56e777yM5ZyoZ3JhcGhpY+S4iuWvueW6lOS9jee9rueUu++8jOW5tuenu+WKqOeUu+eslFxuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aFt0aGlzLmN1cnJlbnRMaW5lXS5wdXNoKG5ld1Bvc0QpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KHRoaXMuZHJhd1BhdGgpO1xuICAgICAgICAgICAgLy8gVE9ETyDpnZ4yLjEuMueJiOacrO+8jOimgeWIh+aNouWIsOS4lueVjOWdkOagh+ezu++8jDIuMS4y5pyJYnVnXG4gICAgICAgICAgICAvLyBjb25zdCBwZW5Qb3MgPSB0aGlzLnBlbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5kcmF3UGFuZWwubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobmV3UG9zRCkpO1xuICAgICAgICAgICAgY29uc3QgcGVuUG9zID0gdGhpcy5wZW4ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG5ld1Bvc0QpO1xuICAgICAgICAgICAgdGhpcy5wZW4ueCA9IHBlblBvcy54O1xuICAgICAgICAgICAgdGhpcy5wZW4ueSA9IHBlblBvcy55O1xuXG4gICAgICAgICAgICAvLyDlpoLmnpzmv4DmtLvkuobmnIDlkI7kuIDkuKrngrnvvIzopoHovazkuIvkuIDnrJTkuoZcbiAgICAgICAgICAgIGlmICh0aGlzLm5leHREb3QgPT09IGxpbmVzW3RoaXMuY3VycmVudExpbmVdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIOWFiOiuvue9rumHjee9ruagh+iusO+8jOS4jeWkhOeQhuWQjue7reeahOS6i+S7tlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblRvTmV4dERyYXcobGluZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCflvZPliY3nrJTnlLvlt7Lnu4/pg73nlLvliLDkuoYnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi9rOWQkeS4i+S4gOeslOeahOe7mOWItuaIluebtOaOpeWujOaIkFxuICAgICAqIEBwYXJhbSBsaW5lcyDmiYDmnInnrJTnlLtcbiAgICAgKi9cbiAgICBwcml2YXRlIHR1cm5Ub05leHREcmF3KGxpbmVzOiBXcml0aW5nRG90W11bXSkge1xuICAgICAgICB0aGlzLmlzRHJhd2luZ1Jlc2V0ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnN3aXRjaFBlbkxpc3RlbmVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5wZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMaW5lIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgLy8g6L+Y5rKh5Yiw5pyA5ZCO5LiA5p2h57q/77yM5Yqo55S75byV5a+8XG4gICAgICAgICAgICB0aGlzLmFuaW1OZXh0TGluZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcmFtZXdvcmsgJiYgdGhpcy5mcmFtZXdvcmsubG9ja1N3aXRjaCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFdyaXRpbmdTdGF0ZS5QYWludENvbXBsZXRlQW5pbWF0aW5nO1xuXG4gICAgICAgICAgICAvLyDloavlhYXnlLvluINcbiAgICAgICAgICAgIHRoaXMuY2hhclxuICAgICAgICAgICAgICAgIC5maWxsKClcbiAgICAgICAgICAgICAgICAudGhlbih0aGlzLnBsYXlDaGFyQW5pbWF0aW9uLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgLy8g5Yqo55S75a6M5pKt5LiL6Z+z6aKR5YaN6YCa5YWzXG4gICAgICAgICAgICAgICAgLnRoZW4odGhpcy5wbGF5Q2hhckF1ZGlvLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLlBhaW50Q29tcGxldGVBbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBXcml0aW5nU3RhdGUuRmluaXNoZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCfmj4/nuqLlrozmiJAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWV3b3JrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXdvcmsub25TdGFyR290KDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWV3b3JrLm9uUHJhY3RpY2VGaW5pc2hlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign57uY5Yi25Yqo55S75pi+56S65a6M5q+V5pe254q25oCB5LiN5a+5JywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25QZW5Ub3VjaEVuZE9yQ2FuY2VsKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gV3JpdGluZ1N0YXRlLlBhaW50YWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign55S756yU57uY5Yi25a6M5q+V54q25oCB5LiN5a+5JywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0RyYXdpbmdSZXNldCkge1xuICAgICAgICAgICAgLy8g5bey6YeN572u77yM5LiN5aSE55CGXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5lcyA9IHRoaXMuY2hhci5nZXRMaW5lcygpO1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbdGhpcy5jdXJyZW50TGluZV07XG4gICAgICAgIGlmIChsaW5lICYmIHRoaXMubmV4dERvdCA8IGxpbmUubGVuZ3RoICYmIHRoaXMubmV4dERvdCA9PT0gbGluZXNbdGhpcy5jdXJyZW50TGluZV0ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGxpbmVbdGhpcy5uZXh0RG90XTtcbiAgICAgICAgICAgIGlmIChuZXh0LmlzVHJpZ2dlcmVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyDmiqznrJTml7bvvIzmnIDlkI7kuIDkuKrngrnlt7Lmk6bpmaTkuobvvIzlj6rmmK/msqHnlLvliLDvvIzoh6rliqjliIdcbiAgICAgICAgICAgICAgICB0aGlzLm5leHREb3QrKztcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5Ub05leHREcmF3KGxpbmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe7mOWItui3r+W+hO+8jOavj+asoemDveaYr+a4hemZpOeUu+W4g+WQjumHjeaWsOe7mOWItuWujOaVtOi3r+W+hO+8jOi/meagt3N0cm9rZeWHoOasoe+8jGRyYXdjYWxs5omN5Lya5aKe5Yqg5aSa5bCRXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKi9cbiAgICBwcml2YXRlIGRyYXcocGF0aDogY2MuVmVjMltdW10pIHtcbiAgICAgICAgdGhpcy5kcmF3UGFuZWwuY2xlYXIoKTtcbiAgICAgICAgcGF0aC5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPT09IDIgJiYgbGluZVswXS5lcXVhbHMobGluZVsxXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYW5lbC5hcmMobGluZVswXS54LCBsaW5lWzBdLnksIDEwLCAwLCAzNjApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJldlZhbGlkRG90OiBjYy5WZWMyID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsaW5lLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYW5lbC5tb3ZlVG8oZG90LngsIGRvdC55KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGxpbmUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/h+a7pOi3neemu+Wkqui/keeahOiLpeW5suS4queCuVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb3Quc3ViKHByZXZWYWxpZERvdCkubWFnKCkgPCBEUkFXX0RPVF9ESVNUQU5DRV9NSU4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kZWJ1Zygnc2tpcCcsIGRvdC54LCBkb3QueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYW5lbC5saW5lVG8oZG90LngsIGRvdC55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcmV2VmFsaWREb3QgPSBkb3Q7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYXdQYW5lbC5zdHJva2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19