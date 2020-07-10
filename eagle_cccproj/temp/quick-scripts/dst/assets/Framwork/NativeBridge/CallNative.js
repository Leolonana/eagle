
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/NativeBridge/CallNative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d54cDZ01NFA7rUCgfuMw/6', 'CallNative');
// Framwork/NativeBridge/CallNative.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallNative = void 0;
var CallNative = /** @class */ (function () {
    function CallNative() {
        if (!jsb || !jsb.reflection) {
            console.error("jsb or reflection is undefined!");
        }
    }
    Object.defineProperty(CallNative, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new CallNative();
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    CallNative.prototype.callBackHome = function (sceneId) {
        jsb.reflection.callStaticMethod("com/eagle/video/Hello", "gameBack", "(I)V", sceneId);
    };
    CallNative.prototype.callSceneData = function () {
        var sceneId = jsb.reflection.callStaticMethod("com/eagle/video/Hello", "sceneData", "(V)I");
        console.log("[callSceneData] return sceneId = ", sceneId);
        return sceneId || 1;
    };
    CallNative.prototype.callVoid = function () {
    };
    CallNative.prototype.helloNative = function () {
        var ret = jsb.reflection.callStaticMethod("com/eagle/video/Hello", "helloNativeI", "(II)I", 1, 1);
        console.log("called helloNativeI and ret from native ", ret);
        jsb.reflection.callStaticMethod("com/eagle/video/Hello", "helloNativeS", "(Ljava/lang/String;)V", "hello native, i'm js");
        var res = jsb.reflection.callStaticMethod("com/eagle/video/DataReflection", "getPackageData", "()Ljava/lang/String;");
        console.log(res);
        if (res) {
            try {
                var json = JSON.parse(res);
                if (json.launchSceneID == 1) {
                    cc.director.loadScene("Main1");
                }
                else {
                    cc.director.loadScene("Main2");
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    };
    /**
     * 调用原生静态方法
     * @param className
     * @param method
     * @param params @Array<any>
     */
    CallNative.prototype.callStaticFunc = function (className, method, params) {
        if (!className || !method || !params || params.length) {
            console.error("callStaticFunc params is defenced!");
            return;
        }
        jsb.reflection.callStaticMethod(className, method, "");
    };
    CallNative.OpenScene = "Main2";
    CallNative._instance = null;
    return CallNative;
}());
exports.CallNative = CallNative;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9OYXRpdmVCcmlkZ2UvQ2FsbE5hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQVdJO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1NBQ25EO0lBQ0wsQ0FBQztJQVZELHNCQUFrQixzQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUE7WUFDckMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBUU0saUNBQVksR0FBbkIsVUFBb0IsT0FBZTtRQUMvQixHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVNLGtDQUFhLEdBQXBCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUN6RCxPQUFPLE9BQU8sSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUdNLDZCQUFRLEdBQWY7SUFFQSxDQUFDO0lBRU0sZ0NBQVcsR0FBbEI7UUFDSSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFN0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUUxSCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDdEgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUk7Z0JBQ0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtvQkFDekIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQzthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksbUNBQWMsR0FBckIsVUFBc0IsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNO1FBQzNDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7WUFDbkQsT0FBTTtTQUNUO1FBRUQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFqRWEsb0JBQVMsR0FBRyxPQUFPLENBQUE7SUFFbEIsb0JBQVMsR0FBZSxJQUFJLENBQUM7SUFnRWhELGlCQUFDO0NBcEVELEFBb0VDLElBQUE7QUFwRVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBDYWxsTmF0aXZlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgT3BlblNjZW5lID0gXCJNYWluMlwiXG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhbGxOYXRpdmUgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IENhbGxOYXRpdmUge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKVxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ2FsbE5hdGl2ZSgpXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIWpzYiB8fCAhanNiLnJlZmxlY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJqc2Igb3IgcmVmbGVjdGlvbiBpcyB1bmRlZmluZWQhXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsbEJhY2tIb21lKHNjZW5lSWQ6IG51bWJlcikge1xuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL2VhZ2xlL3ZpZGVvL0hlbGxvXCIsIFwiZ2FtZUJhY2tcIiwgXCIoSSlWXCIsIHNjZW5lSWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxsU2NlbmVEYXRhKCkge1xuICAgICAgICBsZXQgc2NlbmVJZCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vZWFnbGUvdmlkZW8vSGVsbG9cIiwgXCJzY2VuZURhdGFcIiwgXCIoVilJXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltjYWxsU2NlbmVEYXRhXSByZXR1cm4gc2NlbmVJZCA9IFwiLCBzY2VuZUlkKVxuICAgICAgICByZXR1cm4gc2NlbmVJZCB8fCAxXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgY2FsbFZvaWQoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBoZWxsb05hdGl2ZSgpIHtcbiAgICAgICAgbGV0IHJldCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vZWFnbGUvdmlkZW8vSGVsbG9cIiwgXCJoZWxsb05hdGl2ZUlcIiwgXCIoSUkpSVwiLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWQgaGVsbG9OYXRpdmVJIGFuZCByZXQgZnJvbSBuYXRpdmUgXCIsIHJldCk7XG5cbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcImNvbS9lYWdsZS92aWRlby9IZWxsb1wiLCBcImhlbGxvTmF0aXZlU1wiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBcImhlbGxvIG5hdGl2ZSwgaSdtIGpzXCIpO1xuXG4gICAgICAgIGxldCByZXMgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL2VhZ2xlL3ZpZGVvL0RhdGFSZWZsZWN0aW9uXCIsIFwiZ2V0UGFja2FnZURhdGFcIiwgXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAgICAgICAgICAgICBpZiAoanNvbi5sYXVuY2hTY2VuZUlEID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpbjFcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpbjJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiwg+eUqOWOn+eUn+mdmeaAgeaWueazlVxuICAgICAqIEBwYXJhbSBjbGFzc05hbWUgXG4gICAgICogQHBhcmFtIG1ldGhvZCBcbiAgICAgKiBAcGFyYW0gcGFyYW1zIEBBcnJheTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGNhbGxTdGF0aWNGdW5jKGNsYXNzTmFtZSwgbWV0aG9kLCBwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFjbGFzc05hbWUgfHwgIW1ldGhvZCB8fCAhcGFyYW1zIHx8IHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYWxsU3RhdGljRnVuYyBwYXJhbXMgaXMgZGVmZW5jZWQhXCIpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NOYW1lLCBtZXRob2QsIFwiXCIpXG4gICAgfVxufSJdfQ==