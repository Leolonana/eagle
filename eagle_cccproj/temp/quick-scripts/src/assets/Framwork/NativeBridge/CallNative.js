"use strict";
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