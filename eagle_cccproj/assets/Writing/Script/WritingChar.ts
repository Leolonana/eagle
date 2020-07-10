import WritingDot from './WritingDot';

const { ccclass, property } = cc._decorator;

const FILL_DURATION = 0.5;

/**
 * 书写字符
 * 
 * 注：配置字符时，每个线条的最后一点，必须是引导节点
 */
@ccclass
export default class WritingChar extends cc.Component {
    @property(cc.Sprite)
    image: cc.Sprite = null;

    @property(cc.Mask)
    mask: cc.Mask = null;

    @property(cc.Graphics)
    drawPanel: cc.Graphics = null;

    @property(cc.Node)
    filledChar: cc.Node = null;

    @property(cc.Node)
    linesNode: cc.Node = null;

    lines: WritingDot[][] = null;

    onLoad() {
        this.mask.spriteFrame = this.image.spriteFrame;
    }

    /**
     * 获取该字符所有笔画
     */
    public getLines() {
        if (this.lines === null) {
            this.lines = this.linesNode.children.map((line) => {
                return line.children.map((dotNode) => {
                    const dot = dotNode.getComponent(WritingDot);
                    dot.reset();
                    return dot;
                });
            });
        }

        return this.lines;
    }

    /**
     * 重置所有点状态
     */
    public reset() {
        this.lines.forEach((line) => {
            line.forEach((dot) => {
                dot.reset();
            });
        });
    }

    /**
     * 填充，渐显下面的图层，渐隐上面的画布
     */
    public fill() {
        return new Promise((resolve) => {
            this.drawPanel.node.runAction(cc.fadeTo(FILL_DURATION, 0));
            this.filledChar.opacity = 0;
            this.filledChar.active = true;
            this.filledChar.runAction(cc.sequence(cc.fadeTo(FILL_DURATION, 255), cc.callFunc(resolve)));
        });
    }

    /**
     * 显示画板
     */
    public showDrawPanel() {
        this.mask.node.active = true;
    }
}
