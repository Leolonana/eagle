"use strict";
cc._RF.push(module, '762d4NEZ05ByIizdNyWUiyt', 'PlatformUtil');
// Framwork/Utils/PlatformUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlatformUtil = /** @class */ (function () {
    function PlatformUtil() {
    }
    PlatformUtil.isAndroid = function () {
        return cc.sys.platform === cc.sys.ANDROID;
    };
    PlatformUtil.isIOS = function () {
        return cc.sys.platform === cc.sys.IPHONE || cc.sys.platform === cc.sys.IPAD;
    };
    PlatformUtil.isMiniGame = function () {
        return cc.sys.platform === cc.sys.WECHAT_GAME
            || cc.sys.platform === cc.sys.ALIPAY_GAME
            || cc.sys.platform === cc.sys.BAIDU_GAME
            || cc.sys.platform === cc.sys.QQ_PLAY;
    };
    return PlatformUtil;
}());
exports.PlatformUtil = PlatformUtil;

cc._RF.pop();