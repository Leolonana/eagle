import { Native } from "./Base/Native";

export class Framwork {


    constructor() {

    }

    private _hasInit: boolean = false;


    public init() {
        if (cc.sys.platform === cc.sys.ANDROID
            || cc.sys.platform === cc.sys.IPHONE
            || cc.sys.platform === cc.sys.IPAD) {
            //初始化原生接口
            Native.instance;
        }
        else if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            
        }
    }

}