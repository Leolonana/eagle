"use strict";
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