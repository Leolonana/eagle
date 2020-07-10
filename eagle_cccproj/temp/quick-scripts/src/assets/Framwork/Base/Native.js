"use strict";
cc._RF.push(module, '7273c5A45lDRqFMQJaNlMWJ', 'Native');
// Framwork/Base/Native.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Native = void 0;
var PlatformUtil_1 = require("../Utils/PlatformUtil");
var TAG = "Native";
/**
 * 原生接口
 * @author guob
 * @date 2020/07/01
 */
var Native = /** @class */ (function () {
    function Native() {
        this._callNativeStaticMethod = jsb.reflection.callStaticMethod;
    }
    Object.defineProperty(Native, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new Native();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 调用原生方法
     * @param params
     */
    Native.prototype.call = function (params) {
        console.debug("[" + TAG + "] _callNative class " + params.class + ", method " + params.method + ", sign " + params.sign + ", paramaters " + params.args + ".");
        if (!params || !params.class || !params.method) {
            console.error("[" + TAG + "] _callNative illegal paramaters!");
            return;
        }
        try {
            if (PlatformUtil_1.PlatformUtil.isAndroid()) { // 安卓
                var sign = this._getSign(params.sign);
                if (this._checkParam(params.args, params.sign)) {
                    var evalString_1 = "this._callNativeStaticMethod(params.package+params.class,params.method,sign,";
                    params.args.forEach(function (param, index) {
                        evalString_1 += param;
                        if (index >= params.args.length - 1) {
                            evalString_1 += ")";
                        }
                    });
                    eval(evalString_1);
                }
                else {
                    return this._callNativeStaticMethod(params.class, params.method, sign);
                }
            }
            else if (PlatformUtil_1.PlatformUtil.isIOS()) { // IOS
                if (this._checkParam(params.args, params.sign)) {
                    var evalString_2 = "this._callNativeStaticMethod(params.class,params.method,";
                    params.args.forEach(function (param, index) {
                        evalString_2 += param;
                        if (index >= params.args.length - 1) {
                            evalString_2 += ")";
                        }
                    });
                    eval(evalString_2);
                }
                else {
                    return this._callNativeStaticMethod(params.class, params.method);
                }
            }
            else { // 其他
                var sign = this._getSign(params.sign);
                if (this._checkParam(params.args, params.sign)) {
                    var evalString_3 = "this._callNativeStaticMethod(params.package+params.class,params.method,sign,";
                    params.args.forEach(function (param, index) {
                        evalString_3 += param;
                        if (index >= params.args.length - 1) {
                            evalString_3 += ")";
                        }
                    });
                    console.log(evalString_3);
                    eval(evalString_3);
                }
                else {
                    return this._callNativeStaticMethod(params.class, params.method, sign);
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * 参数签名
     * @param sign 最后一个字符代表返回值，其余为参数
     * @returns signature
     * @example _getSign("IFBS") return "(IFZ)Ljava/lang/String;"
     */
    Native.prototype._getSign = function (sign) {
        if (!sign)
            return "()V";
        var javaSignMap = {
            I: "I",
            F: "F",
            B: "Z",
            S: "Ljava/lang/String;"
        };
        var sigs = sign.split("");
        if (!sigs || sigs.length <= 0)
            return "()V";
        var signature = "(";
        sigs.forEach(function (sig, index) {
            if (index >= sigs.length - 1) {
                signature += ")";
            }
            if (!javaSignMap[sig]) {
                throw new Error("[" + TAG + "] _getSign cannot resolve sig:" + sig + " of " + sign + "!");
            }
            signature += javaSignMap[sig];
        });
        return signature;
    };
    /**
     * 检查参数
     * @param params 参数数组
     * @param sign 参数签名字符串
     */
    Native.prototype._checkParam = function (params, sign) {
        if (!params || params.length <= 0)
            return;
        var signTypeMap = {
            I: "number",
            F: "number",
            B: "boolean",
            S: "string"
        };
        var sigs;
        if (sign) {
            sigs = sign.substring(0, sign.length - 1).split("");
            if (sigs.length !== params.length) {
                throw new Error("[" + TAG + "] _checkParam params " + params + " do not match signatures " + sign + " in length!");
            }
        }
        for (var i = 0; i < params.length; i++) {
            // 检查参数类型
            if (!params[i] || typeof (params[i]) != "number" || typeof (params[i]) != "boolean" || typeof (params[i]) != "string") {
                throw new Error("[" + TAG + "] _checkParam illegal params " + params + " " + params[i] + "!");
            }
            // 检查参数签名
            if (sigs) {
                if (signTypeMap[sigs[i]] !== typeof (params[i])) {
                    throw new Error("[" + TAG + "] _checkParam params " + params + " do not match signatures " + sign + "!");
                }
            }
        }
        return true;
    };
    return Native;
}());
exports.Native = Native;

cc._RF.pop();