import WritingSmallDot from './WritingSmallDot';

const { ccclass, property } = cc._decorator;

const DOT_SHOWN_DURATION = [0.2, 0.4];
const STAR_SHOWN_DURATION = DOT_SHOWN_DURATION[0] + DOT_SHOWN_DURATION[1];
const DOT_SHOWN_SCALE = [1.5, 1];
const STAR_ROTATION = 360 * 2;
const TURN_ON_DELAY = 0.1;

/**
 * 显示的星星
 */
@ccclass
export default class WritingRightStar extends WritingSmallDot {
    rightStarShown: cc.AudioClip = null;

    /**
     * 设置显示音频
     * @param rightStarShown 
     */
    public setAudio(rightStarShown: cc.AudioClip) {
        this.rightStarShown = rightStarShown;
    }

    /**
     * 获取星星展示动画
     */
    public static getStarShownAction() {
        return cc.spawn(
            cc.sequence(
                cc.scaleTo(DOT_SHOWN_DURATION[0], DOT_SHOWN_SCALE[0], DOT_SHOWN_SCALE[0]),
                cc.scaleTo(DOT_SHOWN_DURATION[1], DOT_SHOWN_SCALE[1], DOT_SHOWN_SCALE[1])
            ),
            // 随机多旋转0-90度
            cc.rotateTo(STAR_SHOWN_DURATION, STAR_ROTATION + 90 * Math.random())
        );
    }

    private _isTriggered = false;

    public isTriggered() {
        return this._isTriggered;
    }

    /**
     * 重置
     */
    public reset() {
        this._isTriggered = false;

        this.node.active = false;
    }

    /**
     * 点亮该星星，旋转出来，周边小点也同时渐显出来
     */
    public turnOn() {
        this.node.scale = 0;
        this.node.active = true;
        this.node.runAction(cc.sequence(cc.delayTime(TURN_ON_DELAY), WritingRightStar.getStarShownAction()));
        cc.audioEngine.play(this.rightStarShown, false, 1);

        this._isTriggered = true;
    }
}
