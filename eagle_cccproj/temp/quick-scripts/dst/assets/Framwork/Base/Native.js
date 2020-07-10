
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Base/Native.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9CYXNlL05hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBcUQ7QUFFckQsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDO0FBRXJCOzs7O0dBSUc7QUFDSDtJQUlJO1FBQ0ksSUFBSSxDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7SUFDbkUsQ0FBQztJQUdELHNCQUFrQixrQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7YUFDakM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRDs7O09BR0c7SUFDSSxxQkFBSSxHQUFYLFVBQVksTUFNWDtRQUNHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBSSxHQUFHLDRCQUF1QixNQUFNLENBQUMsS0FBSyxpQkFBWSxNQUFNLENBQUMsTUFBTSxlQUFVLE1BQU0sQ0FBQyxJQUFJLHFCQUFnQixNQUFNLENBQUMsSUFBSSxNQUFHLENBQUMsQ0FBQTtRQUNySSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFJLEdBQUcsc0NBQW1DLENBQUMsQ0FBQTtZQUN6RCxPQUFPO1NBQ1Y7UUFFRCxJQUFJO1lBQ0EsSUFBSSwyQkFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSztnQkFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJ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QkFBd0IsTUFBTSxpQ0FBNEIsSUFBSSxnQkFBYSxDQUFDLENBQUM7YUFDdkc7U0FDSjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLFNBQVM7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFO2dCQUNuSCxNQUFNLElBQUksS0FBSyxDQUFDLE1BQUksR0FBRyxxQ0FBZ0MsTUFBTSxTQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDLENBQUM7YUFDbEY7WUFFRCxTQUFTO1lBQ1QsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQUksR0FBRyw2QkFBd0IsTUFBTSxpQ0FBNEIsSUFBSSxNQUFHLENBQUMsQ0FBQztpQkFDN0Y7YUFDSjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUwsYUFBQztBQUFELENBN0pBLEFBNkpDLElBQUE7QUE3Slksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybVV0aWwgfSBmcm9tIFwiLi4vVXRpbHMvUGxhdGZvcm1VdGlsXCI7XG5cbmNvbnN0IFRBRyA9IFwiTmF0aXZlXCI7XG5cbi8qKlxuICog5Y6f55Sf5o6l5Y+jXG4gKiBAYXV0aG9yIGd1b2JcbiAqIEBkYXRlIDIwMjAvMDcvMDFcbiAqL1xuZXhwb3J0IGNsYXNzIE5hdGl2ZSB7XG5cbiAgICBwcml2YXRlIF9jYWxsTmF0aXZlU3RhdGljTWV0aG9kO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2NhbGxOYXRpdmVTdGF0aWNNZXRob2QgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTmF0aXZlO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IE5hdGl2ZSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5hdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDosIPnlKjljp/nlJ/mlrnms5VcbiAgICAgKiBAcGFyYW0gcGFyYW1zIFxuICAgICAqL1xuICAgIHB1YmxpYyBjYWxsKHBhcmFtczoge1xuICAgICAgICBwYWNrYWdlOiBzdHJpbmcsXG4gICAgICAgIGNsYXNzOiBzdHJpbmcsXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBzaWduPzogc3RyaW5nLFxuICAgICAgICBhcmdzPzogYW55W10sXG4gICAgfSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYFske1RBR31dIF9jYWxsTmF0aXZlIGNsYXNzICR7cGFyYW1zLmNsYXNzfSwgbWV0aG9kICR7cGFyYW1zLm1ldGhvZH0sIHNpZ24gJHtwYXJhbXMuc2lnbn0sIHBhcmFtYXRlcnMgJHtwYXJhbXMuYXJnc30uYClcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5jbGFzcyB8fCAhcGFyYW1zLm1ldGhvZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7VEFHfV0gX2NhbGxOYXRpdmUgaWxsZWdhbCBwYXJhbWF0ZXJzIWApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKFBsYXRmb3JtVXRpbC5pc0FuZHJvaWQoKSkgeyAvLyDlronljZNcbiAgICAgICAgICAgICAgICBsZXQgc2lnbiA9IHRoaXMuX2dldFNpZ24ocGFyYW1zLnNpZ24pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja1BhcmFtKHBhcmFtcy5hcmdzLCBwYXJhbXMuc2lnbikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2YWxTdHJpbmcgPSBcInRoaXMuX2NhbGxOYXRpdmVTdGF0aWNNZXRob2QocGFyYW1zLnBhY2thZ2UrcGFyYW1zLmNsYXNzLHBhcmFtcy5tZXRob2Qsc2lnbixcIjtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmFyZ3MuZm9yRWFjaCgocGFyYW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmFsU3RyaW5nICs9IHBhcmFtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHBhcmFtcy5hcmdzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZXZhbChldmFsU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FsbE5hdGl2ZVN0YXRpY01ldGhvZChwYXJhbXMuY2xhc3MsIHBhcmFtcy5tZXRob2QsIHNpZ24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGxhdGZvcm1VdGlsLmlzSU9TKCkpIHsgIC8vIElPU1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja1BhcmFtKHBhcmFtcy5hcmdzLCBwYXJhbXMuc2lnbikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2YWxTdHJpbmcgPSBcInRoaXMuX2NhbGxOYXRpdmVTdGF0aWNNZXRob2QocGFyYW1zLmNsYXNzLHBhcmFtcy5tZXRob2QsXCI7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5hcmdzLmZvckVhY2goKHBhcmFtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZhbFN0cmluZyArPSBwYXJhbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBwYXJhbXMuYXJncy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbFN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGV2YWwoZXZhbFN0cmluZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxOYXRpdmVTdGF0aWNNZXRob2QocGFyYW1zLmNsYXNzLCBwYXJhbXMubWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAgICAvLyDlhbbku5ZcbiAgICAgICAgICAgICAgICBsZXQgc2lnbiA9IHRoaXMuX2dldFNpZ24ocGFyYW1zLnNpZ24pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja1BhcmFtKHBhcmFtcy5hcmdzLCBwYXJhbXMuc2lnbikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2YWxTdHJpbmcgPSBcInRoaXMuX2NhbGxOYXRpdmVTdGF0aWNNZXRob2QocGFyYW1zLnBhY2thZ2UrcGFyYW1zLmNsYXNzLHBhcmFtcy5tZXRob2Qsc2lnbixcIjtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmFyZ3MuZm9yRWFjaCgocGFyYW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmFsU3RyaW5nICs9IHBhcmFtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHBhcmFtcy5hcmdzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZhbFN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBldmFsKGV2YWxTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxsTmF0aXZlU3RhdGljTWV0aG9kKHBhcmFtcy5jbGFzcywgcGFyYW1zLm1ldGhvZCwgc2lnbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWPguaVsOetvuWQjVxuICAgICAqIEBwYXJhbSBzaWduIOacgOWQjuS4gOS4quWtl+espuS7o+ihqOi/lOWbnuWAvO+8jOWFtuS9meS4uuWPguaVsFxuICAgICAqIEByZXR1cm5zIHNpZ25hdHVyZSBcbiAgICAgKiBAZXhhbXBsZSBfZ2V0U2lnbihcIklGQlNcIikgcmV0dXJuIFwiKElGWilMamF2YS9sYW5nL1N0cmluZztcIlxuICAgICAqL1xuICAgIHByaXZhdGUgX2dldFNpZ24oc2lnbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFzaWduKSByZXR1cm4gXCIoKVZcIjtcblxuICAgICAgICBsZXQgamF2YVNpZ25NYXAgPSB7XG4gICAgICAgICAgICBJOiBcIklcIixcbiAgICAgICAgICAgIEY6IFwiRlwiLFxuICAgICAgICAgICAgQjogXCJaXCIsXG4gICAgICAgICAgICBTOiBcIkxqYXZhL2xhbmcvU3RyaW5nO1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNpZ3MgPSBzaWduLnNwbGl0KFwiXCIpO1xuICAgICAgICBpZiAoIXNpZ3MgfHwgc2lncy5sZW5ndGggPD0gMCkgcmV0dXJuIFwiKClWXCI7XG5cbiAgICAgICAgbGV0IHNpZ25hdHVyZSA9IFwiKFwiO1xuICAgICAgICBzaWdzLmZvckVhY2goKHNpZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSBzaWdzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBzaWduYXR1cmUgKz0gXCIpXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghamF2YVNpZ25NYXBbc2lnXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgWyR7VEFHfV0gX2dldFNpZ24gY2Fubm90IHJlc29sdmUgc2lnOiR7c2lnfSBvZiAke3NpZ259IWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaWduYXR1cmUgKz0gamF2YVNpZ25NYXBbc2lnXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzaWduYXR1cmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qOA5p+l5Y+C5pWwXG4gICAgICogQHBhcmFtIHBhcmFtcyDlj4LmlbDmlbDnu4RcbiAgICAgKiBAcGFyYW0gc2lnbiDlj4LmlbDnrb7lkI3lrZfnrKbkuLJcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jaGVja1BhcmFtKHBhcmFtczogYW55W10sIHNpZ24/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgcGFyYW1zLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHNpZ25UeXBlTWFwID0ge1xuICAgICAgICAgICAgSTogXCJudW1iZXJcIixcbiAgICAgICAgICAgIEY6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICBCOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIFM6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaWdzO1xuICAgICAgICBpZiAoc2lnbikge1xuICAgICAgICAgICAgc2lncyA9IHNpZ24uc3Vic3RyaW5nKDAsIHNpZ24ubGVuZ3RoIC0gMSkuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICBpZiAoc2lncy5sZW5ndGggIT09IHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske1RBR31dIF9jaGVja1BhcmFtIHBhcmFtcyAke3BhcmFtc30gZG8gbm90IG1hdGNoIHNpZ25hdHVyZXMgJHtzaWdufSBpbiBsZW5ndGghYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8g5qOA5p+l5Y+C5pWw57G75Z6LXG4gICAgICAgICAgICBpZiAoIXBhcmFtc1tpXSB8fCB0eXBlb2YgKHBhcmFtc1tpXSkgIT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgKHBhcmFtc1tpXSkgIT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIChwYXJhbXNbaV0pICE9IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske1RBR31dIF9jaGVja1BhcmFtIGlsbGVnYWwgcGFyYW1zICR7cGFyYW1zfSAke3BhcmFtc1tpXX0hYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOajgOafpeWPguaVsOetvuWQjVxuICAgICAgICAgICAgaWYgKHNpZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lnblR5cGVNYXBbc2lnc1tpXV0gIT09IHR5cGVvZiAocGFyYW1zW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske1RBR31dIF9jaGVja1BhcmFtIHBhcmFtcyAke3BhcmFtc30gZG8gbm90IG1hdGNoIHNpZ25hdHVyZXMgJHtzaWdufSFgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbn0iXX0=