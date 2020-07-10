
export class PlatformUtil {

    public static isAndroid(): boolean {
        return cc.sys.platform === cc.sys.ANDROID;
    }

    public static isIOS(): boolean {
        return cc.sys.platform === cc.sys.IPHONE || cc.sys.platform === cc.sys.IPAD;
    }

    public static isMiniGame(): boolean {
        return cc.sys.platform === cc.sys.WECHAT_GAME
            || cc.sys.platform === cc.sys.ALIPAY_GAME
            || cc.sys.platform === cc.sys.BAIDU_GAME
            || cc.sys.platform === cc.sys.QQ_PLAY;
    }

}