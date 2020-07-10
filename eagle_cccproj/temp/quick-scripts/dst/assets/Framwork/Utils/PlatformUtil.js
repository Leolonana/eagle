
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Utils/PlatformUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9VdGlscy9QbGF0Zm9ybVV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBaUJBLENBQUM7SUFmaUIsc0JBQVMsR0FBdkI7UUFDSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzlDLENBQUM7SUFFYSxrQkFBSyxHQUFuQjtRQUNJLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDaEYsQ0FBQztJQUVhLHVCQUFVLEdBQXhCO1FBQ0ksT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVc7ZUFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXO2VBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVTtlQUNyQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUM5QyxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1VdGlsIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaXNBbmRyb2lkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuQU5EUk9JRDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzSU9TKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuSVBIT05FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLklQQUQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc01pbmlHYW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUVcbiAgICAgICAgICAgIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkFMSVBBWV9HQU1FXG4gICAgICAgICAgICB8fCBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5CQUlEVV9HQU1FXG4gICAgICAgICAgICB8fCBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5RUV9QTEFZO1xuICAgIH1cblxufSJdfQ==