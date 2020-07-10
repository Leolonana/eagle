
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Base/BaseProtocol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9CYXNlL0Jhc2VQcm90b2NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMseUNBQTRDO0FBQzVDLHNEQUFxRDtBQUVyRCxJQUFNLEdBQUcsR0FBRyxjQUFjLENBQUM7QUFFM0I7O0dBRUc7QUFDSDtJQUFBO1FBQ3FCLFNBQUksR0FBRyxVQUFVLENBQUM7UUFDbEIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUVoQixZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDaEMsVUFBSyxHQUFHLGdCQUFnQixDQUFDO0lBc0Q5QyxDQUFDO0lBbkRVLG1DQUFZLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBSSxHQUFHLG1DQUE4QixHQUFLLENBQUMsQ0FBQTtZQUN6RCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUE7UUFFbEQsSUFBSSwyQkFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLDJCQUFZLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbEQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILHdDQUF3QztTQUUzQztJQUNMLENBQUM7SUFFTyxpQ0FBVSxHQUFsQixVQUFtQixNQU1sQjtRQUNHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQUksR0FBRyxzQ0FBbUMsQ0FBQyxDQUFDO1lBQzFELE9BQU87U0FDVjtRQUVELElBQUksR0FBRyxHQUFHLGVBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUk7WUFDQSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBUyxDQUFDO1lBQ3JDLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxtQkFBTyxDQUFDLEVBQUUsRUFBRTtnQkFDN0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBSSxHQUFHLHNDQUFpQyxNQUFNLENBQUMsR0FBRyxNQUFHLENBQUMsQ0FBQztnQkFDckUsT0FBTzthQUNWO1NBQ0o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBSSxHQUFHLHlCQUFvQixHQUFHLDJCQUFzQixLQUFLLE1BQUcsQ0FBQyxDQUFDO1lBQzVFLE9BQU87U0FDVjtJQUNMLENBQUM7SUFFTCxtQkFBQztBQUFELENBM0RBLEFBMkRDLElBQUE7QUEzRHFCLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlIH0gZnJvbSBcIi4vTmF0aXZlXCI7XG5pbXBvcnQgeyBJUmV0LCBFU3RhZHVzIH0gZnJvbSBcIi4vSVByb3RvY29sXCI7XG5pbXBvcnQgeyBQbGF0Zm9ybVV0aWwgfSBmcm9tIFwiLi4vVXRpbHMvUGxhdGZvcm1VdGlsXCI7XG5cbmNvbnN0IFRBRyA9IFwiQmFzZVByb3RvY29sXCI7XG5cbi8qKlxuICog5Y2P6K6u5oq96LGh5Z+657G7XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUHJvdG9jb2wge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgSGVhZCA9IFwiZWFnbGU6Ly9cIjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFNlcGFyYXRvciA9IFwiP1wiO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBQYWNrYWdlID0gXCJjb20vZWFnbGUvYmFzZS9qbmkvXCI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBDbGFzcyA9IFwiUGxhdGZvcm1TeXN0ZW1cIjtcblxuXG4gICAgcHVibGljIG9wZW5Qcm90b2NvbCh1cmw6IHN0cmluZykge1xuICAgICAgICBpZiAoIXVybCB8fCAhdXJsLnNwbGl0KHRoaXMuSGVhZClbMV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFske1RBR31dIG9wZW5Qcm90b2NvbCBpbGxlZ2FsIHVybCAke3VybH1gKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJvZHkgPSB1cmwuc3BsaXQodGhpcy5IZWFkKVsxXVxuICAgICAgICBsZXQgbWV0aG9kID0gYm9keS5zcGxpdCh0aGlzLlNlcGFyYXRvcilbMV1cbiAgICAgICAgbGV0IGFyZ3MgPSBib2R5LnNwbGl0KHRoaXMuU2VwYXJhdG9yKVsyXSB8fCBcIm51bGxcIlxuXG4gICAgICAgIGlmIChQbGF0Zm9ybVV0aWwuaXNBbmRyb2lkKCkgfHwgUGxhdGZvcm1VdGlsLmlzSU9TKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxOYXRpdmUoe1xuICAgICAgICAgICAgICAgIHBhY2thZ2U6IHRoaXMuUGFja2FnZSxcbiAgICAgICAgICAgICAgICBjbGFzczogdGhpcy5DbGFzcyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBzaWduOiBcIihTKVNcIixcbiAgICAgICAgICAgICAgICBhcmdzOiBbYXJnc11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9UT0RPIHdoZW4gY2FsbCB0aGUgb3RoZXIgaG9zdCBwbGF0Zm9ybVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGxOYXRpdmUocGFyYW1zOiB7XG4gICAgICAgIHBhY2thZ2U6IHN0cmluZyxcbiAgICAgICAgY2xhc3M6IHN0cmluZyxcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHNpZ24/OiBzdHJpbmcsXG4gICAgICAgIGFyZ3M/OiBhbnlbXSxcbiAgICB9KTogYW55IHtcbiAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFske1RBR31dIGNhbGxOYXRpdmUgcGFyYW1zIGlzIHVuZGVmaW5lZCFgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXQgPSBOYXRpdmUuaW5zdGFuY2UuY2FsbChwYXJhbXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJldE9iaiA9IEpTT04ucGFyc2UocmV0KSBhcyBJUmV0O1xuICAgICAgICAgICAgaWYgKHJldE9iai5zdGFkdXMgPT0gRVN0YWR1cy5PSykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXRPYmouZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7VEFHfV0gY2FsbE5hdGl2ZSByZXR1cm4gZXJyb3IgbXNnOiR7cmV0T2JqLm1zZ30hYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7VEFHfV0gY2FsbE5hdGl2ZSByZXQ6JHtyZXR9LCBkZWNvZGUgZXhjZXB0aW9uOiR7ZXJyb3J9IWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19