
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Mvc/BaseModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9NdmMvQmFzZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFLSTtRQUhRLGVBQVUsR0FBa0IsSUFBSSxDQUFDO1FBQ2pDLFVBQUssR0FBUSxJQUFJLENBQUM7SUFJMUIsQ0FBQztJQUVNLHdCQUFJLEdBQVgsVUFBWSxNQUFxQjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sMkJBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sMkJBQU8sR0FBZCxVQUFlLElBQVM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJxQiw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTW9kZWwge1xuXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50OiBCYXNlQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIF9kYXRhOiBhbnkgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCh0YXJnZXQ6IEJhc2VDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50ID0gdGFyZ2V0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIGlmICghIXRoaXMuX2NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50Ll9kYXRhQ2hhbmdlZCh0aGlzLl9kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==