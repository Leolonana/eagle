import { BaseModel } from "./BaseModel";


const { ccclass, property } = cc._decorator;

@ccclass
export abstract class BaseComponent extends cc.Component {

    private _model: BaseModel = null

    onLoad() {
        super.onLoad()
    }

    _dataChanged(data: any) {
        
    }
}