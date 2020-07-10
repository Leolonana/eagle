
export class CallNative {

    public static OpenScene = "Main2"

    private static _instance: CallNative = null;
    public static get instance(): CallNative {
        if (!this._instance)
            this._instance = new CallNative()
        return this._instance
    }

    constructor() {
        if (!jsb || !jsb.reflection) {
            console.error("jsb or reflection is undefined!")
        }
    }

    public callBackHome(sceneId: number) {
        jsb.reflection.callStaticMethod("com/eagle/video/Hello", "gameBack", "(I)V", sceneId);
    }

    public callSceneData() {
        let sceneId = jsb.reflection.callStaticMethod("com/eagle/video/Hello", "sceneData", "(V)I");
        console.log("[callSceneData] return sceneId = ", sceneId)
        return sceneId || 1
    }


    public callVoid() {
        
    }

    public helloNative() {
        let ret = jsb.reflection.callStaticMethod("com/eagle/video/Hello", "helloNativeI", "(II)I", 1, 1);
        console.log("called helloNativeI and ret from native ", ret);

        jsb.reflection.callStaticMethod("com/eagle/video/Hello", "helloNativeS", "(Ljava/lang/String;)V", "hello native, i'm js");

        let res = jsb.reflection.callStaticMethod("com/eagle/video/DataReflection", "getPackageData", "()Ljava/lang/String;");
        console.log(res);
        if (res) {
            try {
                let json = JSON.parse(res);
                if (json.launchSceneID == 1) {
                    cc.director.loadScene("Main1");
                } else {
                    cc.director.loadScene("Main2");
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    /**
     * 调用原生静态方法
     * @param className 
     * @param method 
     * @param params @Array<any>
     */
    public callStaticFunc(className, method, params) {
        if (!className || !method || !params || params.length) {
            console.error("callStaticFunc params is defenced!")
            return
        }

        jsb.reflection.callStaticMethod(className, method, "")
    }
}