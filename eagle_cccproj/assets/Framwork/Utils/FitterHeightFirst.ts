const { ccclass } = cc._decorator;

/**
 * 优先高度适配组件，当屏幕比设计分辨率更高时，适配宽，否则适配高。
 * 注意：如果有需要在代码中获取组件的位置的操作，不要在onLoad里去做，因为修改了适配方式后会重新布局，onLoad里取到的会是旧的。
 */
@ccclass
export default class FitterHeightFirst extends cc.Component {
    private canvas: cc.Canvas = null;

    private sceneName: string = null;

    // 是否按高适配，防止设置后导致canvas尺寸改变而重复设置
    private isHeightFirst: boolean = null;

    onLoad() {
        this.sceneName = cc.director.getScene().name;
        console.debug(`场景 ${this.sceneName} FitterHeightFirst组件加载`);

        const canvasNode = cc.find('Canvas');
        this.canvas = canvasNode.getComponent(cc.Canvas);

        // 更新配置
        this.updateFit();
        // 监听窗口改变，重置
        canvasNode.on(cc.Node.EventType.SIZE_CHANGED, this.resetFit, this);
    }

    /**
     * 更新fit配置
     */
    private updateFit() {
        const canvas = this.canvas;
        const design = canvas.designResolution;
        const device = cc.view.getFrameSize();
        // 当相差超过0.01时，才算更高，这样差别不是很大的屏幕，仍可以按高走
        if (device.height / device.width - design.height / design.width > 0.01) {
            const needToSet = this.isHeightFirst === null || this.isHeightFirst;
            this.isHeightFirst = false;

            // 针对首次设置，若默认配置一样，也不用更新
            if (needToSet && (canvas.fitWidth !== true || canvas.fitHeight !== false)) {
                canvas.fitWidth = true;
                canvas.fitHeight = false;
                console.debug(`场景 ${this.sceneName} 比设计更高，按宽适配`);
            }
        } else {
            const needToSet = this.isHeightFirst === null || !this.isHeightFirst;
            this.isHeightFirst = true;

            // 针对首次设置，若默认配置一样，也不用更新
            if (needToSet && (canvas.fitWidth !== false || canvas.fitHeight !== true)) {
                canvas.fitWidth = false;
                canvas.fitHeight = true;
                console.debug(`场景 ${this.sceneName} 按高适配`);
            }
        }
    }

    private resetFit() {
        console.debug(`场景 ${this.sceneName} 重新计算fit`);
        this.updateFit();
    }
}
