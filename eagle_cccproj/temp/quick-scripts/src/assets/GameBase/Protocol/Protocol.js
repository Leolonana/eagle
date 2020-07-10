"use strict";
cc._RF.push(module, '4dc04tvXdtI16SNig2JbJAP', 'Protocol');
// GameBase/Protocol/Protocol.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protocol = void 0;
var BaseProtocol_1 = require("../../Framwork/Base/BaseProtocol");
var Protocol = /** @class */ (function (_super) {
    __extends(Protocol, _super);
    function Protocol() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Protocol, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new Protocol();
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Protocol.prototype.onGameLoaded = function () {
        this.openProtocol("eagle://gameLoaded");
    };
    Protocol.prototype.onGameExit = function () {
        this.openProtocol("eagle://gameExit");
    };
    return Protocol;
}(BaseProtocol_1.BaseProtocol));
exports.Protocol = Protocol;

cc._RF.pop();