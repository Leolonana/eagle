import { BaseComponent } from "./BaseComponent";

export abstract class BaseModel {

    private _component: BaseComponent = null;
    private _data: any = null;

    constructor() {

    }

    public init(target: BaseComponent) {
        this._component = target;
        return this;
    }

    public getData(): any {
        return this._data;
    }

    public setData(data: any) {
        this._data = data;
        if (!!this._component) {
            this._component._dataChanged(this._data);
        }
    }

}