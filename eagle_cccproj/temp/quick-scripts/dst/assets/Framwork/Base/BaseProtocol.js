
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
        this.Method = "onOpenProtocol";
    }
    BaseProtocol.prototype.openProtocol = function (url) {
        if (!url || !url.split(this.Head)[1]) {
            console.error("[" + TAG + "] openProtocol illegal url " + url);
            return;
        }
        var body = url.split(this.Head)[1];
        var func = body.split(this.Separator)[1];
        var args = body.split(this.Separator)[2] || "null";
        if (PlatformUtil_1.PlatformUtil.isAndroid() || PlatformUtil_1.PlatformUtil.isIOS()) {
            return this.callNative({
                package: this.Package,
                class: this.Class,
                method: this.Method,
                sign: "(SS)S",
                args: [func, args]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9CYXNlL0Jhc2VQcm90b2NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMseUNBQTRDO0FBQzVDLHNEQUFxRDtBQUVyRCxJQUFNLEdBQUcsR0FBRyxjQUFjLENBQUM7QUFFM0I7O0dBRUc7QUFDSDtJQUFBO1FBQ3FCLFNBQUksR0FBRyxVQUFVLENBQUM7UUFDbEIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUVoQixZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDaEMsVUFBSyxHQUFHLGdCQUFnQixDQUFDO1FBQ3pCLFdBQU0sR0FBRyxnQkFBZ0IsQ0FBQztJQXNEL0MsQ0FBQztJQW5EVSxtQ0FBWSxHQUFuQixVQUFvQixHQUFXO1FBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQUksR0FBRyxtQ0FBOEIsR0FBSyxDQUFDLENBQUE7WUFDekQsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFBO1FBRWxELElBQUksMkJBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSwyQkFBWSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2xELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzthQUNyQixDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsd0NBQXdDO1NBRTNDO0lBQ0wsQ0FBQztJQUVPLGlDQUFVLEdBQWxCLFVBQW1CLE1BTWxCO1FBQ0csSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBSSxHQUFHLHNDQUFtQyxDQUFDLENBQUM7WUFDMUQsT0FBTztTQUNWO1FBRUQsSUFBSSxHQUFHLEdBQUcsZUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSTtZQUNBLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFTLENBQUM7WUFDckMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLG1CQUFPLENBQUMsRUFBRSxFQUFFO2dCQUM3QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFJLEdBQUcsc0NBQWlDLE1BQU0sQ0FBQyxHQUFHLE1BQUcsQ0FBQyxDQUFDO2dCQUNyRSxPQUFPO2FBQ1Y7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFJLEdBQUcseUJBQW9CLEdBQUcsMkJBQXNCLEtBQUssTUFBRyxDQUFDLENBQUM7WUFDNUUsT0FBTztTQUNWO0lBQ0wsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0E1REEsQUE0REMsSUFBQTtBQTVEcUIsb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmUgfSBmcm9tIFwiLi9OYXRpdmVcIjtcbmltcG9ydCB7IElSZXQsIEVTdGFkdXMgfSBmcm9tIFwiLi9JUHJvdG9jb2xcIjtcbmltcG9ydCB7IFBsYXRmb3JtVXRpbCB9IGZyb20gXCIuLi9VdGlscy9QbGF0Zm9ybVV0aWxcIjtcblxuY29uc3QgVEFHID0gXCJCYXNlUHJvdG9jb2xcIjtcblxuLyoqXG4gKiDljY/orq7mir3osaHln7rnsbtcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQcm90b2NvbCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBIZWFkID0gXCJlYWdsZTovL1wiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU2VwYXJhdG9yID0gXCI/XCI7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IFBhY2thZ2UgPSBcImNvbS9lYWdsZS9iYXNlL2puaS9cIjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IENsYXNzID0gXCJQbGF0Zm9ybVN5c3RlbVwiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgTWV0aG9kID0gXCJvbk9wZW5Qcm90b2NvbFwiO1xuXG5cbiAgICBwdWJsaWMgb3BlblByb3RvY29sKHVybDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdXJsIHx8ICF1cmwuc3BsaXQodGhpcy5IZWFkKVsxXSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7VEFHfV0gb3BlblByb3RvY29sIGlsbGVnYWwgdXJsICR7dXJsfWApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYm9keSA9IHVybC5zcGxpdCh0aGlzLkhlYWQpWzFdXG4gICAgICAgIGxldCBmdW5jID0gYm9keS5zcGxpdCh0aGlzLlNlcGFyYXRvcilbMV1cbiAgICAgICAgbGV0IGFyZ3MgPSBib2R5LnNwbGl0KHRoaXMuU2VwYXJhdG9yKVsyXSB8fCBcIm51bGxcIlxuXG4gICAgICAgIGlmIChQbGF0Zm9ybVV0aWwuaXNBbmRyb2lkKCkgfHwgUGxhdGZvcm1VdGlsLmlzSU9TKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxOYXRpdmUoe1xuICAgICAgICAgICAgICAgIHBhY2thZ2U6IHRoaXMuUGFja2FnZSxcbiAgICAgICAgICAgICAgICBjbGFzczogdGhpcy5DbGFzcyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuTWV0aG9kLFxuICAgICAgICAgICAgICAgIHNpZ246IFwiKFNTKVNcIixcbiAgICAgICAgICAgICAgICBhcmdzOiBbZnVuYywgYXJnc11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9UT0RPIHdoZW4gY2FsbCB0aGUgb3RoZXIgaG9zdCBwbGF0Zm9ybVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGxOYXRpdmUocGFyYW1zOiB7XG4gICAgICAgIHBhY2thZ2U6IHN0cmluZyxcbiAgICAgICAgY2xhc3M6IHN0cmluZyxcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHNpZ24/OiBzdHJpbmcsXG4gICAgICAgIGFyZ3M/OiBhbnlbXSxcbiAgICB9KTogYW55IHtcbiAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFske1RBR31dIGNhbGxOYXRpdmUgcGFyYW1zIGlzIHVuZGVmaW5lZCFgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXQgPSBOYXRpdmUuaW5zdGFuY2UuY2FsbChwYXJhbXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJldE9iaiA9IEpTT04ucGFyc2UocmV0KSBhcyBJUmV0O1xuICAgICAgICAgICAgaWYgKHJldE9iai5zdGFkdXMgPT0gRVN0YWR1cy5PSykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXRPYmouZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7VEFHfV0gY2FsbE5hdGl2ZSByZXR1cm4gZXJyb3IgbXNnOiR7cmV0T2JqLm1zZ30hYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7VEFHfV0gY2FsbE5hdGl2ZSByZXQ6JHtyZXR9LCBkZWNvZGUgZXhjZXB0aW9uOiR7ZXJyb3J9IWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19