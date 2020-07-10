
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Platform/PlatformAndroid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9QbGF0Zm9ybS9QbGF0Zm9ybUFuZHJvaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxDQUFFLE1BQU07QUFFdEM7Ozs7R0FJRztBQUNIO0lBV0k7UUFUaUIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQVN2QixDQUFDO0lBTmpCLHNCQUFrQiwyQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBSWEsdUJBQU8sR0FBckI7UUFDSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzlDLENBQUM7SUFFRCxlQUFlO0lBQ2Ysa0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU8sd0NBQWMsR0FBdEIsVUFBdUIsTUFFdEI7SUFFRCxDQUFDO0lBRUQsV0FBVztJQUNYLG1DQUFTLEdBQVQsVUFBVSxNQUFjO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBSSxHQUFHLDRCQUF1QixNQUFRLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU07UUFDTixVQUFVLENBQUM7WUFDUCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxlQUFlO0lBQ2YsdUNBQWEsR0FBYjtRQUNJLHFDQUFxQztJQUN6QyxDQUFDO0lBRUQsV0FBVztJQUNYLG1DQUFTLEdBQVQ7SUFFQSxDQUFDO0lBRUQsZUFBZTtJQUNmLHFDQUFXLEdBQVg7SUFFQSxDQUFDO0lBakRjLHlCQUFTLEdBQW9CLElBQUksQ0FBQztJQW1EckQsc0JBQUM7Q0F2REQsQUF1REMsSUFBQTtBQXZEWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQbGF0Zm9ybSB9IGZyb20gXCIuL0lQbGF0Zm9ybVwiO1xuXG5jb25zdCBUQUcgPSBcIlBsYXRmb3JtQW5kcm9pZFwiOyAgLy/ml6Xlv5fmoIfor4ZcblxuLyoqXG4gKiDlronljZPlubPlj7BcbiAqIEBhdXRob3IgZ3VvYlxuICogQGRhdGUgMjAyMC8wNi8wOFxuICovXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1BbmRyb2lkIGltcGxlbWVudHMgSVBsYXRmb3JtIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3BsYXRmb3JtID0gXCJhbmRyb2lkXCI7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFBsYXRmb3JtQW5kcm9pZCA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogUGxhdGZvcm1BbmRyb2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSlcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFBsYXRmb3JtQW5kcm9pZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc3VwcG9ydCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkFORFJPSUQ7XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPluW9k+WJjeW5s+WPsOagh+ivhiAqL1xuICAgIHBsYXRmb3JtKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF0Zm9ybTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGxOYXRpdmVTeW5jKHBhcmFtczoge1xuXG4gICAgfSkge1xuXG4gICAgfVxuXG4gICAgLyoqIOWKoOi9veWcuuaZryAqL1xuICAgIGxvYWRTY2VuZShwYXJhbXM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhgWyR7VEFHfV0sIGxvYWRTY2VuZSBwYXJhbXMgJHtwYXJhbXN9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiAocGFyYW1zKSk7XG4gICAgICAgIC8v5bu25pe25qih5oufXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYWluIGlzIGxvYWRlZCFcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMik7XG4gICAgfVxuXG4gICAgLyoqIOWKoOi9veWcuuaZr+aIkOWKn+WbnuiwgyAqL1xuICAgIG9uU2NlbmVMb2FkZWQoKSB7XG4gICAgICAgIC8vIENhbGxOYXRpdmUuaW5zdGFuY2UuY2FsbFN0YXRpY0Z1bmNcbiAgICB9XG5cbiAgICAvKiog6YCA5Ye65Zy65pmvICovXG4gICAgZXhpdFNjZW5lKCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgLyoqIOmAgOWHuuWcuuaZr+aIkOWKn+WbnuiwgyAqL1xuICAgIG9uU2NlbmVFeGl0KCk6IHZvaWQge1xuXG4gICAgfVxuXG59Il19