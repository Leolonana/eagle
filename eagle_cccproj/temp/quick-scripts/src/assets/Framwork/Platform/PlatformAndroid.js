"use strict";
cc._RF.push(module, '0cc83M4dHdGRIk45Nz9DUEV', 'PlatformAndroid');
// Framwork/Platform/PlatformAndroid.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TAG = "PlatformAndroid"; //日志标识
/**
 * 安卓平台
 * @author guob
 * @date 2020/06/08
 */
var PlatformAndroid = /** @class */ (function () {
    function PlatformAndroid() {
        this._platform = "android";
    }
    Object.defineProperty(PlatformAndroid, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new PlatformAndroid();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    PlatformAndroid.support = function () {
        return cc.sys.platform === cc.sys.ANDROID;
    };
    /** 获取当前平台标识 */
    PlatformAndroid.prototype.platform = function () {
        return this._platform;
    };
    PlatformAndroid.prototype.callNativeSync = function (params) {
    };
    /** 加载场景 */
    PlatformAndroid.prototype.loadScene = function (params) {
        console.log("[" + TAG + "], loadScene params " + params);
        console.log(typeof (params));
        //延时模拟
        setTimeout(function () {
            cc.director.loadScene("Main", function () {
                console.log("Main is loaded!");
            });
        }, 2);
    };
    /** 加载场景成功回调 */
    PlatformAndroid.prototype.onSceneLoaded = function () {
        // CallNative.instance.callStaticFunc
    };
    /** 退出场景 */
    PlatformAndroid.prototype.exitScene = function () {
    };
    /** 退出场景成功回调 */
    PlatformAndroid.prototype.onSceneExit = function () {
    };
    PlatformAndroid._instance = null;
    return PlatformAndroid;
}());
exports.PlatformAndroid = PlatformAndroid;

cc._RF.pop();