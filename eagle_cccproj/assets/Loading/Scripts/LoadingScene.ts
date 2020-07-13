// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Protocol } from "../../GameBase/Protocol/Protocol";
import { SceneBase } from "../../GameBase/Base/SceneBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingScene extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    }

    start() {
        let conf = Protocol.instance.readConf();
        let scene = conf.scene;
        cc.director.preloadScene(scene, (completedCount: number, totalCount: number, item: any) => {
            cc.log(`loadScene ${scene} completed ${completedCount}, total ${totalCount}`);
            if (completedCount >= totalCount) {
                //进入场景
                cc.director.loadScene(scene, () => {
                    let sceneComp = cc.director.getScene().getComponentInChildren(SceneBase);
                    sceneComp.initialize(conf.data);
                });
            }
        });
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
