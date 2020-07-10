// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { CallNative } from "../../Framwork/NativeBridge/CallNative";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log("ccc lifecycle onLoad");
    }

    start () {
        console.log("ccc lifecycle start");
        // CallNative.instance.helloNative()
    }

    //点击返回
    tapBackHome() {
        cc.log("tapBackHome")
        CallNative.instance.callBackHome(1)
    }

    //点击播放
    tapPlay() {
        cc.log("tapPlay")

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
