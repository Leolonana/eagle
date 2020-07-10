import WritingRightStar from './WritingRightStar';
import WritingSmallDot from './WritingSmallDot';

const { ccclass, property } = cc._decorator;

const MAIN_DOT_SHOWN_DURATION = 0.2;
const DOT_SHOWN_DURATION = [0.2, 0.4];

/**
 * 笔画节点，管理每个引导点、画到后显示的星星及其周边点缀的小点的显示隐藏
 */
@ccclass
export default class WritingDot extends cc.Component {
    public static LAST_DOT_SHOWN_DURATION = DOT_SHOWN_DURATION[0] + DOT_SHOWN_DURATION[1];

    @property(cc.Node)
    mainDot: cc.Node = null;

    @property(cc.Node)
    starFinished: cc.Node = null;

    mainDotShown: cc.AudioClip = null;

    mainDotErased: cc.AudioClip = null;

    starFinishedShown: cc.AudioClip = null;

    /**
     * 设置音效
     * @param mainDotShown 黄色点出现音效
     * @param mainDotErased 黄色点擦除音效
     * @param starFinishedShown 彩色星星出现音效
     * @param rightStarShown 白色星星出现音效
     */
    public setAudios(
        mainDotShown: cc.AudioClip,
        mainDotErased: cc.AudioClip,
        starFinishedShown: cc.AudioClip,
        rightStarShown: cc.AudioClip
    ) {
        this.mainDotShown = mainDotShown;
        this.mainDotErased = mainDotErased;
        this.starFinishedShown = starFinishedShown;
        this.getRelativeDots().forEach((smallDot) => {
            if (smallDot instanceof WritingRightStar) {
                smallDot.setAudio(rightStarShown);
            }
        });
    }

    private _isTriggered = false;

    public isTriggered() {
        return this._isTriggered;
    }

    private relativeDots: WritingSmallDot[] = null;

    /**
     * 获取子节点中的正确星星与小点组件列表
     */
    public getRelativeDots() {
        if (this.relativeDots === null) {
            if (this.node.childrenCount > 0) {
                this.relativeDots = this.node.children.map((dot) => {
                    return dot.getComponent(WritingSmallDot);
                });
            } else {
                this.relativeDots = [];
            }
        }

        return this.relativeDots;
    }

    /**
     * 擦除（画笔画到的时候调用）
     */
    public erase() {
        if (this.mainDot) {
            cc.audioEngine.play(this.mainDotErased, false, 1);
        }

        this._isTriggered = true;
        this.hideAll();
    }

    /**
     * 重置
     */
    public reset() {
        this._isTriggered = false;
        // 一开始先隐藏，等动画触发显示
        this.hideAll();
    }

    /**
     * 隐藏所有点
     */
    private hideAll() {
        if (this.mainDot) {
            this.mainDot.active = false;
            this.mainDot.getComponent(cc.Sprite).enabled = true;
        }

        if (this.starFinished) {
            this.starFinished.active = false;
            this.starFinished.getComponent(cc.Sprite).enabled = true;
        }

        this.getRelativeDots().forEach((dot) => {
            dot.reset();
        });
    }

    /**
     * 动画显示引导节点
     */
    public showGuide() {
        this._isTriggered = false;
        if (this.starFinished) {
            this.starFinished.scale = 0;
            this.starFinished.active = true;
            this.starFinished.runAction(WritingRightStar.getStarShownAction());
            cc.audioEngine.play(this.starFinishedShown, false, 1);
        } else if (this.mainDot) {
            this.mainDot.scale = 0;
            this.mainDot.active = true;
            this.mainDot.runAction(cc.scaleTo(MAIN_DOT_SHOWN_DURATION, 1, 1).easing(cc.easeBackOut()));
            cc.audioEngine.play(this.mainDotShown, false, 1);
        }
    }

    /**
     * 点亮该节点，引导点隐藏，星星旋转出来，周边小点也同时渐显出来
     */
    public turnOn() {
        // 引导点和结束点只能隐藏其图片，因为还有子节点星星要显示
        if (this.mainDot) {
            this.mainDot.getComponent(cc.Sprite).enabled = false;
        } else if (this.starFinished) {
            this.starFinished.getComponent(cc.Sprite).enabled = false;
        }

        // 剩余没点亮的星星也点亮
        this.getRelativeDots()
            .filter((dot) => !dot.isTriggered())
            .forEach((dot) => {
                dot.turnOn();
            });

        this._isTriggered = true;
    }
}
