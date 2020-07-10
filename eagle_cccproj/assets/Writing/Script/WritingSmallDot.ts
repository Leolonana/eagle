const { ccclass, property } = cc._decorator;

const OTHER_DOTS_SHOWN_DURATION = 0.2;

@ccclass
export default class WritingSmallDot extends cc.Component {
    public isTriggered() {
        return this.node.active;
    }

    /**
     * 重置
     */
    public reset() {
        this.node.active = false;
    }

    /**
     * 渐显出来
     */
    public turnOn() {
        const dot = this.node;
        dot.opacity = 0;
        dot.active = true;
        dot.runAction(cc.fadeTo(OTHER_DOTS_SHOWN_DURATION, 255));
    }
}
