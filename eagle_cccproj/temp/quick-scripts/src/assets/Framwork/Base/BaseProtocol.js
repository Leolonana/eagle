"use strict";
cc._RF.push(module, '92c25qXLqRErY6PnM+x3Lrp', 'BaseProtocol');
// Framwork/Base/BaseProtocol.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProtocol = void 0;
var Native_1 = require("./Native");
var IProtocol_1 = require("./IProtocol");
var PlatformUtil_1 = require("../Utils/PlatformUtil");
var TAG = "BaseProtocol";
/**
 * 协议抽象基类
 */
var BaseProtocol = /** @class */ (function () {
    function BaseProtocol() {
        this.Head = "eagle://";
        this.Separator = "?";
        this.Package = "com/eagle/base/jni/";
        this.Class = "PlatformSystem";
    }
    BaseProtocol.prototype.openProtocol = function (url) {
        if (!url || !url.split(this.Head)[1]) {
            console.error("[" + TAG + "] openProtocol illegal url " + url);
            return;
        }
        var body = url.split(this.Head)[1];
        var method = body.split(this.Separator)[1];
        var args = body.split(this.Separator)[2] || "null";
        if (PlatformUtil_1.PlatformUtil.isAndroid() || PlatformUtil_1.PlatformUtil.isIOS()) {
            return this.callNative({
                package: this.Package,
                class: this.Class,
                method: method,
                sign: "(S)S",
                args: [args]
            });
        }
        else {
            //TODO when call the other host platform
        }
    };
    BaseProtocol.prototype.callNative = function (params) {
        if (!params) {
            console.error("[" + TAG + "] callNative params is undefined!");
            return;
        }
        var ret = Native_1.Native.instance.call(params);
        try {
            var retObj = JSON.parse(ret);
            if (retObj.stadus == IProtocol_1.EStadus.OK) {
                return retObj.data;
            }
            else {
                console.error("[" + TAG + "] callNative return error msg:" + retObj.msg + "!");
                return;
            }
        }
        catch (error) {
            console.error("[" + TAG + "] callNative ret:" + ret + ", decode exception:" + error + "!");
            return;
        }
    };
    return BaseProtocol;
}());
exports.BaseProtocol = BaseProtocol;

cc._RF.pop();