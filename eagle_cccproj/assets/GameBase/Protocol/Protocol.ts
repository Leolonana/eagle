import { BaseProtocol } from "../../Framwork/Base/BaseProtocol";
import AppConfig from "../Configs/AppConfig";
import MainScene from "../../Main/Scripts/MainScene";
import MainScene2 from "../../Main2/Scripts/MainScene2";

//场景对应值
export const
    Loading = 9999,
    SceneMain = 10000,
    SceneMain2 = 10001;

export class Protocol extends BaseProtocol {

    constructor() {
        super();
    }

    private static _instance: Protocol;
    public static get instance(): Protocol {
        if (!this._instance)
            this._instance = new Protocol();
        return this._instance;
    }

    /** 读取场景初始化配置 */
    public readConf(): {
        scene: string,
        data: any
    } {
        let conf = this.openProtocol(`eagle://callForInitialization?version=${AppConfig.versionCode}`)
        return {
            scene: this.mappingSceneId(conf.sceneId),
            data: conf.data
        }
    }

    /** 通知游戏加载成功 */
    public onLoaded() {
        this.openProtocol("eagle://gameLoaded")
    }

    /** 通知游戏退出 */
    public onExit() {
        this.openProtocol("eagle://gameExit")
    }

    /** 获取场景id名称映射 */
    private mappingSceneId(id: number) {
        switch (id) {
            case Loading:
                return "Loading";
                break;
            case SceneMain:
                return "Main";
                break;
            case SceneMain2:
                return "Main2";
                break;
            default:
                console.error(`[Protocol] readConf canot find sceneId ${id}`);
                break;
        }
    }

    /** 返回url */
    private encodeUrl(method: string, params: Array<any>) {
        return `eagle://${method}?`
    }

}