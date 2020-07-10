"use strict";
cc._RF.push(module, '22f5d5FiEtKeLNx7HoA2lCw', 'BaseModel');
// Framwork/Mvc/BaseModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
        this._component = null;
        this._data = null;
    }
    BaseModel.prototype.init = function (target) {
        this._component = target;
        return this;
    };
    BaseModel.prototype.getData = function () {
        return this._data;
    };
    BaseModel.prototype.setData = function (data) {
        this._data = data;
        if (!!this._component) {
            this._component._dataChanged(this._data);
        }
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;

cc._RF.pop();