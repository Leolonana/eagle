import { CallNative } from "../../Framwork/NativeBridge/CallNative";

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainScene2 extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
    }

    //点击返回
    tapBackHome() {
        cc.log("MainScene2 tapBackHome")
        CallNative.instance.callBackHome(2)

    }

    //点击播放
    tapPlay() {
        cc.log("MainScene2 tapPlay")

    }


    // update (dt) {}
}
