
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameBase/Protocol/Protocol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lQmFzZS9Qcm90b2NvbC9Qcm90b2NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWdFO0FBRWhFO0lBQThCLDRCQUFZO0lBRXRDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBR0Qsc0JBQWtCLG9CQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFHTSwrQkFBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRU0sNkJBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQXRCQSxBQXNCQyxDQXRCNkIsMkJBQVksR0FzQnpDO0FBdEJZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVByb3RvY29sIH0gZnJvbSBcIi4uLy4uL0ZyYW13b3JrL0Jhc2UvQmFzZVByb3RvY29sXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm90b2NvbCBleHRlbmRzIEJhc2VQcm90b2NvbCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFByb3RvY29sO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFByb3RvY29sIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSlcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFByb3RvY29sKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gICAgXG5cbiAgICBwdWJsaWMgb25HYW1lTG9hZGVkKCkge1xuICAgICAgICB0aGlzLm9wZW5Qcm90b2NvbChcImVhZ2xlOi8vZ2FtZUxvYWRlZFwiKVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkdhbWVFeGl0KCkge1xuICAgICAgICB0aGlzLm9wZW5Qcm90b2NvbChcImVhZ2xlOi8vZ2FtZUV4aXRcIilcbiAgICB9XG5cbn0iXX0=