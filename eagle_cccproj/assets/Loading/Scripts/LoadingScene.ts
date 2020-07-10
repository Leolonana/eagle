// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { CallNative } from "../../Framwork/NativeBridge/CallNative";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingScene extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("ccc lifecycle onLoad");
    }

    start () {
        cc.log("ccc lifecycle start");
        let sceneId = CallNative.instance.callSceneData()
        let sceneName;
        if (sceneId == 1) {
            sceneName = "Main";
        } else {
            sceneName = "Main2";
        }

        //自动跳转到对应场景
        this.scheduleOnce(()=>{
            cc.log("turn to ", sceneName)
            cc.director.loadScene(sceneName)
        }, 1)
    }

    // update (dt) {}

    onDisable() {
        console.log("ccc lifecycle onDisable");
    }

    onEnable() {
        console.log("ccc lifecycle onEnable");
    }

    onDestroy() {
        console.log("ccc lifecycle onDestroy");

    }
    
}
