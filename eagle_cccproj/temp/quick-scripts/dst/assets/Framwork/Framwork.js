
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Framwork.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '701d1ixw4ZKObI/LP5CLfT2', 'Framwork');
// Framwork/Framwork.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Native_1 = require("./Base/Native");
var Framwork = /** @class */ (function () {
    function Framwork() {
        this._hasInit = false;
    }
    Framwork.prototype.init = function () {
        if (cc.sys.platform === cc.sys.ANDROID
            || cc.sys.platform === cc.sys.IPHONE
            || cc.sys.platform === cc.sys.IPAD) {
            //初始化原生接口
            Native_1.Native.instance;
        }
        else if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        }
    };
    return Framwork;
}());
exports.Framwork = Framwork;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9GcmFtd29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUF1QztBQUV2QztJQUdJO1FBSVEsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUZsQyxDQUFDO0lBS00sdUJBQUksR0FBWDtRQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPO2VBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTTtlQUNqQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNwQyxTQUFTO1lBQ1QsZUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNuQjthQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7U0FFaEQ7SUFDTCxDQUFDO0lBRUwsZUFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmUgfSBmcm9tIFwiLi9CYXNlL05hdGl2ZVwiO1xuXG5leHBvcnQgY2xhc3MgRnJhbXdvcmsge1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5BTkRST0lEXG4gICAgICAgICAgICB8fCBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEhPTkVcbiAgICAgICAgICAgIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLklQQUQpIHtcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW5Y6f55Sf5o6l5Y+jXG4gICAgICAgICAgICBOYXRpdmUuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG59Il19