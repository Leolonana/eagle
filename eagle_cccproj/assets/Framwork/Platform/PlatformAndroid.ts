import { IPlatform } from "./IPlatform";

const TAG = "PlatformAndroid";  //日志标识

/**
 * 安卓平台
 * @author guob
 * @date 2020/06/08
 */
export class PlatformAndroid implements IPlatform {

    private readonly _platform = "android";

    private static _instance: PlatformAndroid = null;
    public static get instance(): PlatformAndroid {
        if (!this._instance)
            this._instance = new PlatformAndroid();
        return this._instance;
    }

    constructor() { }

    public static support(): boolean {
        return cc.sys.platform === cc.sys.ANDROID;
    }

    /** 获取当前平台标识 */
    platform(): string {
        return this._platform;
    }

    private callNativeSync(params: {

    }) {

    }

    /** 加载场景 */
    loadScene(params: string): void {
        console.log(`[${TAG}], loadScene params ${params}`);
        console.log(typeof (params));
        //延时模拟
        setTimeout(() => {
            cc.director.loadScene("Main", () => {
                console.log("Main is loaded!");
            });
        }, 2);
    }

    /** 加载场景成功回调 */
    onSceneLoaded() {
        // CallNative.instance.callStaticFunc
    }

    /** 退出场景 */
    exitScene(): void {

    }

    /** 退出场景成功回调 */
    onSceneExit(): void {

    }

}