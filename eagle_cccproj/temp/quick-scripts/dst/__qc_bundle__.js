
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Framwork/Base/BaseProtocol');
require('./assets/Framwork/Base/IProtocol');
require('./assets/Framwork/Base/Native');
require('./assets/Framwork/Framwork');
require('./assets/Framwork/Mvc/BaseComponent');
require('./assets/Framwork/Mvc/BaseModel');
require('./assets/Framwork/NativeBridge/CallNative');
require('./assets/Framwork/Platform/IPlatform');
require('./assets/Framwork/Platform/PlatformAndroid');
require('./assets/Framwork/Utils/FileUtil');
require('./assets/Framwork/Utils/FitterHeightFirst');
require('./assets/Framwork/Utils/FitterWidthFirst');
require('./assets/Framwork/Utils/PlatformUtil');
require('./assets/GameBase/Protocol/Protocol');
require('./assets/Loading/Scripts/LoadingScene');
require('./assets/Main/Scripts/MainScene');
require('./assets/Main2/Scripts/MainScene2');
require('./assets/Writing/Script/FrameworkInterface');
require('./assets/Writing/Script/Practice');
require('./assets/Writing/Script/Writing');
require('./assets/Writing/Script/WritingChar');
require('./assets/Writing/Script/WritingDot');
require('./assets/Writing/Script/WritingRightStar');
require('./assets/Writing/Script/WritingSmallDot');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Platform/PlatformAndroid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cc83M4dHdGRIk45Nz9DUEV', 'PlatformAndroid');
// Framwork/Platform/PlatformAndroid.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TAG = "PlatformAndroid"; //日志标识
/**
 * 安卓平台
 * @author guob
 * @date 2020/06/08
 */
var PlatformAndroid = /** @class */ (function () {
    function PlatformAndroid() {
        this._platform = "android";
    }
    Object.defineProperty(PlatformAndroid, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new PlatformAndroid();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    PlatformAndroid.support = function () {
        return cc.sys.platform === cc.sys.ANDROID;
    };
    /** 获取当前平台标识 */
    PlatformAndroid.prototype.platform = function () {
        return this._platform;
    };
    PlatformAndroid.prototype.callNativeSync = function (params) {
    };
    /** 加载场景 */
    PlatformAndroid.prototype.loadScene = function (params) {
        console.log("[" + TAG + "], loadScene params " + params);
        console.log(typeof (params));
        //延时模拟
        setTimeout(function () {
            cc.director.loadScene("Main", function () {
                console.log("Main is loaded!");
            });
        }, 2);
    };
    /** 加载场景成功回调 */
    PlatformAndroid.prototype.onSceneLoaded = function () {
        // CallNative.instance.callStaticFunc
    };
    /** 退出场景 */
    PlatformAndroid.prototype.exitScene = function () {
    };
    /** 退出场景成功回调 */
    PlatformAndroid.prototype.onSceneExit = function () {
    };
    PlatformAndroid._instance = null;
    return PlatformAndroid;
}());
exports.PlatformAndroid = PlatformAndroid;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9QbGF0Zm9ybS9QbGF0Zm9ybUFuZHJvaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxDQUFFLE1BQU07QUFFdEM7Ozs7R0FJRztBQUNIO0lBV0k7UUFUaUIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQVN2QixDQUFDO0lBTmpCLHNCQUFrQiwyQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBSWEsdUJBQU8sR0FBckI7UUFDSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzlDLENBQUM7SUFFRCxlQUFlO0lBQ2Ysa0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU8sd0NBQWMsR0FBdEIsVUFBdUIsTUFFdEI7SUFFRCxDQUFDO0lBRUQsV0FBVztJQUNYLG1DQUFTLEdBQVQsVUFBVSxNQUFjO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBSSxHQUFHLDRCQUF1QixNQUFRLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU07UUFDTixVQUFVLENBQUM7WUFDUCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxlQUFlO0lBQ2YsdUNBQWEsR0FBYjtRQUNJLHFDQUFxQztJQUN6QyxDQUFDO0lBRUQsV0FBVztJQUNYLG1DQUFTLEdBQVQ7SUFFQSxDQUFDO0lBRUQsZUFBZTtJQUNmLHFDQUFXLEdBQVg7SUFFQSxDQUFDO0lBakRjLHlCQUFTLEdBQW9CLElBQUksQ0FBQztJQW1EckQsc0JBQUM7Q0F2REQsQUF1REMsSUFBQTtBQXZEWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQbGF0Zm9ybSB9IGZyb20gXCIuL0lQbGF0Zm9ybVwiO1xuXG5jb25zdCBUQUcgPSBcIlBsYXRmb3JtQW5kcm9pZFwiOyAgLy/ml6Xlv5fmoIfor4ZcblxuLyoqXG4gKiDlronljZPlubPlj7BcbiAqIEBhdXRob3IgZ3VvYlxuICogQGRhdGUgMjAyMC8wNi8wOFxuICovXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1BbmRyb2lkIGltcGxlbWVudHMgSVBsYXRmb3JtIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3BsYXRmb3JtID0gXCJhbmRyb2lkXCI7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFBsYXRmb3JtQW5kcm9pZCA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogUGxhdGZvcm1BbmRyb2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSlcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFBsYXRmb3JtQW5kcm9pZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc3VwcG9ydCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkFORFJPSUQ7XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPluW9k+WJjeW5s+WPsOagh+ivhiAqL1xuICAgIHBsYXRmb3JtKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF0Zm9ybTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGxOYXRpdmVTeW5jKHBhcmFtczoge1xuXG4gICAgfSkge1xuXG4gICAgfVxuXG4gICAgLyoqIOWKoOi9veWcuuaZryAqL1xuICAgIGxvYWRTY2VuZShwYXJhbXM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhgWyR7VEFHfV0sIGxvYWRTY2VuZSBwYXJhbXMgJHtwYXJhbXN9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiAocGFyYW1zKSk7XG4gICAgICAgIC8v5bu25pe25qih5oufXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYWluIGlzIGxvYWRlZCFcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMik7XG4gICAgfVxuXG4gICAgLyoqIOWKoOi9veWcuuaZr+aIkOWKn+WbnuiwgyAqL1xuICAgIG9uU2NlbmVMb2FkZWQoKSB7XG4gICAgICAgIC8vIENhbGxOYXRpdmUuaW5zdGFuY2UuY2FsbFN0YXRpY0Z1bmNcbiAgICB9XG5cbiAgICAvKiog6YCA5Ye65Zy65pmvICovXG4gICAgZXhpdFNjZW5lKCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgLyoqIOmAgOWHuuWcuuaZr+aIkOWKn+WbnuiwgyAqL1xuICAgIG9uU2NlbmVFeGl0KCk6IHZvaWQge1xuXG4gICAgfVxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/Scripts/LoadingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3febLvGO5JI4JB7htXqbYn', 'LoadingScene');
// Loading/Scripts/LoadingScene.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CallNative_1 = require("../../Framwork/NativeBridge/CallNative");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    LoadingScene.prototype.onLoad = function () {
        cc.log("ccc lifecycle onLoad");
    };
    LoadingScene.prototype.start = function () {
        cc.log("ccc lifecycle start");
        var sceneId = CallNative_1.CallNative.instance.callSceneData();
        var sceneName;
        if (sceneId == 1) {
            sceneName = "Main";
        }
        else {
            sceneName = "Main2";
        }
        //自动跳转到对应场景
        this.scheduleOnce(function () {
            cc.log("turn to ", sceneName);
            cc.director.loadScene(sceneName);
        }, 1);
    };
    // update (dt) {}
    LoadingScene.prototype.onDisable = function () {
        console.log("ccc lifecycle onDisable");
    };
    LoadingScene.prototype.onEnable = function () {
        console.log("ccc lifecycle onEnable");
    };
    LoadingScene.prototype.onDestroy = function () {
        console.log("ccc lifecycle onDestroy");
    };
    LoadingScene = __decorate([
        ccclass
    ], LoadingScene);
    return LoadingScene;
}(cc.Component));
exports.default = LoadingScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Mb2FkaW5nL1NjcmlwdHMvTG9hZGluZ1NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFFQUFvRTtBQUU5RCxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREOztJQXdDQSxDQUFDO0lBdENHLHdCQUF3QjtJQUV4Qiw2QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlCLElBQUksT0FBTyxHQUFHLHVCQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ2pELElBQUksU0FBUyxDQUFDO1FBQ2QsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2QsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUN0QjthQUFNO1lBQ0gsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUN2QjtRQUVELFdBQVc7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDcEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELGlCQUFpQjtJQUVqQixnQ0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBRTNDLENBQUM7SUF0Q2dCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F3Q2hDO0lBQUQsbUJBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q3lDLEVBQUUsQ0FBQyxTQUFTLEdBd0NyRDtrQkF4Q29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQ2FsbE5hdGl2ZSB9IGZyb20gXCIuLi8uLi9GcmFtd29yay9OYXRpdmVCcmlkZ2UvQ2FsbE5hdGl2ZVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmxvZyhcImNjYyBsaWZlY3ljbGUgb25Mb2FkXCIpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MubG9nKFwiY2NjIGxpZmVjeWNsZSBzdGFydFwiKTtcbiAgICAgICAgbGV0IHNjZW5lSWQgPSBDYWxsTmF0aXZlLmluc3RhbmNlLmNhbGxTY2VuZURhdGEoKVxuICAgICAgICBsZXQgc2NlbmVOYW1lO1xuICAgICAgICBpZiAoc2NlbmVJZCA9PSAxKSB7XG4gICAgICAgICAgICBzY2VuZU5hbWUgPSBcIk1haW5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjZW5lTmFtZSA9IFwiTWFpbjJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v6Ieq5Yqo6Lez6L2s5Yiw5a+55bqU5Zy65pmvXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICBjYy5sb2coXCJ0dXJuIHRvIFwiLCBzY2VuZU5hbWUpXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lKVxuICAgICAgICB9LCAxKVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2NjIGxpZmVjeWNsZSBvbkRpc2FibGVcIik7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2NjIGxpZmVjeWNsZSBvbkVuYWJsZVwiKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2NjIGxpZmVjeWNsZSBvbkRlc3Ryb3lcIik7XG5cbiAgICB9XG4gICAgXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Main/Scripts/MainScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00eebcGrjhKGJ3EcsMgH7gl', 'MainScene');
// Main/Scripts/MainScene.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CallNative_1 = require("../../Framwork/NativeBridge/CallNative");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    MainScene.prototype.onLoad = function () {
        console.log("ccc lifecycle onLoad");
    };
    MainScene.prototype.start = function () {
        console.log("ccc lifecycle start");
        // CallNative.instance.helloNative()
    };
    //点击返回
    MainScene.prototype.tapBackHome = function () {
        cc.log("tapBackHome");
        CallNative_1.CallNative.instance.callBackHome(1);
    };
    //点击播放
    MainScene.prototype.tapPlay = function () {
        cc.log("tapPlay");
    };
    // update (dt) {}
    MainScene.prototype.onDisable = function () {
        console.log("ccc lifecycle onDisable");
    };
    MainScene.prototype.onEnable = function () {
        console.log("ccc lifecycle onEnable");
    };
    MainScene.prototype.onDestroy = function () {
        console.log("ccc lifecycle onDestroy");
    };
    MainScene = __decorate([
        ccclass
    ], MainScene);
    return MainScene;
}(cc.Component));
exports.default = MainScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYWluL1NjcmlwdHMvTWFpblNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFFQUFvRTtBQUU5RCxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EOztJQXdDQSxDQUFDO0lBdENHLHdCQUF3QjtJQUV4QiwwQkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLG9DQUFvQztJQUN4QyxDQUFDO0lBRUQsTUFBTTtJQUNOLCtCQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3JCLHVCQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsTUFBTTtJQUNOLDJCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXJCLENBQUM7SUFFRCxpQkFBaUI7SUFFakIsNkJBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUUzQyxDQUFDO0lBdENnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBd0M3QjtJQUFELGdCQUFDO0NBeENELEFBd0NDLENBeENzQyxFQUFFLENBQUMsU0FBUyxHQXdDbEQ7a0JBeENvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IENhbGxOYXRpdmUgfSBmcm9tIFwiLi4vLi4vRnJhbXdvcmsvTmF0aXZlQnJpZGdlL0NhbGxOYXRpdmVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNjYyBsaWZlY3ljbGUgb25Mb2FkXCIpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjY2MgbGlmZWN5Y2xlIHN0YXJ0XCIpO1xuICAgICAgICAvLyBDYWxsTmF0aXZlLmluc3RhbmNlLmhlbGxvTmF0aXZlKClcbiAgICB9XG5cbiAgICAvL+eCueWHu+i/lOWbnlxuICAgIHRhcEJhY2tIb21lKCkge1xuICAgICAgICBjYy5sb2coXCJ0YXBCYWNrSG9tZVwiKVxuICAgICAgICBDYWxsTmF0aXZlLmluc3RhbmNlLmNhbGxCYWNrSG9tZSgxKVxuICAgIH1cblxuICAgIC8v54K55Ye75pKt5pS+XG4gICAgdGFwUGxheSgpIHtcbiAgICAgICAgY2MubG9nKFwidGFwUGxheVwiKVxuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjY2MgbGlmZWN5Y2xlIG9uRGlzYWJsZVwiKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjY2MgbGlmZWN5Y2xlIG9uRW5hYmxlXCIpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjY2MgbGlmZWN5Y2xlIG9uRGVzdHJveVwiKTtcblxuICAgIH1cbiAgICBcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Main2/Scripts/MainScene2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4916dLxnTBP+Y83zhE3sB+P', 'MainScene2');
// Main2/Scripts/MainScene2.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CallNative_1 = require("../../Framwork/NativeBridge/CallNative");
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainScene2 = /** @class */ (function (_super) {
    __extends(MainScene2, _super);
    function MainScene2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MainScene2.prototype.start = function () {
    };
    //点击返回
    MainScene2.prototype.tapBackHome = function () {
        cc.log("MainScene2 tapBackHome");
        CallNative_1.CallNative.instance.callBackHome(2);
    };
    //点击播放
    MainScene2.prototype.tapPlay = function () {
        cc.log("MainScene2 tapPlay");
    };
    MainScene2 = __decorate([
        ccclass
    ], MainScene2);
    return MainScene2;
}(cc.Component));
exports.default = MainScene2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYWluMi9TY3JpcHRzL01haW5TY2VuZTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBRXBFLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGO0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBeUJBLENBQUM7SUF2Qkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELE1BQU07SUFDTixnQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQ2hDLHVCQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUV2QyxDQUFDO0lBRUQsTUFBTTtJQUNOLDRCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFFaEMsQ0FBQztJQXJCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXlCOUI7SUFBRCxpQkFBQztDQXpCRCxBQXlCQyxDQXpCdUMsRUFBRSxDQUFDLFNBQVMsR0F5Qm5EO2tCQXpCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGxOYXRpdmUgfSBmcm9tIFwiLi4vLi4vRnJhbXdvcmsvTmF0aXZlQnJpZGdlL0NhbGxOYXRpdmVcIjtcblxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNjZW5lMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvL+eCueWHu+i/lOWbnlxuICAgIHRhcEJhY2tIb21lKCkge1xuICAgICAgICBjYy5sb2coXCJNYWluU2NlbmUyIHRhcEJhY2tIb21lXCIpXG4gICAgICAgIENhbGxOYXRpdmUuaW5zdGFuY2UuY2FsbEJhY2tIb21lKDIpXG5cbiAgICB9XG5cbiAgICAvL+eCueWHu+aSreaUvlxuICAgIHRhcFBsYXkoKSB7XG4gICAgICAgIGNjLmxvZyhcIk1haW5TY2VuZTIgdGFwUGxheVwiKVxuXG4gICAgfVxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/WritingChar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20065i2yvVCPpPZieUAZivI', 'WritingChar');
// Writing/Script/WritingChar.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WritingDot_1 = require("./WritingDot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FILL_DURATION = 0.5;
/**
 * 书写字符
 *
 * 注：配置字符时，每个线条的最后一点，必须是引导节点
 */
var WritingChar = /** @class */ (function (_super) {
    __extends(WritingChar, _super);
    function WritingChar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.mask = null;
        _this.drawPanel = null;
        _this.filledChar = null;
        _this.linesNode = null;
        _this.lines = null;
        return _this;
    }
    WritingChar.prototype.onLoad = function () {
        this.mask.spriteFrame = this.image.spriteFrame;
    };
    /**
     * 获取该字符所有笔画
     */
    WritingChar.prototype.getLines = function () {
        if (this.lines === null) {
            this.lines = this.linesNode.children.map(function (line) {
                return line.children.map(function (dotNode) {
                    var dot = dotNode.getComponent(WritingDot_1.default);
                    dot.reset();
                    return dot;
                });
            });
        }
        return this.lines;
    };
    /**
     * 重置所有点状态
     */
    WritingChar.prototype.reset = function () {
        this.lines.forEach(function (line) {
            line.forEach(function (dot) {
                dot.reset();
            });
        });
    };
    /**
     * 填充，渐显下面的图层，渐隐上面的画布
     */
    WritingChar.prototype.fill = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.drawPanel.node.runAction(cc.fadeTo(FILL_DURATION, 0));
            _this.filledChar.opacity = 0;
            _this.filledChar.active = true;
            _this.filledChar.runAction(cc.sequence(cc.fadeTo(FILL_DURATION, 255), cc.callFunc(resolve)));
        });
    };
    /**
     * 显示画板
     */
    WritingChar.prototype.showDrawPanel = function () {
        this.mask.node.active = true;
    };
    __decorate([
        property(cc.Sprite)
    ], WritingChar.prototype, "image", void 0);
    __decorate([
        property(cc.Mask)
    ], WritingChar.prototype, "mask", void 0);
    __decorate([
        property(cc.Graphics)
    ], WritingChar.prototype, "drawPanel", void 0);
    __decorate([
        property(cc.Node)
    ], WritingChar.prototype, "filledChar", void 0);
    __decorate([
        property(cc.Node)
    ], WritingChar.prototype, "linesNode", void 0);
    WritingChar = __decorate([
        ccclass
    ], WritingChar);
    return WritingChar;
}(cc.Component));
exports.default = WritingChar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9Xcml0aW5nQ2hhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFaEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QyxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFFMUI7Ozs7R0FJRztBQUVIO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBcUVDO1FBbEVHLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBbUIsSUFBSSxDQUFDOztJQW9EakMsQ0FBQztJQWxERyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDbkQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksOEJBQVEsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO2dCQUMxQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTztvQkFDN0IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7b0JBQzdDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDWixPQUFPLEdBQUcsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMkJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDYixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNJLDBCQUFJLEdBQVg7UUFBQSxpQkFPQztRQU5HLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3ZCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNJLG1DQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBakVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2tEQUNRO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUTtJQWRULFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FvRS9CO0lBQUQsa0JBQUM7Q0FwRUQsQUFvRUMsQ0FwRXdDLEVBQUUsQ0FBQyxTQUFTLEdBb0VwRDtrQkFwRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3JpdGluZ0RvdCBmcm9tICcuL1dyaXRpbmdEb3QnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCBGSUxMX0RVUkFUSU9OID0gMC41O1xuXG4vKipcbiAqIOS5puWGmeWtl+esplxuICogXG4gKiDms6jvvJrphY3nva7lrZfnrKbml7bvvIzmr4/kuKrnur/mnaHnmoTmnIDlkI7kuIDngrnvvIzlv4XpobvmmK/lvJXlr7zoioLngrlcbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyaXRpbmdDaGFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGltYWdlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk1hc2spXG4gICAgbWFzazogY2MuTWFzayA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXG4gICAgZHJhd1BhbmVsOiBjYy5HcmFwaGljcyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmaWxsZWRDaGFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmVzTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBsaW5lczogV3JpdGluZ0RvdFtdW10gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm1hc2suc3ByaXRlRnJhbWUgPSB0aGlzLmltYWdlLnNwcml0ZUZyYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluivpeWtl+espuaJgOacieeslOeUu1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMaW5lcygpIHtcbiAgICAgICAgaWYgKHRoaXMubGluZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGluZXMgPSB0aGlzLmxpbmVzTm9kZS5jaGlsZHJlbi5tYXAoKGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZS5jaGlsZHJlbi5tYXAoKGRvdE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG90ID0gZG90Tm9kZS5nZXRDb21wb25lbnQoV3JpdGluZ0RvdCk7XG4gICAgICAgICAgICAgICAgICAgIGRvdC5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG90O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5saW5lcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43nva7miYDmnInngrnnirbmgIFcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgbGluZS5mb3JFYWNoKChkb3QpID0+IHtcbiAgICAgICAgICAgICAgICBkb3QucmVzZXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDloavlhYXvvIzmuJDmmL7kuIvpnaLnmoTlm77lsYLvvIzmuJDpmpDkuIrpnaLnmoTnlLvluINcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsbCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYXdQYW5lbC5ub2RlLnJ1bkFjdGlvbihjYy5mYWRlVG8oRklMTF9EVVJBVElPTiwgMCkpO1xuICAgICAgICAgICAgdGhpcy5maWxsZWRDaGFyLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5maWxsZWRDaGFyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpbGxlZENoYXIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVUbyhGSUxMX0RVUkFUSU9OLCAyNTUpLCBjYy5jYWxsRnVuYyhyZXNvbHZlKSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmL7npLrnlLvmnb9cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd0RyYXdQYW5lbCgpIHtcbiAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/NativeBridge/CallNative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d54cDZ01NFA7rUCgfuMw/6', 'CallNative');
// Framwork/NativeBridge/CallNative.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallNative = void 0;
var CallNative = /** @class */ (function () {
    function CallNative() {
        if (!jsb || !jsb.reflection) {
            console.error("jsb or reflection is undefined!");
        }
    }
    Object.defineProperty(CallNative, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new CallNative();
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    CallNative.prototype.callBackHome = function (sceneId) {
        jsb.reflection.callStaticMethod("com/eagle/video/Hello", "gameBack", "(I)V", sceneId);
    };
    CallNative.prototype.callSceneData = function () {
        var sceneId = jsb.reflection.callStaticMethod("com/eagle/video/Hello", "sceneData", "(V)I");
        console.log("[callSceneData] return sceneId = ", sceneId);
        return sceneId || 1;
    };
    CallNative.prototype.callVoid = function () {
    };
    CallNative.prototype.helloNative = function () {
        var ret = jsb.reflection.callStaticMethod("com/eagle/video/Hello", "helloNativeI", "(II)I", 1, 1);
        console.log("called helloNativeI and ret from native ", ret);
        jsb.reflection.callStaticMethod("com/eagle/video/Hello", "helloNativeS", "(Ljava/lang/String;)V", "hello native, i'm js");
        var res = jsb.reflection.callStaticMethod("com/eagle/video/DataReflection", "getPackageData", "()Ljava/lang/String;");
        console.log(res);
        if (res) {
            try {
                var json = JSON.parse(res);
                if (json.launchSceneID == 1) {
                    cc.director.loadScene("Main1");
                }
                else {
                    cc.director.loadScene("Main2");
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    };
    /**
     * 调用原生静态方法
     * @param className
     * @param method
     * @param params @Array<any>
     */
    CallNative.prototype.callStaticFunc = function (className, method, params) {
        if (!className || !method || !params || params.length) {
            console.error("callStaticFunc params is defenced!");
            return;
        }
        jsb.reflection.callStaticMethod(className, method, "");
    };
    CallNative.OpenScene = "Main2";
    CallNative._instance = null;
    return CallNative;
}());
exports.CallNative = CallNative;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9OYXRpdmVCcmlkZ2UvQ2FsbE5hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQVdJO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1NBQ25EO0lBQ0wsQ0FBQztJQVZELHNCQUFrQixzQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUE7WUFDckMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBUU0saUNBQVksR0FBbkIsVUFBb0IsT0FBZTtRQUMvQixHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVNLGtDQUFhLEdBQXBCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUN6RCxPQUFPLE9BQU8sSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUdNLDZCQUFRLEdBQWY7SUFFQSxDQUFDO0lBRU0sZ0NBQVcsR0FBbEI7UUFDSSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFN0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUUxSCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDdEgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUk7Z0JBQ0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtvQkFDekIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQzthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksbUNBQWMsR0FBckIsVUFBc0IsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNO1FBQzNDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7WUFDbkQsT0FBTTtTQUNUO1FBRUQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFqRWEsb0JBQVMsR0FBRyxPQUFPLENBQUE7SUFFbEIsb0JBQVMsR0FBZSxJQUFJLENBQUM7SUFnRWhELGlCQUFDO0NBcEVELEFBb0VDLElBQUE7QUFwRVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBDYWxsTmF0aXZlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgT3BlblNjZW5lID0gXCJNYWluMlwiXG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhbGxOYXRpdmUgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IENhbGxOYXRpdmUge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKVxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ2FsbE5hdGl2ZSgpXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIWpzYiB8fCAhanNiLnJlZmxlY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJqc2Igb3IgcmVmbGVjdGlvbiBpcyB1bmRlZmluZWQhXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsbEJhY2tIb21lKHNjZW5lSWQ6IG51bWJlcikge1xuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL2VhZ2xlL3ZpZGVvL0hlbGxvXCIsIFwiZ2FtZUJhY2tcIiwgXCIoSSlWXCIsIHNjZW5lSWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxsU2NlbmVEYXRhKCkge1xuICAgICAgICBsZXQgc2NlbmVJZCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vZWFnbGUvdmlkZW8vSGVsbG9cIiwgXCJzY2VuZURhdGFcIiwgXCIoVilJXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltjYWxsU2NlbmVEYXRhXSByZXR1cm4gc2NlbmVJZCA9IFwiLCBzY2VuZUlkKVxuICAgICAgICByZXR1cm4gc2NlbmVJZCB8fCAxXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgY2FsbFZvaWQoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBoZWxsb05hdGl2ZSgpIHtcbiAgICAgICAgbGV0IHJldCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vZWFnbGUvdmlkZW8vSGVsbG9cIiwgXCJoZWxsb05hdGl2ZUlcIiwgXCIoSUkpSVwiLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWQgaGVsbG9OYXRpdmVJIGFuZCByZXQgZnJvbSBuYXRpdmUgXCIsIHJldCk7XG5cbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcImNvbS9lYWdsZS92aWRlby9IZWxsb1wiLCBcImhlbGxvTmF0aXZlU1wiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBcImhlbGxvIG5hdGl2ZSwgaSdtIGpzXCIpO1xuXG4gICAgICAgIGxldCByZXMgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL2VhZ2xlL3ZpZGVvL0RhdGFSZWZsZWN0aW9uXCIsIFwiZ2V0UGFja2FnZURhdGFcIiwgXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAgICAgICAgICAgICBpZiAoanNvbi5sYXVuY2hTY2VuZUlEID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpbjFcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpbjJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiwg+eUqOWOn+eUn+mdmeaAgeaWueazlVxuICAgICAqIEBwYXJhbSBjbGFzc05hbWUgXG4gICAgICogQHBhcmFtIG1ldGhvZCBcbiAgICAgKiBAcGFyYW0gcGFyYW1zIEBBcnJheTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGNhbGxTdGF0aWNGdW5jKGNsYXNzTmFtZSwgbWV0aG9kLCBwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFjbGFzc05hbWUgfHwgIW1ldGhvZCB8fCAhcGFyYW1zIHx8IHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYWxsU3RhdGljRnVuYyBwYXJhbXMgaXMgZGVmZW5jZWQhXCIpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NOYW1lLCBtZXRob2QsIFwiXCIpXG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Utils/FitterHeightFirst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60192oBLuxI5qq5hnvynaFH', 'FitterHeightFirst');
// Framwork/Utils/FitterHeightFirst.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
/**
 * 优先高度适配组件，当屏幕比设计分辨率更高时，适配宽，否则适配高。
 * 注意：如果有需要在代码中获取组件的位置的操作，不要在onLoad里去做，因为修改了适配方式后会重新布局，onLoad里取到的会是旧的。
 */
var FitterHeightFirst = /** @class */ (function (_super) {
    __extends(FitterHeightFirst, _super);
    function FitterHeightFirst() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.sceneName = null;
        // 是否按高适配，防止设置后导致canvas尺寸改变而重复设置
        _this.isHeightFirst = null;
        return _this;
    }
    FitterHeightFirst.prototype.onLoad = function () {
        this.sceneName = cc.director.getScene().name;
        console.debug("\u573A\u666F " + this.sceneName + " FitterHeightFirst\u7EC4\u4EF6\u52A0\u8F7D");
        var canvasNode = cc.find('Canvas');
        this.canvas = canvasNode.getComponent(cc.Canvas);
        // 更新配置
        this.updateFit();
        // 监听窗口改变，重置
        canvasNode.on(cc.Node.EventType.SIZE_CHANGED, this.resetFit, this);
    };
    /**
     * 更新fit配置
     */
    FitterHeightFirst.prototype.updateFit = function () {
        var canvas = this.canvas;
        var design = canvas.designResolution;
        var device = cc.view.getFrameSize();
        // 当相差超过0.01时，才算更高，这样差别不是很大的屏幕，仍可以按高走
        if (device.height / device.width - design.height / design.width > 0.01) {
            var needToSet = this.isHeightFirst === null || this.isHeightFirst;
            this.isHeightFirst = false;
            // 针对首次设置，若默认配置一样，也不用更新
            if (needToSet && (canvas.fitWidth !== true || canvas.fitHeight !== false)) {
                canvas.fitWidth = true;
                canvas.fitHeight = false;
                console.debug("\u573A\u666F " + this.sceneName + " \u6BD4\u8BBE\u8BA1\u66F4\u9AD8\uFF0C\u6309\u5BBD\u9002\u914D");
            }
        }
        else {
            var needToSet = this.isHeightFirst === null || !this.isHeightFirst;
            this.isHeightFirst = true;
            // 针对首次设置，若默认配置一样，也不用更新
            if (needToSet && (canvas.fitWidth !== false || canvas.fitHeight !== true)) {
                canvas.fitWidth = false;
                canvas.fitHeight = true;
                console.debug("\u573A\u666F " + this.sceneName + " \u6309\u9AD8\u9002\u914D");
            }
        }
    };
    FitterHeightFirst.prototype.resetFit = function () {
        console.debug("\u573A\u666F " + this.sceneName + " \u91CD\u65B0\u8BA1\u7B97fit");
        this.updateFit();
    };
    FitterHeightFirst = __decorate([
        ccclass
    ], FitterHeightFirst);
    return FitterHeightFirst;
}(cc.Component));
exports.default = FitterHeightFirst;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9VdGlscy9GaXR0ZXJIZWlnaHRGaXJzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLCtCQUFPLENBQW1CO0FBRWxDOzs7R0FHRztBQUVIO0lBQStDLHFDQUFZO0lBRDNEO1FBQUEscUVBeURDO1FBdkRXLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFXLElBQUksQ0FBQztRQUVqQyxnQ0FBZ0M7UUFDeEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBa0QxQyxDQUFDO0lBaERHLGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQU0sSUFBSSxDQUFDLFNBQVMsK0NBQXdCLENBQUMsQ0FBQztRQUU1RCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakQsT0FBTztRQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixZQUFZO1FBQ1osVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7O09BRUc7SUFDSyxxQ0FBUyxHQUFqQjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMscUNBQXFDO1FBQ3JDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUU7WUFDcEUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNwRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUUzQix1QkFBdUI7WUFDdkIsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUN2RSxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQU0sSUFBSSxDQUFDLFNBQVMsa0VBQWEsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0o7YUFBTTtZQUNILElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNyRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUUxQix1QkFBdUI7WUFDdkIsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUN2RSxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQU0sSUFBSSxDQUFDLFNBQVMsOEJBQU8sQ0FBQyxDQUFDO2FBQzlDO1NBQ0o7SUFDTCxDQUFDO0lBRU8sb0NBQVEsR0FBaEI7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFNLElBQUksQ0FBQyxTQUFTLGlDQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQXZEZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0F3RHJDO0lBQUQsd0JBQUM7Q0F4REQsQUF3REMsQ0F4RDhDLEVBQUUsQ0FBQyxTQUFTLEdBd0QxRDtrQkF4RG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiDkvJjlhYjpq5jluqbpgILphY3nu4Tku7bvvIzlvZPlsY/luZXmr5Torr7orqHliIbovqjnjofmm7Tpq5jml7bvvIzpgILphY3lrr3vvIzlkKbliJnpgILphY3pq5jjgIJcbiAqIOazqOaEj++8muWmguaenOaciemcgOimgeWcqOS7o+eggeS4reiOt+WPlue7hOS7tueahOS9jee9rueahOaTjeS9nO+8jOS4jeimgeWcqG9uTG9hZOmHjOWOu+WBmu+8jOWboOS4uuS/ruaUueS6humAgumFjeaWueW8j+WQjuS8mumHjeaWsOW4g+WxgO+8jG9uTG9hZOmHjOWPluWIsOeahOS8muaYr+aXp+eahOOAglxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml0dGVySGVpZ2h0Rmlyc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgY2FudmFzOiBjYy5DYW52YXMgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzY2VuZU5hbWU6IHN0cmluZyA9IG51bGw7XG5cbiAgICAvLyDmmK/lkKbmjInpq5jpgILphY3vvIzpmLLmraLorr7nva7lkI7lr7zoh7RjYW52YXPlsLrlr7jmlLnlj5jogIzph43lpI3orr7nva5cbiAgICBwcml2YXRlIGlzSGVpZ2h0Rmlyc3Q6IGJvb2xlYW4gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNjZW5lTmFtZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcbiAgICAgICAgY29uc29sZS5kZWJ1Zyhg5Zy65pmvICR7dGhpcy5zY2VuZU5hbWV9IEZpdHRlckhlaWdodEZpcnN057uE5Lu25Yqg6L29YCk7XG5cbiAgICAgICAgY29uc3QgY2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc05vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG5cbiAgICAgICAgLy8g5pu05paw6YWN572uXG4gICAgICAgIHRoaXMudXBkYXRlRml0KCk7XG4gICAgICAgIC8vIOebkeWQrOeql+WPo+aUueWPmO+8jOmHjee9rlxuICAgICAgICBjYW52YXNOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5yZXNldEZpdCwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05pawZml06YWN572uXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVGaXQoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgICBjb25zdCBkZXNpZ24gPSBjYW52YXMuZGVzaWduUmVzb2x1dGlvbjtcbiAgICAgICAgY29uc3QgZGV2aWNlID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgLy8g5b2T55u45beu6LaF6L+HMC4wMeaXtu+8jOaJjeeul+abtOmrmO+8jOi/meagt+W3ruWIq+S4jeaYr+W+iOWkp+eahOWxj+W5le+8jOS7jeWPr+S7peaMiemrmOi1sFxuICAgICAgICBpZiAoZGV2aWNlLmhlaWdodCAvIGRldmljZS53aWR0aCAtIGRlc2lnbi5oZWlnaHQgLyBkZXNpZ24ud2lkdGggPiAwLjAxKSB7XG4gICAgICAgICAgICBjb25zdCBuZWVkVG9TZXQgPSB0aGlzLmlzSGVpZ2h0Rmlyc3QgPT09IG51bGwgfHwgdGhpcy5pc0hlaWdodEZpcnN0O1xuICAgICAgICAgICAgdGhpcy5pc0hlaWdodEZpcnN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIOmSiOWvuemmluasoeiuvue9ru+8jOiLpem7mOiupOmFjee9ruS4gOagt++8jOS5n+S4jeeUqOabtOaWsFxuICAgICAgICAgICAgaWYgKG5lZWRUb1NldCAmJiAoY2FudmFzLmZpdFdpZHRoICE9PSB0cnVlIHx8IGNhbnZhcy5maXRIZWlnaHQgIT09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYOWcuuaZryAke3RoaXMuc2NlbmVOYW1lfSDmr5Torr7orqHmm7Tpq5jvvIzmjInlrr3pgILphY1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRUb1NldCA9IHRoaXMuaXNIZWlnaHRGaXJzdCA9PT0gbnVsbCB8fCAhdGhpcy5pc0hlaWdodEZpcnN0O1xuICAgICAgICAgICAgdGhpcy5pc0hlaWdodEZpcnN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8g6ZKI5a+56aaW5qyh6K6+572u77yM6Iul6buY6K6k6YWN572u5LiA5qC377yM5Lmf5LiN55So5pu05pawXG4gICAgICAgICAgICBpZiAobmVlZFRvU2V0ICYmIChjYW52YXMuZml0V2lkdGggIT09IGZhbHNlIHx8IGNhbnZhcy5maXRIZWlnaHQgIT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyhg5Zy65pmvICR7dGhpcy5zY2VuZU5hbWV9IOaMiemrmOmAgumFjWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEZpdCgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1Zyhg5Zy65pmvICR7dGhpcy5zY2VuZU5hbWV9IOmHjeaWsOiuoeeul2ZpdGApO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpdCgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Base/Native.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7273c5A45lDRqFMQJaNlMWJ', 'Native');
// Framwork/Base/Native.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Native = void 0;
var PlatformUtil_1 = require("../Utils/PlatformUtil");
var TAG = "Native";
/**
 * 原生接口
 * @author guob
 * @date 2020/07/01
 */
var Native = /** @class */ (function () {
    function Native() {
        this._callNativeStaticMethod = jsb.reflection.callStaticMethod;
    }
    Object.defineProperty(Native, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new Native();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 调用原生方法
     * @param params
     */
    Native.prototype.call = function (params) {
        console.debug("[" + TAG + "] _callNative class " + params.class + ", method " + params.method + ", sign " + params.sign + ", paramaters " + params.args + ".");
        if (!params || !params.class || !params.method) {
            console.error("[" + TAG + "] _callNative illegal paramaters!");
            return;
        }
        try {
            if (PlatformUtil_1.PlatformUtil.isAndroid()) { // 安卓
                var sign = this._getSign(params.sign);
                if (this._checkParam(params.args, params.sign)) {
                    var evalString_1 = "this._callNativeStaticMethod(params.package+params.class,params.method,sign,";
                    params.args.forEach(function (param, index) {
                        evalString_1 += param;
                        if (index >= params.args.length - 1) {
                            evalString_1 += ")";
                        }
                    });
                    eval(evalString_1);
                }
                else {
                    return this._callNativeStaticMethod(params.class, params.method, sign);
                }
            }
            else if (PlatformUtil_1.PlatformUtil.isIOS()) { // IOS
                if (this._checkParam(params.args, params.sign)) {
                    var evalString_2 = "this._callNativeStaticMethod(params.class,params.method,";
                    params.args.forEach(function (param, index) {
                        evalString_2 += param;
                        if (index >= params.args.length - 1) {
                            evalString_2 += ")";
                        }
                    });
                    eval(evalString_2);
                }
                else {
                    return this._callNativeStaticMethod(params.class, params.method);
                }
            }
            else { // 其他
                var sign = this._getSign(params.sign);
                if (this._checkParam(params.args, params.sign)) {
                    var evalString_3 = "this._callNativeStaticMethod(params.package+params.class,params.method,sign,";
                    params.args.forEach(function (param, index) {
                        evalString_3 += param;
                        if (index >= params.args.length - 1) {
                            evalString_3 += ")";
                        }
                    });
                    console.log(evalString_3);
                    eval(evalString_3);
                }
                else {
                    return this._callNativeStaticMethod(params.class, params.method, sign);
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * 参数签名
     * @param sign 最后一个字符代表返回值，其余为参数
     * @returns signature
     * @example _getSign("IFBS") return "(IFZ)Ljava/lang/String;"
     */
    Native.prototype._getSign = function (sign) {
        if (!sign)
            return "()V";
        var javaSignMap = {
            I: "I",
            F: "F",
            B: "Z",
            S: "Ljava/lang/String;"
        };
        var sigs = sign.split("");
        if (!sigs || sigs.length <= 0)
            return "()V";
        var signature = "(";
        sigs.forEach(function (sig, index) {
            if (index >= sigs.length - 1) {
                signature += ")";
            }
            if (!javaSignMap[sig]) {
                throw new Error("[" + TAG + "] _getSign cannot resolve sig:" + sig + " of " + sign + "!");
            }
            signature += javaSignMap[sig];
        });
        return signature;
    };
    /**
     * 检查参数
     * @param params 参数数组
     * @param sign 参数签名字符串
     */
    Native.prototype._checkParam = function (params, sign) {
        if (!params || params.length <= 0)
            return;
        var signTypeMap = {
            I: "number",
            F: "number",
            B: "boolean",
            S: "string"
        };
        var sigs;
        if (sign) {
            sigs = sign.substring(0, sign.length - 1).split("");
            if (sigs.length !== params.length) {
                throw new Error("[" + TAG + "] _checkParam params " + params + " do not match signatures " + sign + " in length!");
            }
        }
        for (var i = 0; i < params.length; i++) {
            // 检查参数类型
            if (!params[i] || typeof (params[i]) != "number" || typeof (params[i]) != "boolean" || typeof (params[i]) != "string") {
                throw new Error("[" + TAG + "] _checkParam illegal params " + params + " " + params[i] + "!");
            }
            // 检查参数签名
            if (sigs) {
                if (signTypeMap[sigs[i]] !== typeof (params[i])) {
                    throw new Error("[" + TAG + "] _checkParam params " + params + " do not match signatures " + sign + "!");
                }
            }
        }
        return true;
    };
    return Native;
}());
exports.Native = Native;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9CYXNlL05hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBcUQ7QUFFckQsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDO0FBRXJCOzs7O0dBSUc7QUFDSDtJQUlJO1FBQ0ksSUFBSSxDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7SUFDbkUsQ0FBQztJQUdELHNCQUFrQixrQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7YUFDakM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRDs7O09BR0c7SUFDSSxxQkFBSSxHQUFYLFVBQVksTUFNWDtRQUNHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBSSxHQUFHLDRCQUF1QixNQUFNLENBQUMsS0FBSyxpQkFBWSxNQUFNLENBQUMsTUFBTSxlQUFVLE1BQU0sQ0FBQyxJQUFJLHFCQUFnQixNQUFNLENBQUMsSUFBSSxNQUFHLENBQUMsQ0FBQTtRQUNySSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFJLEdBQUcsc0NBQW1DLENBQUMsQ0FBQTtZQUN6RCxPQUFPO1NBQ1Y7UUFFRCxJQUFJO1lBQ0EsSUFBSSwyQkFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSztnQkFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJ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QkFBd0IsTUFBTSxpQ0FBNEIsSUFBSSxnQkFBYSxDQUFDLENBQUM7YUFDdkc7U0FDSjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLFNBQVM7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFO2dCQUNuSCxNQUFNLElBQUksS0FBSyxDQUFDLE1BQUksR0FBRyxxQ0FBZ0MsTUFBTSxTQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDLENBQUM7YUFDbEY7WUFFRCxTQUFTO1lBQ1QsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQUksR0FBRyw2QkFBd0IsTUFBTSxpQ0FBNEIsSUFBSSxNQUFHLENBQUMsQ0FBQztpQkFDN0Y7YUFDSjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUwsYUFBQztBQUFELENBN0pBLEFBNkpDLElBQUE7QUE3Slksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybVV0aWwgfSBmcm9tIFwiLi4vVXRpbHMvUGxhdGZvcm1VdGlsXCI7XG5cbmNvbnN0IFRBRyA9IFwiTmF0aXZlXCI7XG5cbi8qKlxuICog5Y6f55Sf5o6l5Y+jXG4gKiBAYXV0aG9yIGd1b2JcbiAqIEBkYXRlIDIwMjAvMDcvMDFcbiAqL1xuZXhwb3J0IGNsYXNzIE5hdGl2ZSB7XG5cbiAgICBwcml2YXRlIF9jYWxsTmF0aXZlU3RhdGljTWV0aG9kO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2NhbGxOYXRpdmVTdGF0aWNNZXRob2QgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTmF0aXZlO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IE5hdGl2ZSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5hdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDosIPnlKjljp/nlJ/mlrnms5VcbiAgICAgKiBAcGFyYW0gcGFyYW1zIFxuICAgICAqL1xuICAgIHB1YmxpYyBjYWxsKHBhcmFtczoge1xuICAgICAgICBwYWNrYWdlOiBzdHJpbmcsXG4gICAgICAgIGNsYXNzOiBzdHJpbmcsXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBzaWduPzogc3RyaW5nLFxuICAgICAgICBhcmdzPzogYW55W10sXG4gICAgfSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYFske1RBR31dIF9jYWxsTmF0aXZlIGNsYXNzICR7cGFyYW1zLmNsYXNzfSwgbWV0aG9kICR7cGFyYW1zLm1ldGhvZH0sIHNpZ24gJHtwYXJhbXMuc2lnbn0sIHBhcmFtYXRlcnMgJHtwYXJhbXMuYXJnc30uYClcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5jbGFzcyB8fCAhcGFyYW1zLm1ldGhvZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7VEFHfV0gX2NhbGxOYXRpdmUgaWxsZWdhbCBwYXJhbWF0ZXJzIWApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKFBsYXRmb3JtVXRpbC5pc0FuZHJvaWQoKSkgeyAvLyDlronljZNcbiAgICAgICAgICAgICAgICBsZXQgc2lnbiA9IHRoaXMuX2dldFNpZ24ocGFyYW1zLnNpZ24pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja1BhcmFtKHBhcmFtcy5hcmdzLCBwYXJhbXMuc2lnbikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2YWxTdHJpbmcgPSBcInRoaXMuX2NhbGxOYXRpdmVTdGF0aWNNZXRob2QocGFyYW1zLnBhY2thZ2UrcGFyYW1zLmNsYXNzLHBhcmFtcy5tZXRob2Qsc2lnbixcIjtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmFyZ3MuZm9yRWFjaCgocGFyYW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmFsU3RyaW5nICs9IHBhcmFtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHBhcmFtcy5hcmdzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZXZhbChldmFsU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FsbE5hdGl2ZVN0YXRpY01ldGhvZChwYXJhbXMuY2xhc3MsIHBhcmFtcy5tZXRob2QsIHNpZ24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGxhdGZvcm1VdGlsLmlzSU9TKCkpIHsgIC8vIElPU1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja1BhcmFtKHBhcmFtcy5hcmdzLCBwYXJhbXMuc2lnbikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2YWxTdHJpbmcgPSBcInRoaXMuX2NhbGxOYXRpdmVTdGF0aWNNZXRob2QocGFyYW1zLmNsYXNzLHBhcmFtcy5tZXRob2QsXCI7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5hcmdzLmZvckVhY2goKHBhcmFtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZhbFN0cmluZyArPSBwYXJhbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBwYXJhbXMuYXJncy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbFN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGV2YWwoZXZhbFN0cmluZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxOYXRpdmVTdGF0aWNNZXRob2QocGFyYW1zLmNsYXNzLCBwYXJhbXMubWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAgICAvLyDlhbbku5ZcbiAgICAgICAgICAgICAgICBsZXQgc2lnbiA9IHRoaXMuX2dldFNpZ24ocGFyYW1zLnNpZ24pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja1BhcmFtKHBhcmFtcy5hcmdzLCBwYXJhbXMuc2lnbikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2YWxTdHJpbmcgPSBcInRoaXMuX2NhbGxOYXRpdmVTdGF0aWNNZXRob2QocGFyYW1zLnBhY2thZ2UrcGFyYW1zLmNsYXNzLHBhcmFtcy5tZXRob2Qsc2lnbixcIjtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmFyZ3MuZm9yRWFjaCgocGFyYW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmFsU3RyaW5nICs9IHBhcmFtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHBhcmFtcy5hcmdzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZhbFN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBldmFsKGV2YWxTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxsTmF0aXZlU3RhdGljTWV0aG9kKHBhcmFtcy5jbGFzcywgcGFyYW1zLm1ldGhvZCwgc2lnbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWPguaVsOetvuWQjVxuICAgICAqIEBwYXJhbSBzaWduIOacgOWQjuS4gOS4quWtl+espuS7o+ihqOi/lOWbnuWAvO+8jOWFtuS9meS4uuWPguaVsFxuICAgICAqIEByZXR1cm5zIHNpZ25hdHVyZSBcbiAgICAgKiBAZXhhbXBsZSBfZ2V0U2lnbihcIklGQlNcIikgcmV0dXJuIFwiKElGWilMamF2YS9sYW5nL1N0cmluZztcIlxuICAgICAqL1xuICAgIHByaXZhdGUgX2dldFNpZ24oc2lnbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFzaWduKSByZXR1cm4gXCIoKVZcIjtcblxuICAgICAgICBsZXQgamF2YVNpZ25NYXAgPSB7XG4gICAgICAgICAgICBJOiBcIklcIixcbiAgICAgICAgICAgIEY6IFwiRlwiLFxuICAgICAgICAgICAgQjogXCJaXCIsXG4gICAgICAgICAgICBTOiBcIkxqYXZhL2xhbmcvU3RyaW5nO1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNpZ3MgPSBzaWduLnNwbGl0KFwiXCIpO1xuICAgICAgICBpZiAoIXNpZ3MgfHwgc2lncy5sZW5ndGggPD0gMCkgcmV0dXJuIFwiKClWXCI7XG5cbiAgICAgICAgbGV0IHNpZ25hdHVyZSA9IFwiKFwiO1xuICAgICAgICBzaWdzLmZvckVhY2goKHNpZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSBzaWdzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBzaWduYXR1cmUgKz0gXCIpXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghamF2YVNpZ25NYXBbc2lnXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgWyR7VEFHfV0gX2dldFNpZ24gY2Fubm90IHJlc29sdmUgc2lnOiR7c2lnfSBvZiAke3NpZ259IWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaWduYXR1cmUgKz0gamF2YVNpZ25NYXBbc2lnXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzaWduYXR1cmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qOA5p+l5Y+C5pWwXG4gICAgICogQHBhcmFtIHBhcmFtcyDlj4LmlbDmlbDnu4RcbiAgICAgKiBAcGFyYW0gc2lnbiDlj4LmlbDnrb7lkI3lrZfnrKbkuLJcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jaGVja1BhcmFtKHBhcmFtczogYW55W10sIHNpZ24/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgcGFyYW1zLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHNpZ25UeXBlTWFwID0ge1xuICAgICAgICAgICAgSTogXCJudW1iZXJcIixcbiAgICAgICAgICAgIEY6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICBCOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIFM6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaWdzO1xuICAgICAgICBpZiAoc2lnbikge1xuICAgICAgICAgICAgc2lncyA9IHNpZ24uc3Vic3RyaW5nKDAsIHNpZ24ubGVuZ3RoIC0gMSkuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICBpZiAoc2lncy5sZW5ndGggIT09IHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske1RBR31dIF9jaGVja1BhcmFtIHBhcmFtcyAke3BhcmFtc30gZG8gbm90IG1hdGNoIHNpZ25hdHVyZXMgJHtzaWdufSBpbiBsZW5ndGghYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8g5qOA5p+l5Y+C5pWw57G75Z6LXG4gICAgICAgICAgICBpZiAoIXBhcmFtc1tpXSB8fCB0eXBlb2YgKHBhcmFtc1tpXSkgIT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgKHBhcmFtc1tpXSkgIT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIChwYXJhbXNbaV0pICE9IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske1RBR31dIF9jaGVja1BhcmFtIGlsbGVnYWwgcGFyYW1zICR7cGFyYW1zfSAke3BhcmFtc1tpXX0hYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOajgOafpeWPguaVsOetvuWQjVxuICAgICAgICAgICAgaWYgKHNpZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lnblR5cGVNYXBbc2lnc1tpXV0gIT09IHR5cGVvZiAocGFyYW1zW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske1RBR31dIF9jaGVja1BhcmFtIHBhcmFtcyAke3BhcmFtc30gZG8gbm90IG1hdGNoIHNpZ25hdHVyZXMgJHtzaWdufSFgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Utils/FitterWidthFirst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '142d3MY6OdIGLVBeXu+EB/P', 'FitterWidthFirst');
// Framwork/Utils/FitterWidthFirst.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
/**
 * 优先宽度适配组件，当屏幕比设计分辨率更宽时，适配高，否则适配宽。
 * 注意：如果有需要在代码中获取组件的位置的操作，不要在onLoad里去做，因为修改了适配方式后会重新布局，onLoad里取到的会是旧的。
 */
var FitterWidthFirst = /** @class */ (function (_super) {
    __extends(FitterWidthFirst, _super);
    function FitterWidthFirst() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.sceneName = null;
        // 是否按高适配，防止设置后导致canvas尺寸改变而重复设置
        _this.isWidthFirst = null;
        return _this;
    }
    FitterWidthFirst.prototype.onLoad = function () {
        this.sceneName = cc.director.getScene().name;
        console.debug("\u573A\u666F " + this.sceneName + " FitterHeightFirst\u7EC4\u4EF6\u52A0\u8F7D");
        var canvasNode = cc.find('Canvas');
        this.canvas = canvasNode.getComponent(cc.Canvas);
        // 更新配置
        this.updateFit();
        // 监听窗口改变，重置
        canvasNode.on(cc.Node.EventType.SIZE_CHANGED, this.resetFit, this);
    };
    /**
     * 更新fit配置
     */
    FitterWidthFirst.prototype.updateFit = function () {
        var canvas = this.canvas;
        var design = canvas.designResolution;
        var device = cc.view.getFrameSize();
        // 当相差超过0.01时，才算更宽，这样差别不是很大的屏幕，仍可以按宽走
        if (device.width / device.height - design.width / design.height > 0.01) {
            var needToSet = this.isWidthFirst === null || this.isWidthFirst;
            this.isWidthFirst = false;
            // 针对首次设置，若默认配置一样，也不用更新
            if (needToSet && (canvas.fitWidth !== false || canvas.fitHeight !== true)) {
                canvas.fitWidth = false;
                canvas.fitHeight = true;
                console.debug('比设计更宽，按高适配');
            }
        }
        else {
            var needToSet = this.isWidthFirst === null || !this.isWidthFirst;
            this.isWidthFirst = true;
            // 针对首次设置，若默认配置一样，也不用更新
            if (needToSet && (canvas.fitWidth !== true || canvas.fitHeight !== false)) {
                canvas.fitWidth = true;
                canvas.fitHeight = false;
                console.debug('按宽适配');
            }
        }
    };
    FitterWidthFirst.prototype.resetFit = function () {
        console.debug("\u573A\u666F " + this.sceneName + " \u91CD\u65B0\u8BA1\u7B97fit");
        this.updateFit();
    };
    FitterWidthFirst = __decorate([
        ccclass
    ], FitterWidthFirst);
    return FitterWidthFirst;
}(cc.Component));
exports.default = FitterWidthFirst;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9VdGlscy9GaXR0ZXJXaWR0aEZpcnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsK0JBQU8sQ0FBbUI7QUFFbEM7OztHQUdHO0FBRUg7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUF5REM7UUF2RFcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBRWpDLGdDQUFnQztRQUN4QixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFrRHpDLENBQUM7SUFoREcsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBTSxJQUFJLENBQUMsU0FBUywrQ0FBd0IsQ0FBQyxDQUFDO1FBRTVELElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqRCxPQUFPO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLFlBQVk7UUFDWixVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7T0FFRztJQUNLLG9DQUFTLEdBQWpCO1FBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDdkMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxxQ0FBcUM7UUFDckMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRTtZQUNwRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBRTFCLHVCQUF1QjtZQUN2QixJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQjtTQUNKO2FBQU07WUFDSCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFFekIsdUJBQXVCO1lBQ3ZCLElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDdkUsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1NBQ0o7SUFDTCxDQUFDO0lBRU8sbUNBQVEsR0FBaEI7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFNLElBQUksQ0FBQyxTQUFTLGlDQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQXZEZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0F3RHBDO0lBQUQsdUJBQUM7Q0F4REQsQUF3REMsQ0F4RDZDLEVBQUUsQ0FBQyxTQUFTLEdBd0R6RDtrQkF4RG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiDkvJjlhYjlrr3luqbpgILphY3nu4Tku7bvvIzlvZPlsY/luZXmr5Torr7orqHliIbovqjnjofmm7Tlrr3ml7bvvIzpgILphY3pq5jvvIzlkKbliJnpgILphY3lrr3jgIJcbiAqIOazqOaEj++8muWmguaenOaciemcgOimgeWcqOS7o+eggeS4reiOt+WPlue7hOS7tueahOS9jee9rueahOaTjeS9nO+8jOS4jeimgeWcqG9uTG9hZOmHjOWOu+WBmu+8jOWboOS4uuS/ruaUueS6humAgumFjeaWueW8j+WQjuS8mumHjeaWsOW4g+WxgO+8jG9uTG9hZOmHjOWPluWIsOeahOS8muaYr+aXp+eahOOAglxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml0dGVyV2lkdGhGaXJzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IGNjLkNhbnZhcyA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNjZW5lTmFtZTogc3RyaW5nID0gbnVsbDtcblxuICAgIC8vIOaYr+WQpuaMiemrmOmAgumFje+8jOmYsuatouiuvue9ruWQjuWvvOiHtGNhbnZhc+WwuuWvuOaUueWPmOiAjOmHjeWkjeiuvue9rlxuICAgIHByaXZhdGUgaXNXaWR0aEZpcnN0OiBib29sZWFuID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zY2VuZU5hbWUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYOWcuuaZryAke3RoaXMuc2NlbmVOYW1lfSBGaXR0ZXJIZWlnaHRGaXJzdOe7hOS7tuWKoOi9vWApO1xuXG4gICAgICAgIGNvbnN0IGNhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNOb2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuXG4gICAgICAgIC8vIOabtOaWsOmFjee9rlxuICAgICAgICB0aGlzLnVwZGF0ZUZpdCgpO1xuICAgICAgICAvLyDnm5HlkKznqpflj6PmlLnlj5jvvIzph43nva5cbiAgICAgICAgY2FudmFzTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMucmVzZXRGaXQsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsGZpdOmFjee9rlxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRml0KCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICAgICAgY29uc3QgZGVzaWduID0gY2FudmFzLmRlc2lnblJlc29sdXRpb247XG4gICAgICAgIGNvbnN0IGRldmljZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIC8vIOW9k+ebuOW3rui2hei/hzAuMDHml7bvvIzmiY3nrpfmm7Tlrr3vvIzov5nmoLflt67liKvkuI3mmK/lvojlpKfnmoTlsY/luZXvvIzku43lj6/ku6XmjInlrr3otbBcbiAgICAgICAgaWYgKGRldmljZS53aWR0aCAvIGRldmljZS5oZWlnaHQgLSBkZXNpZ24ud2lkdGggLyBkZXNpZ24uaGVpZ2h0ID4gMC4wMSkge1xuICAgICAgICAgICAgY29uc3QgbmVlZFRvU2V0ID0gdGhpcy5pc1dpZHRoRmlyc3QgPT09IG51bGwgfHwgdGhpcy5pc1dpZHRoRmlyc3Q7XG4gICAgICAgICAgICB0aGlzLmlzV2lkdGhGaXJzdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyDpkojlr7npppbmrKHorr7nva7vvIzoi6Xpu5jorqTphY3nva7kuIDmoLfvvIzkuZ/kuI3nlKjmm7TmlrBcbiAgICAgICAgICAgIGlmIChuZWVkVG9TZXQgJiYgKGNhbnZhcy5maXRXaWR0aCAhPT0gZmFsc2UgfHwgY2FudmFzLmZpdEhlaWdodCAhPT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCfmr5Torr7orqHmm7Tlrr3vvIzmjInpq5jpgILphY0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRUb1NldCA9IHRoaXMuaXNXaWR0aEZpcnN0ID09PSBudWxsIHx8ICF0aGlzLmlzV2lkdGhGaXJzdDtcbiAgICAgICAgICAgIHRoaXMuaXNXaWR0aEZpcnN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8g6ZKI5a+56aaW5qyh6K6+572u77yM6Iul6buY6K6k6YWN572u5LiA5qC377yM5Lmf5LiN55So5pu05pawXG4gICAgICAgICAgICBpZiAobmVlZFRvU2V0ICYmIChjYW52YXMuZml0V2lkdGggIT09IHRydWUgfHwgY2FudmFzLmZpdEhlaWdodCAhPT0gZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zygn5oyJ5a696YCC6YWNJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0Rml0KCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGDlnLrmma8gJHt0aGlzLnNjZW5lTmFtZX0g6YeN5paw6K6h566XZml0YCk7XG4gICAgICAgIHRoaXMudXBkYXRlRml0KCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Utils/FileUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad8b72xWgJMmpokVnuRrlPR', 'FileUtil');
// Framwork/Utils/FileUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileUtil = /** @class */ (function () {
    function FileUtil() {
        this._jsb_fileutil = jsb.fileUtils;
        if (!this._jsb_fileutil)
            console.error('Inner delegate is undefined.');
        console.log(this._jsb_fileutil.toString());
    }
    Object.defineProperty(FileUtil, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new FileUtil();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取可写路径
     */
    FileUtil.prototype.getWritableUrl = function () {
        return this._jsb_fileutil.getWritablePath();
    };
    /**
     * 获取默认资源根目录
     * @return 一般同 getWritableUrl
     */
    FileUtil.prototype.getDefaultResourceRootPath = function () {
        return this._jsb_fileutil.getDefaultResourceRootPath();
    };
    /**
     * 创建目录
     * @param dir 目录路径
     */
    FileUtil.prototype.createDirectory = function (dir) {
        if (this.isDirectoryExist(dir))
            return true;
        return this._jsb_fileutil.createDirectory(dir);
    };
    /**
     * 返回目录是否存在
     * @param dir 目录
     */
    FileUtil.prototype.isDirectoryExist = function (dir) {
        return this._jsb_fileutil.isDirectoryExist(dir);
    };
    /**
     * 返回文件是否存在
     * @param path 文件路径
     */
    FileUtil.prototype.isFileExist = function (path) {
        return this._jsb_fileutil.isFileExist(path);
    };
    /**
     * 将字符串写入文件（复位）
     * @param str 写入字符串
     * @param path 文件路径
     */
    FileUtil.prototype.writeStringToFile = function (str, path) {
        return this._jsb_fileutil.writeStringToFile(str, path);
    };
    /**
     * 将对象写入文件（复位）
     * @param obj 写入对象
     * @param path 文件路径
     */
    FileUtil.prototype.writeToFile = function (obj, path) {
        return this._jsb_fileutil.writeToFile(obj, path);
    };
    /**
     * 获取文件内容
     * @param path 文件路径
     */
    FileUtil.prototype.getValueMapFromFile = function (path) {
        return this._jsb_fileutil.getValueMapFromFile(path);
    };
    /**
     * 获取文件内容（字符串）
     * @param path 文件路径
     */
    FileUtil.prototype.getStringFromFile = function (path) {
        return this._jsb_fileutil.getStringFromFile(path);
    };
    /**
     * 获取文件所在目录
     * @param path 文件路径
     */
    FileUtil.prototype.getFileDir = function (path) {
        return this._jsb_fileutil.getFileDir(path);
    };
    FileUtil.prototype.normalizePath = function (path) {
        return this._jsb_fileutil.normalizePath(path);
    };
    FileUtil.prototype.loadFilenameLookupDictionaryFromFile = function (path) {
        this._jsb_fileutil.loadFilenameLookupDictionaryFromFile(path);
    };
    /**
     * 移除目录（以及目录下所有文件）
     * @param dir 目录
     */
    FileUtil.prototype.removeDirectory = function (dir) {
        return this._jsb_fileutil.removeDirectory(dir);
    };
    /**
     * 移除文件
     * @param path 文件路径
     */
    FileUtil.prototype.removeFile = function (path) {
        return this._jsb_fileutil.removeFile(path);
    };
    /**
     * 获取文件大小
     * @param path 文件路径
     */
    FileUtil.prototype.getFileSize = function (path) {
        return this._jsb_fileutil.getFileSize(path);
    };
    /**
     * 列出目录所有文件
     * @param dir 目录
     */
    FileUtil.prototype.listFiles = function (dir) {
        return this._jsb_fileutil.listFiles(dir);
    };
    FileUtil.prototype.getSuitableFOpen = function (path) {
        return this._jsb_fileutil.getSuitableFOpen(path);
    };
    FileUtil.prototype.setWritablePath = function (path) {
        return this._jsb_fileutil.setWritablePath(path);
    };
    FileUtil._instance = null;
    return FileUtil;
}());
exports.FileUtil = FileUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9VdGlscy9GaWxlVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBSUk7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBR0Qsc0JBQWtCLG9CQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRztJQUNJLGlDQUFjLEdBQXJCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7O09BR0c7SUFDSSw2Q0FBMEIsR0FBakM7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksa0NBQWUsR0FBdEIsVUFBdUIsR0FBVztRQUM5QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUM7UUFFaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksbUNBQWdCLEdBQXZCLFVBQXdCLEdBQVc7UUFDL0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSSw4QkFBVyxHQUFsQixVQUFtQixJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxvQ0FBaUIsR0FBeEIsVUFBeUIsR0FBVyxFQUFFLElBQVk7UUFDOUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDhCQUFXLEdBQWxCLFVBQW1CLEdBQVcsRUFBRSxJQUFZO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7O09BR0c7SUFDSSxzQ0FBbUIsR0FBMUIsVUFBMkIsSUFBWTtRQUNuQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9DQUFpQixHQUF4QixVQUF5QixJQUFZO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQVUsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxnQ0FBYSxHQUFwQixVQUFxQixJQUFZO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLHVEQUFvQyxHQUEzQyxVQUE0QyxJQUFZO1FBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsb0NBQW9DLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGtDQUFlLEdBQXRCLFVBQXVCLEdBQVc7UUFDOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQVUsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSSw4QkFBVyxHQUFsQixVQUFtQixJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDRCQUFTLEdBQWhCLFVBQWlCLEdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sbUNBQWdCLEdBQXZCLFVBQXdCLElBQVk7UUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxrQ0FBZSxHQUF0QixVQUF1QixJQUFZO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQXpJYyxrQkFBUyxHQUFhLElBQUksQ0FBQztJQTJJOUMsZUFBQztDQXRKRCxBQXNKQyxJQUFBO0FBdEpZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXRpbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfanNiX2ZpbGV1dGlsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fanNiX2ZpbGV1dGlsID0ganNiLmZpbGVVdGlscztcclxuICAgICAgICBpZiAoIXRoaXMuX2pzYl9maWxldXRpbClcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW5uZXIgZGVsZWdhdGUgaXMgdW5kZWZpbmVkLicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2pzYl9maWxldXRpbC50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEZpbGVVdGlsID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEZpbGVVdGlsIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKVxyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBGaWxlVXRpbCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWPr+WGmei3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0V3JpdGFibGVVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLmdldFdyaXRhYmxlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6buY6K6k6LWE5rqQ5qC555uu5b2VXHJcbiAgICAgKiBAcmV0dXJuIOS4gOiIrOWQjCBnZXRXcml0YWJsZVVybFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RGVmYXVsdFJlc291cmNlUm9vdFBhdGgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLmdldERlZmF1bHRSZXNvdXJjZVJvb3RQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rnm67lvZVcclxuICAgICAqIEBwYXJhbSBkaXIg55uu5b2V6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVEaXJlY3RvcnkoZGlyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RpcmVjdG9yeUV4aXN0KGRpcikpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLmNyZWF0ZURpcmVjdG9yeShkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue55uu5b2V5piv5ZCm5a2Y5ZyoXHJcbiAgICAgKiBAcGFyYW0gZGlyIOebruW9lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNEaXJlY3RvcnlFeGlzdChkaXI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwuaXNEaXJlY3RvcnlFeGlzdChkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5paH5Lu25piv5ZCm5a2Y5ZyoXHJcbiAgICAgKiBAcGFyYW0gcGF0aCDmlofku7bot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRmlsZUV4aXN0KHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwuaXNGaWxlRXhpc3QocGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblrZfnrKbkuLLlhpnlhaXmlofku7bvvIjlpI3kvY3vvIlcclxuICAgICAqIEBwYXJhbSBzdHIg5YaZ5YWl5a2X56ym5LiyXHJcbiAgICAgKiBAcGFyYW0gcGF0aCDmlofku7bot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdyaXRlU3RyaW5nVG9GaWxlKHN0cjogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLndyaXRlU3RyaW5nVG9GaWxlKHN0ciwgcGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblr7nosaHlhpnlhaXmlofku7bvvIjlpI3kvY3vvIlcclxuICAgICAqIEBwYXJhbSBvYmog5YaZ5YWl5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gcGF0aCDmlofku7bot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdyaXRlVG9GaWxlKG9iajogT2JqZWN0LCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLndyaXRlVG9GaWxlKG9iaiwgcGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlofku7blhoXlrrlcclxuICAgICAqIEBwYXJhbSBwYXRoIOaWh+S7tui3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWVNYXBGcm9tRmlsZShwYXRoOiBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwuZ2V0VmFsdWVNYXBGcm9tRmlsZShwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaWh+S7tuWGheWuue+8iOWtl+espuS4su+8iVxyXG4gICAgICogQHBhcmFtIHBhdGgg5paH5Lu26Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTdHJpbmdGcm9tRmlsZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwuZ2V0U3RyaW5nRnJvbUZpbGUocGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlofku7bmiYDlnKjnm67lvZVcclxuICAgICAqIEBwYXJhbSBwYXRoIOaWh+S7tui3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RmlsZURpcihwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwuZ2V0RmlsZURpcihwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwubm9ybWFsaXplUGF0aChwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEZpbGVuYW1lTG9va3VwRGljdGlvbmFyeUZyb21GaWxlKHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2pzYl9maWxldXRpbC5sb2FkRmlsZW5hbWVMb29rdXBEaWN0aW9uYXJ5RnJvbUZpbGUocGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTnm67lvZXvvIjku6Xlj4rnm67lvZXkuIvmiYDmnInmlofku7bvvIlcclxuICAgICAqIEBwYXJhbSBkaXIg55uu5b2VXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVEaXJlY3RvcnkoZGlyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLnJlbW92ZURpcmVjdG9yeShkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5paH5Lu2XHJcbiAgICAgKiBAcGFyYW0gcGF0aCDmlofku7bot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUZpbGUocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzYl9maWxldXRpbC5yZW1vdmVGaWxlKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5paH5Lu25aSn5bCPXHJcbiAgICAgKiBAcGFyYW0gcGF0aCDmlofku7bot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEZpbGVTaXplKHBhdGg6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzYl9maWxldXRpbC5nZXRGaWxlU2l6ZShwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIl+WHuuebruW9leaJgOacieaWh+S7tlxyXG4gICAgICogQHBhcmFtIGRpciDnm67lvZVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3RGaWxlcyhkaXI6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLmxpc3RGaWxlcyhkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdWl0YWJsZUZPcGVuKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzYl9maWxldXRpbC5nZXRTdWl0YWJsZUZPcGVuKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRXcml0YWJsZVBhdGgocGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzYl9maWxldXRpbC5zZXRXcml0YWJsZVBhdGgocGF0aCk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Utils/PlatformUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '762d4NEZ05ByIizdNyWUiyt', 'PlatformUtil');
// Framwork/Utils/PlatformUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlatformUtil = /** @class */ (function () {
    function PlatformUtil() {
    }
    PlatformUtil.isAndroid = function () {
        return cc.sys.platform === cc.sys.ANDROID;
    };
    PlatformUtil.isIOS = function () {
        return cc.sys.platform === cc.sys.IPHONE || cc.sys.platform === cc.sys.IPAD;
    };
    PlatformUtil.isMiniGame = function () {
        return cc.sys.platform === cc.sys.WECHAT_GAME
            || cc.sys.platform === cc.sys.ALIPAY_GAME
            || cc.sys.platform === cc.sys.BAIDU_GAME
            || cc.sys.platform === cc.sys.QQ_PLAY;
    };
    return PlatformUtil;
}());
exports.PlatformUtil = PlatformUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9VdGlscy9QbGF0Zm9ybVV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBaUJBLENBQUM7SUFmaUIsc0JBQVMsR0FBdkI7UUFDSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzlDLENBQUM7SUFFYSxrQkFBSyxHQUFuQjtRQUNJLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDaEYsQ0FBQztJQUVhLHVCQUFVLEdBQXhCO1FBQ0ksT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVc7ZUFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXO2VBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVTtlQUNyQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUM5QyxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1VdGlsIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaXNBbmRyb2lkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuQU5EUk9JRDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzSU9TKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuSVBIT05FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLklQQUQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc01pbmlHYW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUVcbiAgICAgICAgICAgIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkFMSVBBWV9HQU1FXG4gICAgICAgICAgICB8fCBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5CQUlEVV9HQU1FXG4gICAgICAgICAgICB8fCBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5RUV9QTEFZO1xuICAgIH1cblxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Platform/IPlatform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2866cb5PVRLvIxDGLYOY4Br', 'IPlatform');
// Framwork/Platform/IPlatform.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9QbGF0Zm9ybS9JUGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiDlubPlj7DmjqXlj6NcbiAqIEBhdXRob3IgZ3VvYlxuICogQGRhdGUgMjAyMC8wNi8wOFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElQbGF0Zm9ybSB7XG5cbiAgICAvKiog6I635Y+W5b2T5YmN5bmz5Y+w5qCH6K+GICovXG4gICAgcGxhdGZvcm0oKTogc3RyaW5nO1xuXG4gICAgLyoqIOWKoOi9veWcuuaZryAqL1xuICAgIGxvYWRTY2VuZShwYXJhbXM6IHN0cmluZyk6IHZvaWQ7XG5cbiAgICAvKiog5Yqg6L295Zy65pmv5oiQ5Yqf5Zue6LCDICovXG4gICAgb25TY2VuZUxvYWRlZCgpO1xuXG4gICAgLyoqIOmAgOWHuuWcuuaZryAqL1xuICAgIGV4aXRTY2VuZSgpOiB2b2lkO1xuXG4gICAgLyoqIOmAgOWHuuWcuuaZr+aIkOWKn+WbnuiwgyAqL1xuICAgIG9uU2NlbmVFeGl0KCk6IHZvaWQ7IFxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/WritingSmallDot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2a06omQWtCRoW9tn0c5XcO', 'WritingSmallDot');
// Writing/Script/WritingSmallDot.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OTHER_DOTS_SHOWN_DURATION = 0.2;
var WritingSmallDot = /** @class */ (function (_super) {
    __extends(WritingSmallDot, _super);
    function WritingSmallDot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WritingSmallDot.prototype.isTriggered = function () {
        return this.node.active;
    };
    /**
     * 重置
     */
    WritingSmallDot.prototype.reset = function () {
        this.node.active = false;
    };
    /**
     * 渐显出来
     */
    WritingSmallDot.prototype.turnOn = function () {
        var dot = this.node;
        dot.opacity = 0;
        dot.active = true;
        dot.runAction(cc.fadeTo(OTHER_DOTS_SHOWN_DURATION, 255));
    };
    WritingSmallDot = __decorate([
        ccclass
    ], WritingSmallDot);
    return WritingSmallDot;
}(cc.Component));
exports.default = WritingSmallDot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9Xcml0aW5nU21hbGxEb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QyxJQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztBQUd0QztJQUE2QyxtQ0FBWTtJQUF6RDs7SUFxQkEsQ0FBQztJQXBCVSxxQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksK0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxnQ0FBTSxHQUFiO1FBQ0ksSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBcEJnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBcUJuQztJQUFELHNCQUFDO0NBckJELEFBcUJDLENBckI0QyxFQUFFLENBQUMsU0FBUyxHQXFCeEQ7a0JBckJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgT1RIRVJfRE9UU19TSE9XTl9EVVJBVElPTiA9IDAuMjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyaXRpbmdTbWFsbERvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIGlzVHJpZ2dlcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmFjdGl2ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43nva5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuJDmmL7lh7rmnaVcbiAgICAgKi9cbiAgICBwdWJsaWMgdHVybk9uKCkge1xuICAgICAgICBjb25zdCBkb3QgPSB0aGlzLm5vZGU7XG4gICAgICAgIGRvdC5vcGFjaXR5ID0gMDtcbiAgICAgICAgZG90LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGRvdC5ydW5BY3Rpb24oY2MuZmFkZVRvKE9USEVSX0RPVFNfU0hPV05fRFVSQVRJT04sIDI1NSkpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/WritingDot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12a105yR3BHcYncC1anukvk', 'WritingDot');
// Writing/Script/WritingDot.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WritingRightStar_1 = require("./WritingRightStar");
var WritingSmallDot_1 = require("./WritingSmallDot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MAIN_DOT_SHOWN_DURATION = 0.2;
var DOT_SHOWN_DURATION = [0.2, 0.4];
/**
 * 笔画节点，管理每个引导点、画到后显示的星星及其周边点缀的小点的显示隐藏
 */
var WritingDot = /** @class */ (function (_super) {
    __extends(WritingDot, _super);
    function WritingDot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainDot = null;
        _this.starFinished = null;
        _this.mainDotShown = null;
        _this.mainDotErased = null;
        _this.starFinishedShown = null;
        _this._isTriggered = false;
        _this.relativeDots = null;
        return _this;
    }
    /**
     * 设置音效
     * @param mainDotShown 黄色点出现音效
     * @param mainDotErased 黄色点擦除音效
     * @param starFinishedShown 彩色星星出现音效
     * @param rightStarShown 白色星星出现音效
     */
    WritingDot.prototype.setAudios = function (mainDotShown, mainDotErased, starFinishedShown, rightStarShown) {
        this.mainDotShown = mainDotShown;
        this.mainDotErased = mainDotErased;
        this.starFinishedShown = starFinishedShown;
        this.getRelativeDots().forEach(function (smallDot) {
            if (smallDot instanceof WritingRightStar_1.default) {
                smallDot.setAudio(rightStarShown);
            }
        });
    };
    WritingDot.prototype.isTriggered = function () {
        return this._isTriggered;
    };
    /**
     * 获取子节点中的正确星星与小点组件列表
     */
    WritingDot.prototype.getRelativeDots = function () {
        if (this.relativeDots === null) {
            if (this.node.childrenCount > 0) {
                this.relativeDots = this.node.children.map(function (dot) {
                    return dot.getComponent(WritingSmallDot_1.default);
                });
            }
            else {
                this.relativeDots = [];
            }
        }
        return this.relativeDots;
    };
    /**
     * 擦除（画笔画到的时候调用）
     */
    WritingDot.prototype.erase = function () {
        if (this.mainDot) {
            cc.audioEngine.play(this.mainDotErased, false, 1);
        }
        this._isTriggered = true;
        this.hideAll();
    };
    /**
     * 重置
     */
    WritingDot.prototype.reset = function () {
        this._isTriggered = false;
        // 一开始先隐藏，等动画触发显示
        this.hideAll();
    };
    /**
     * 隐藏所有点
     */
    WritingDot.prototype.hideAll = function () {
        if (this.mainDot) {
            this.mainDot.active = false;
            this.mainDot.getComponent(cc.Sprite).enabled = true;
        }
        if (this.starFinished) {
            this.starFinished.active = false;
            this.starFinished.getComponent(cc.Sprite).enabled = true;
        }
        this.getRelativeDots().forEach(function (dot) {
            dot.reset();
        });
    };
    /**
     * 动画显示引导节点
     */
    WritingDot.prototype.showGuide = function () {
        this._isTriggered = false;
        if (this.starFinished) {
            this.starFinished.scale = 0;
            this.starFinished.active = true;
            this.starFinished.runAction(WritingRightStar_1.default.getStarShownAction());
            cc.audioEngine.play(this.starFinishedShown, false, 1);
        }
        else if (this.mainDot) {
            this.mainDot.scale = 0;
            this.mainDot.active = true;
            this.mainDot.runAction(cc.scaleTo(MAIN_DOT_SHOWN_DURATION, 1, 1).easing(cc.easeBackOut()));
            cc.audioEngine.play(this.mainDotShown, false, 1);
        }
    };
    /**
     * 点亮该节点，引导点隐藏，星星旋转出来，周边小点也同时渐显出来
     */
    WritingDot.prototype.turnOn = function () {
        // 引导点和结束点只能隐藏其图片，因为还有子节点星星要显示
        if (this.mainDot) {
            this.mainDot.getComponent(cc.Sprite).enabled = false;
        }
        else if (this.starFinished) {
            this.starFinished.getComponent(cc.Sprite).enabled = false;
        }
        // 剩余没点亮的星星也点亮
        this.getRelativeDots()
            .filter(function (dot) { return !dot.isTriggered(); })
            .forEach(function (dot) {
            dot.turnOn();
        });
        this._isTriggered = true;
    };
    WritingDot.LAST_DOT_SHOWN_DURATION = DOT_SHOWN_DURATION[0] + DOT_SHOWN_DURATION[1];
    __decorate([
        property(cc.Node)
    ], WritingDot.prototype, "mainDot", void 0);
    __decorate([
        property(cc.Node)
    ], WritingDot.prototype, "starFinished", void 0);
    WritingDot = __decorate([
        ccclass
    ], WritingDot);
    return WritingDot;
}(cc.Component));
exports.default = WritingDot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9Xcml0aW5nRG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFFMUMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QyxJQUFNLHVCQUF1QixHQUFHLEdBQUcsQ0FBQztBQUNwQyxJQUFNLGtCQUFrQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXRDOztHQUVHO0FBRUg7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUE4SUM7UUF6SUcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUF5Qi9CLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBTXJCLGtCQUFZLEdBQXNCLElBQUksQ0FBQzs7SUFpR25ELENBQUM7SUE5SEc7Ozs7OztPQU1HO0lBQ0ksOEJBQVMsR0FBaEIsVUFDSSxZQUEwQixFQUMxQixhQUEyQixFQUMzQixpQkFBK0IsRUFDL0IsY0FBNEI7UUFFNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3BDLElBQUksUUFBUSxZQUFZLDBCQUFnQixFQUFFO2dCQUN0QyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBSU0sZ0NBQVcs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OiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXcml0aW5nUmlnaHRTdGFyIGZyb20gJy4vV3JpdGluZ1JpZ2h0U3Rhcic7XG5pbXBvcnQgV3JpdGluZ1NtYWxsRG90IGZyb20gJy4vV3JpdGluZ1NtYWxsRG90JztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgTUFJTl9ET1RfU0hPV05fRFVSQVRJT04gPSAwLjI7XG5jb25zdCBET1RfU0hPV05fRFVSQVRJT04gPSBbMC4yLCAwLjRdO1xuXG4vKipcbiAqIOeslOeUu+iKgueCue+8jOeuoeeQhuavj+S4quW8leWvvOeCueOAgeeUu+WIsOWQjuaYvuekuueahOaYn+aYn+WPiuWFtuWRqOi+ueeCuee8gOeahOWwj+eCueeahOaYvuekuumakOiXj1xuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JpdGluZ0RvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBMQVNUX0RPVF9TSE9XTl9EVVJBVElPTiA9IERPVF9TSE9XTl9EVVJBVElPTlswXSArIERPVF9TSE9XTl9EVVJBVElPTlsxXTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1haW5Eb3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3RhckZpbmlzaGVkOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG1haW5Eb3RTaG93bjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIG1haW5Eb3RFcmFzZWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBzdGFyRmluaXNoZWRTaG93bjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIOiuvue9rumfs+aViFxuICAgICAqIEBwYXJhbSBtYWluRG90U2hvd24g6buE6Imy54K55Ye6546w6Z+z5pWIXG4gICAgICogQHBhcmFtIG1haW5Eb3RFcmFzZWQg6buE6Imy54K55pOm6Zmk6Z+z5pWIXG4gICAgICogQHBhcmFtIHN0YXJGaW5pc2hlZFNob3duIOW9qeiJsuaYn+aYn+WHuueOsOmfs+aViFxuICAgICAqIEBwYXJhbSByaWdodFN0YXJTaG93biDnmb3oibLmmJ/mmJ/lh7rnjrDpn7PmlYhcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0QXVkaW9zKFxuICAgICAgICBtYWluRG90U2hvd246IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgbWFpbkRvdEVyYXNlZDogY2MuQXVkaW9DbGlwLFxuICAgICAgICBzdGFyRmluaXNoZWRTaG93bjogY2MuQXVkaW9DbGlwLFxuICAgICAgICByaWdodFN0YXJTaG93bjogY2MuQXVkaW9DbGlwXG4gICAgKSB7XG4gICAgICAgIHRoaXMubWFpbkRvdFNob3duID0gbWFpbkRvdFNob3duO1xuICAgICAgICB0aGlzLm1haW5Eb3RFcmFzZWQgPSBtYWluRG90RXJhc2VkO1xuICAgICAgICB0aGlzLnN0YXJGaW5pc2hlZFNob3duID0gc3RhckZpbmlzaGVkU2hvd247XG4gICAgICAgIHRoaXMuZ2V0UmVsYXRpdmVEb3RzKCkuZm9yRWFjaCgoc21hbGxEb3QpID0+IHtcbiAgICAgICAgICAgIGlmIChzbWFsbERvdCBpbnN0YW5jZW9mIFdyaXRpbmdSaWdodFN0YXIpIHtcbiAgICAgICAgICAgICAgICBzbWFsbERvdC5zZXRBdWRpbyhyaWdodFN0YXJTaG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzVHJpZ2dlcmVkID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgaXNUcmlnZ2VyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1RyaWdnZXJlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbGF0aXZlRG90czogV3JpdGluZ1NtYWxsRG90W10gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICog6I635Y+W5a2Q6IqC54K55Lit55qE5q2j56Gu5pif5pif5LiO5bCP54K557uE5Lu25YiX6KGoXG4gICAgICovXG4gICAgcHVibGljIGdldFJlbGF0aXZlRG90cygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVsYXRpdmVEb3RzID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZURvdHMgPSB0aGlzLm5vZGUuY2hpbGRyZW4ubWFwKChkb3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvdC5nZXRDb21wb25lbnQoV3JpdGluZ1NtYWxsRG90KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZURvdHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0aXZlRG90cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmk6bpmaTvvIjnlLvnrJTnlLvliLDnmoTml7blgJnosIPnlKjvvIlcbiAgICAgKi9cbiAgICBwdWJsaWMgZXJhc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5Eb3QpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5tYWluRG90RXJhc2VkLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc1RyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHjee9rlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5faXNUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgLy8g5LiA5byA5aeL5YWI6ZqQ6JeP77yM562J5Yqo55S76Kem5Y+R5pi+56S6XG4gICAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmakOiXj+aJgOacieeCuVxuICAgICAqL1xuICAgIHByaXZhdGUgaGlkZUFsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkRvdCkge1xuICAgICAgICAgICAgdGhpcy5tYWluRG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tYWluRG90LmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhckZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJGaW5pc2hlZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3RhckZpbmlzaGVkLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRSZWxhdGl2ZURvdHMoKS5mb3JFYWNoKChkb3QpID0+IHtcbiAgICAgICAgICAgIGRvdC5yZXNldCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqjnlLvmmL7npLrlvJXlr7zoioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd0d1aWRlKCkge1xuICAgICAgICB0aGlzLl9pc1RyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5zdGFyRmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhckZpbmlzaGVkLnNjYWxlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhckZpbmlzaGVkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXJGaW5pc2hlZC5ydW5BY3Rpb24oV3JpdGluZ1JpZ2h0U3Rhci5nZXRTdGFyU2hvd25BY3Rpb24oKSk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc3RhckZpbmlzaGVkU2hvd24sIGZhbHNlLCAxKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1haW5Eb3QpIHtcbiAgICAgICAgICAgIHRoaXMubWFpbkRvdC5zY2FsZSA9IDA7XG4gICAgICAgICAgICB0aGlzLm1haW5Eb3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWFpbkRvdC5ydW5BY3Rpb24oY2Muc2NhbGVUbyhNQUlOX0RPVF9TSE9XTl9EVVJBVElPTiwgMSwgMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5tYWluRG90U2hvd24sIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeCueS6ruivpeiKgueCue+8jOW8leWvvOeCuemakOiXj++8jOaYn+aYn+aXi+i9rOWHuuadpe+8jOWRqOi+ueWwj+eCueS5n+WQjOaXtua4kOaYvuWHuuadpVxuICAgICAqL1xuICAgIHB1YmxpYyB0dXJuT24oKSB7XG4gICAgICAgIC8vIOW8leWvvOeCueWSjOe7k+adn+eCueWPquiDvemakOiXj+WFtuWbvueJh++8jOWboOS4uui/mOacieWtkOiKgueCueaYn+aYn+imgeaYvuekulxuICAgICAgICBpZiAodGhpcy5tYWluRG90KSB7XG4gICAgICAgICAgICB0aGlzLm1haW5Eb3QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhckZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJGaW5pc2hlZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliankvZnmsqHngrnkuq7nmoTmmJ/mmJ/kuZ/ngrnkuq5cbiAgICAgICAgdGhpcy5nZXRSZWxhdGl2ZURvdHMoKVxuICAgICAgICAgICAgLmZpbHRlcigoZG90KSA9PiAhZG90LmlzVHJpZ2dlcmVkKCkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZG90KSA9PiB7XG4gICAgICAgICAgICAgICAgZG90LnR1cm5PbigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5faXNUcmlnZ2VyZWQgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/Practice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59a84dhL11JorpqQrXIHnC2', 'Practice');
// Writing/Script/Practice.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
/**
 * 练习类，需绑定在预制体顶层供框架调用。子类必须实现对应的接口。
 *
 * 注：本来用interface就行，但是要想通过getComponent获取实例，只能用类。
 */
var Practice = /** @class */ (function (_super) {
    __extends(Practice, _super);
    function Practice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.framework = null;
        return _this;
    }
    Practice.prototype.setFramework = function (framework) {
        this.framework = framework;
    };
    /**
     * 练习隐藏，当从当前练习切到下一个练习时，原练习会回调onHide
     */
    Practice.prototype.onHide = function () { };
    /**
     * 练习显示，当练习展示（包括首个练习倒计时后显示，及切换成当前练习）时，会回调onShow
     */
    Practice.prototype.onShow = function () { };
    Practice = __decorate([
        ccclass
    ], Practice);
    return Practice;
}(cc.Component));
exports.default = Practice;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9QcmFjdGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUSxJQUFBLCtCQUFPLENBQW1CO0FBRWxDOzs7O0dBSUc7QUFFSDtJQUErQyw0QkFBWTtJQUQzRDtRQUFBLHFFQXlCQztRQWZhLGVBQVMsR0FBdUIsSUFBSSxDQUFDOztJQWVuRCxDQUFDO0lBYlUsK0JBQVksR0FBbkIsVUFBb0IsU0FBNkI7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ0kseUJBQU0sR0FBYixjQUFpQixDQUFDO0lBRWxCOztPQUVHO0lBQ0kseUJBQU0sR0FBYixjQUFpQixDQUFDO0lBdkJRLFFBQVE7UUFEckMsT0FBTztPQUNzQixRQUFRLENBd0JyQztJQUFELGVBQUM7Q0F4QkQsQUF3QkMsQ0F4QjhDLEVBQUUsQ0FBQyxTQUFTLEdBd0IxRDtrQkF4QjZCLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRnJhbWV3b3JrSW50ZXJmYWNlIGZyb20gJy4vRnJhbWV3b3JrSW50ZXJmYWNlJztcblxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOe7g+S5oOexu++8jOmcgOe7keWumuWcqOmihOWItuS9k+mhtuWxguS+m+ahhuaetuiwg+eUqOOAguWtkOexu+W/hemhu+WunueOsOWvueW6lOeahOaOpeWPo+OAglxuICpcbiAqIOazqO+8muacrOadpeeUqGludGVyZmFjZeWwseihjO+8jOS9huaYr+imgeaDs+mAmui/h2dldENvbXBvbmVudOiOt+WPluWunuS+i++8jOWPquiDveeUqOexu+OAglxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUHJhY3RpY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIOW8guatpeWIneWni+WMlue7g+S5oO+8jOWmguaenOWHuueOsOW8guW4uO+8jOiusOW+l3JlamVjdOOAglxuICAgICAqIEBwYXJhbSBjb3Vyc2VJZCDor77nqItpZFxuICAgICAqIEBwYXJhbSBwcmFjdGljZUlkIOe7g+S5oOe0ouW8le+8iOS7jjDlvIDlp4vvvIlcbiAgICAgKiBAcGFyYW0gcHJhY3RpY2VEYXRhIOW9k+WJjee7g+S5oOaVsOaNrlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBpbml0KGNvdXJzZUlkOiBzdHJpbmcsIHByYWN0aWNlSWQ6IHN0cmluZywgcHJhY3RpY2VEYXRhOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgcHJvdGVjdGVkIGZyYW1ld29yazogRnJhbWV3b3JrSW50ZXJmYWNlID0gbnVsbDtcblxuICAgIHB1YmxpYyBzZXRGcmFtZXdvcmsoZnJhbWV3b3JrOiBGcmFtZXdvcmtJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5mcmFtZXdvcmsgPSBmcmFtZXdvcms7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57uD5Lmg6ZqQ6JeP77yM5b2T5LuO5b2T5YmN57uD5Lmg5YiH5Yiw5LiL5LiA5Liq57uD5Lmg5pe277yM5Y6f57uD5Lmg5Lya5Zue6LCDb25IaWRlXG4gICAgICovXG4gICAgcHVibGljIG9uSGlkZSgpIHt9XG5cbiAgICAvKipcbiAgICAgKiDnu4PkuaDmmL7npLrvvIzlvZPnu4PkuaDlsZXnpLrvvIjljIXmi6zpppbkuKrnu4PkuaDlgJLorqHml7blkI7mmL7npLrvvIzlj4rliIfmjaLmiJDlvZPliY3nu4PkuaDvvInml7bvvIzkvJrlm57osINvblNob3dcbiAgICAgKi9cbiAgICBwdWJsaWMgb25TaG93KCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/WritingRightStar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c434dk8Y+pOQ4SMkMZpXeW6', 'WritingRightStar');
// Writing/Script/WritingRightStar.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WritingSmallDot_1 = require("./WritingSmallDot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DOT_SHOWN_DURATION = [0.2, 0.4];
var STAR_SHOWN_DURATION = DOT_SHOWN_DURATION[0] + DOT_SHOWN_DURATION[1];
var DOT_SHOWN_SCALE = [1.5, 1];
var STAR_ROTATION = 360 * 2;
var TURN_ON_DELAY = 0.1;
/**
 * 显示的星星
 */
var WritingRightStar = /** @class */ (function (_super) {
    __extends(WritingRightStar, _super);
    function WritingRightStar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rightStarShown = null;
        _this._isTriggered = false;
        return _this;
    }
    WritingRightStar_1 = WritingRightStar;
    /**
     * 设置显示音频
     * @param rightStarShown
     */
    WritingRightStar.prototype.setAudio = function (rightStarShown) {
        this.rightStarShown = rightStarShown;
    };
    /**
     * 获取星星展示动画
     */
    WritingRightStar.getStarShownAction = function () {
        return cc.spawn(cc.sequence(cc.scaleTo(DOT_SHOWN_DURATION[0], DOT_SHOWN_SCALE[0], DOT_SHOWN_SCALE[0]), cc.scaleTo(DOT_SHOWN_DURATION[1], DOT_SHOWN_SCALE[1], DOT_SHOWN_SCALE[1])), 
        // 随机多旋转0-90度
        cc.rotateTo(STAR_SHOWN_DURATION, STAR_ROTATION + 90 * Math.random()));
    };
    WritingRightStar.prototype.isTriggered = function () {
        return this._isTriggered;
    };
    /**
     * 重置
     */
    WritingRightStar.prototype.reset = function () {
        this._isTriggered = false;
        this.node.active = false;
    };
    /**
     * 点亮该星星，旋转出来，周边小点也同时渐显出来
     */
    WritingRightStar.prototype.turnOn = function () {
        this.node.scale = 0;
        this.node.active = true;
        this.node.runAction(cc.sequence(cc.delayTime(TURN_ON_DELAY), WritingRightStar_1.getStarShownAction()));
        cc.audioEngine.play(this.rightStarShown, false, 1);
        this._isTriggered = true;
    };
    var WritingRightStar_1;
    WritingRightStar = WritingRightStar_1 = __decorate([
        ccclass
    ], WritingRightStar);
    return WritingRightStar;
}(WritingSmallDot_1.default));
exports.default = WritingRightStar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9Xcml0aW5nUmlnaHRTdGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUUxQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRTVDLElBQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEMsSUFBTSxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRSxJQUFNLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqQyxJQUFNLGFBQWEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUUxQjs7R0FFRztBQUVIO0lBQThDLG9DQUFlO0lBRDdEO1FBQUEscUVBb0RDO1FBbERHLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQXdCNUIsa0JBQVksR0FBRyxLQUFLLENBQUM7O0lBMEJqQyxDQUFDO3lCQW5Eb0IsZ0JBQWdCO0lBR2pDOzs7T0FHRztJQUNJLG1DQUFRLEdBQWYsVUFBZ0IsY0FBNEI7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ1csbUNBQWtCLEdBQWhDO1FBQ0ksT0FBTyxFQUFFLENBQUMsS0FBSyxDQUNYLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pFLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM1RTtRQUNELGFBQWE7UUFDYixFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLGFBQWEsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQ3ZFLENBQUM7SUFDTixDQUFDO0lBSU0sc0NBQVcsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0NBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsa0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7SUFsRGdCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBbURwQztJQUFELHVCQUFDO0NBbkRELEFBbURDLENBbkQ2Qyx5QkFBZSxHQW1ENUQ7a0JBbkRvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3JpdGluZ1NtYWxsRG90IGZyb20gJy4vV3JpdGluZ1NtYWxsRG90JztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgRE9UX1NIT1dOX0RVUkFUSU9OID0gWzAuMiwgMC40XTtcbmNvbnN0IFNUQVJfU0hPV05fRFVSQVRJT04gPSBET1RfU0hPV05fRFVSQVRJT05bMF0gKyBET1RfU0hPV05fRFVSQVRJT05bMV07XG5jb25zdCBET1RfU0hPV05fU0NBTEUgPSBbMS41LCAxXTtcbmNvbnN0IFNUQVJfUk9UQVRJT04gPSAzNjAgKiAyO1xuY29uc3QgVFVSTl9PTl9ERUxBWSA9IDAuMTtcblxuLyoqXG4gKiDmmL7npLrnmoTmmJ/mmJ9cbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyaXRpbmdSaWdodFN0YXIgZXh0ZW5kcyBXcml0aW5nU21hbGxEb3Qge1xuICAgIHJpZ2h0U3RhclNob3duOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICog6K6+572u5pi+56S66Z+z6aKRXG4gICAgICogQHBhcmFtIHJpZ2h0U3RhclNob3duIFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRBdWRpbyhyaWdodFN0YXJTaG93bjogY2MuQXVkaW9DbGlwKSB7XG4gICAgICAgIHRoaXMucmlnaHRTdGFyU2hvd24gPSByaWdodFN0YXJTaG93bjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmmJ/mmJ/lsZXnpLrliqjnlLtcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldFN0YXJTaG93bkFjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNjLnNwYXduKFxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhET1RfU0hPV05fRFVSQVRJT05bMF0sIERPVF9TSE9XTl9TQ0FMRVswXSwgRE9UX1NIT1dOX1NDQUxFWzBdKSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKERPVF9TSE9XTl9EVVJBVElPTlsxXSwgRE9UX1NIT1dOX1NDQUxFWzFdLCBET1RfU0hPV05fU0NBTEVbMV0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLy8g6ZqP5py65aSa5peL6L2sMC05MOW6plxuICAgICAgICAgICAgY2Mucm90YXRlVG8oU1RBUl9TSE9XTl9EVVJBVElPTiwgU1RBUl9ST1RBVElPTiArIDkwICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc1RyaWdnZXJlZCA9IGZhbHNlO1xuXG4gICAgcHVibGljIGlzVHJpZ2dlcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNUcmlnZ2VyZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeN572uXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9pc1RyaWdnZXJlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDngrnkuq7or6XmmJ/mmJ/vvIzml4vovazlh7rmnaXvvIzlkajovrnlsI/ngrnkuZ/lkIzml7bmuJDmmL7lh7rmnaVcbiAgICAgKi9cbiAgICBwdWJsaWMgdHVybk9uKCkge1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoVFVSTl9PTl9ERUxBWSksIFdyaXRpbmdSaWdodFN0YXIuZ2V0U3RhclNob3duQWN0aW9uKCkpKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnJpZ2h0U3RhclNob3duLCBmYWxzZSwgMSk7XG5cbiAgICAgICAgdGhpcy5faXNUcmlnZ2VyZWQgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/FrameworkInterface.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3c9928s79IOLGNzmCmESAV', 'FrameworkInterface');
// Writing/Script/FrameworkInterface.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9GcmFtZXdvcmtJbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5qGG5p625o6l5Y+j77yM5o+Q5L6b57uZ57uD5Lmg5Zue6LCDXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBGcmFtZXdvcmtJbnRlcmZhY2Uge1xuICAgIC8qKlxuICAgICAqIOiOt+W+l+aYn+aYn++8jOWmguaenOaYn+aYn+aVsOavlOeOsOWcqOeahOWkmu+8jOS8muaSreaUvuiOt+W+l+WKqOeUu+OAguWQjOaXtu+8jOabtOaWsOaAu+aIkOe7qeOAglxuICAgICAqIFxuICAgICAqIEBwYXJhbSBudW0g5pif5pif5pWwXG4gICAgICovXG4gICAgb25TdGFyR290KG51bTogbnVtYmVyKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIOe7g+S5oOWujOaIkO+8jOahhuaetuS8muaSreaUvui/h+WFs+WKqOeUu1xuICAgICAqL1xuICAgIG9uUHJhY3RpY2VGaW5pc2hlZCgpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICog6ZSB5a6a57uD5Lmg5YiH5o2i77yM6LCD55So5ZCO77yM55So5oi354K55Ye75YiH5o2i57uD5Lmg5oyJ6ZKu5LiN5Lya5YiH5o2i44CCXG4gICAgICogXG4gICAgICog6YCa5bi455So5Zyo5pKt5pS+5ZCE5Liq57uD5Lmg55qE6YCa5YWz5pWI5p6c77yM5oiW5byV5a+85Yqo55S75pe244CCXG4gICAgICogXG4gICAgICog5b2T6LCD55SodW5sb2NrU3dpdGNo5oiWb25QcmFjdGljZUZpbmlzaGVk5YiH5o2i57uD5Lmg5ZCO77yM5Lya6Ieq5Yqo6Kej6ZSB44CCXG4gICAgICogXG4gICAgICog5rOo5oSP77yabG9ja1N3aXRjaOW/hemhu+mFjeWQiHVubG9ja1N3aXRjaOaIkOWvueS9v+eUqFxuICAgICAqIEBwYXJhbSBzeW5jQnRuU2hvdyDmmK/lkKblkIzmraXmmL7npLov6ZqQ6JeP5o6J5YiH5o2i5oyJ6ZKu77yM6buY6K6k5ZCM5q2lXG4gICAgICovXG4gICAgbG9ja1N3aXRjaChzeW5jQnRuU2hvdz86IGJvb2xlYW4pOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICog6Kej6ZSB57uD5Lmg5YiH5o2iXG4gICAgICogQHBhcmFtIHN5bmNCdG5TaG93IOaYr+WQpuWQjOatpeaYvuekui/pmpDol4/mjonliIfmjaLmjInpkq7vvIzpu5jorqTlkIzmraVcbiAgICAgKi9cbiAgICB1bmxvY2tTd2l0Y2goc3luY0J0blNob3c/OiBib29sZWFuKTogdm9pZDtcblxuICAgIHNob3dUYWJCYXIoKTogdm9pZDtcbiAgICBcbiAgICBoaWRlVGFiQmFyKCk6IHZvaWQ7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/Writing.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73186T7eDZAtK7tWjHJ/+0V', 'Writing');
// Writing/Script/Writing.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WritingChar_1 = require("./WritingChar");
var WritingDot_1 = require("./WritingDot");
var Practice_1 = require("./Practice");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DOT_SHOWN_GAP = 0.15;
var GUIDE_SHOWN_DURATION = WritingDot_1.default.LAST_DOT_SHOWN_DURATION;
// 两点的最小距离，如果小于这个，则不画
var DRAW_DOT_DISTANCE_MIN = 30;
// 描红练习状态定义
var WritingState;
(function (WritingState) {
    /**
     * 初始状态
     */
    WritingState[WritingState["Init"] = 0] = "Init";
    /**
     * 初始显示动画播放中
     */
    WritingState[WritingState["ShownAnimating"] = 1] = "ShownAnimating";
    /**
     * 可拖动
     */
    WritingState[WritingState["Dragable"] = 2] = "Dragable";
    /**
     * 拖动完成动画播放中
     */
    WritingState[WritingState["DragCompleteAnimating"] = 3] = "DragCompleteAnimating";
    /**
     * 可绘制
     */
    WritingState[WritingState["Paintable"] = 4] = "Paintable";
    /**
     * 绘制完成动画播放中
     */
    WritingState[WritingState["PaintCompleteAnimating"] = 5] = "PaintCompleteAnimating";
    /**
     * 已完成
     */
    WritingState[WritingState["Finished"] = 6] = "Finished";
})(WritingState || (WritingState = {}));
/**
 * 描红练习
 */
var Writing = /** @class */ (function (_super) {
    __extends(Writing, _super);
    function Writing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rocket = null;
        _this.pen = null;
        _this.charContainer = null;
        _this.jellyAudio = null;
        _this.mainDotShown = null;
        _this.mainDotErased = null;
        _this.starFinishedShown = null;
        _this.rightStarShown = null;
        _this.drawPanel = null;
        _this.state = WritingState.Init;
        _this.char = null;
        _this.currentLine = -1;
        _this.nextDot = -1;
        _this.text = null;
        // 对应的音频
        _this.spelling = null;
        _this.isFirstLineGuided = false;
        // 最后一次有效拖动触发位置
        _this.lastDragAvailablePosition = null;
        _this.drawPath = [];
        _this.isDrawingReset = false;
        return _this;
    }
    Writing.prototype.onLoad = function () {
        this.init("", "", "a");
    };
    Writing.prototype.init = function (courseId, practiceId, practiceData) {
        var _this = this;
        // 数据就是预制体的名称（字符）
        this.text = practiceData;
        return new Promise(function (resolve, reject) {
            cc.loader.loadRes("Writing/" + practiceData, cc.Prefab, function (error, res) {
                if (error) {
                    console.error('描红练习加载失败', practiceData, error);
                    reject(error);
                    return;
                }
                if (!_this.isValid) {
                    cc.loader.release(res);
                    reject();
                    return;
                }
                var charNode = cc.instantiate(res);
                charNode.parent = _this.charContainer;
                _this.char = charNode.getComponent(WritingChar_1.default);
                // 提前初始化节点并设置音效
                _this.char.getLines().forEach(function (line) {
                    line.forEach(function (dot) {
                        dot.setAudios(_this.mainDotShown, _this.mainDotErased, _this.starFinishedShown, _this.rightStarShown);
                    });
                });
                // 初始化画板
                _this.drawPanel = _this.char.drawPanel;
            });
        });
    };
    Writing.prototype.onShow = function () {
        var _this = this;
        // 在首次显示时启动动画
        if (!this.isFirstLineGuided) {
            this.isFirstLineGuided = true;
            // 播完音频再播动画
            this.playCharAudio().then(function () {
                if (_this.state === WritingState.Init) {
                    _this.state = WritingState.ShownAnimating;
                    _this.playCharAnimation().then(function () {
                        if (_this.state === WritingState.ShownAnimating) {
                            _this.state = WritingState.Dragable;
                            _this.animNextLine();
                        }
                        else {
                            console.error('显示动画完成时状态不是初始动画播放中状态', _this.state);
                        }
                    });
                }
                else {
                    console.error('初始引导时状态不是初始状态', _this.state);
                }
            });
        }
    };
    /**
     * 播放字母音频
     */
    Writing.prototype.playCharAudio = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.spelling) {
                cc.audioEngine.setFinishCallback(cc.audioEngine.play(_this.spelling, false, 1), resolve);
            }
            else {
                console.error('缺少音频资源', _this.text);
                resolve();
            }
        });
    };
    /**
     * 播放字母动画
     */
    Writing.prototype.playCharAnimation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var upDur = 0.2, downDur = 0.15, flatDur = 0.15, elasticDur = 0.2;
            var originY = _this.char.node.y;
            var scaleX = [0.8, 1, 1.2, 0.9, 1.1, 1];
            var scaleY = [1.2, 1, 0.8, 1.1, 0.9, 1];
            //果冻效果
            _this.char.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(function () {
                //播放果冻音效
                cc.audioEngine.play(_this.jellyAudio, false, 1);
            }), cc.spawn(
            // 变瘦向上飞，然后掉下来变扁，再弹一下恢复
            cc.sequence(cc.moveTo(upDur, 0, originY + 100), cc.moveTo(downDur, 0, originY)
            // cc.delayTime(flatDur),
            // cc.moveTo(elasticDur, 0, originY + 50),
            // cc.moveTo(elasticDur, 0, originY)
            ), cc.sequence(cc.scaleTo(upDur, scaleX[0], scaleY[0]), cc.scaleTo(downDur, scaleX[1], scaleY[1]), cc.scaleTo(flatDur, scaleX[2], scaleY[2]), cc.scaleTo(elasticDur, scaleX[3], scaleY[3]), cc.scaleTo(elasticDur, scaleX[4], scaleY[4]), cc.scaleTo(elasticDur, scaleX[5], scaleY[5])), cc.sequence(cc.delayTime(upDur + downDur + flatDur + elasticDur * 3 + 0.5), // 多等0.5秒再到下一步
            cc.callFunc(resolve)))));
        });
    };
    /**
     * 引导下一笔，动画显示各点，并将火箭或画笔移到第一个点上
     */
    Writing.prototype.animNextLine = function () {
        var _this = this;
        var lines = this.char.getLines();
        var nextLine = this.currentLine + 1;
        if (nextLine >= 0 && nextLine < lines.length) {
            this.currentLine = nextLine;
            this.nextDot = 0;
            // 仅对引导节点做动画
            var line_1 = lines[nextLine];
            line_1.forEach(function (dot, index) {
                _this.scheduleOnce(function () {
                    dot.showGuide();
                    if (index === line_1.length - 1) {
                        // 火箭或笔和最后一个点同步出来
                        var guideNode = _this.state === WritingState.Dragable ? _this.rocket : _this.pen;
                        if (line_1.length > 1) {
                            guideNode.scale = 0;
                            // 计算前两个引导点的方向
                            var firstNode = line_1[0].node;
                            var firstNodePosition = firstNode.getPosition();
                            var dir0To1 = cc.v2(line_1[1].node.getPosition().sub(firstNodePosition));
                            if (_this.state === WritingState.Dragable) {
                                // 沿着前两个节点的反向移动半个火箭的距离
                                guideNode.setPosition(guideNode.parent
                                    .convertToNodeSpaceAR(firstNode.parent.convertToWorldSpaceAR(firstNodePosition))
                                    .sub(dir0To1.mul(guideNode.height / 2 / dir0To1.mag())));
                                // 火箭的角度是要变的
                                guideNode.angle = -_this.vectorsToDegress(dir0To1);
                            }
                            else {
                                guideNode.setPosition(guideNode.parent
                                    .convertToNodeSpaceAR(firstNode.parent.convertToWorldSpaceAR(firstNodePosition))
                                    .sub(dir0To1.mul(10 / dir0To1.mag())));
                            }
                            guideNode.opacity = 255;
                            guideNode.active = true;
                            guideNode.runAction(cc.sequence(cc.scaleTo(GUIDE_SHOWN_DURATION, 1, 1).easing(cc.easeBackOut()), cc.callFunc(function () {
                                // 引导节点（火箭/笔）显示出来后，再设置触摸回调
                                if (_this.state === WritingState.Dragable) {
                                    _this.switchRocketListener(true);
                                }
                                else if (_this.state === WritingState.Paintable) {
                                    _this.switchPenListener(true);
                                    _this.char.showDrawPanel();
                                }
                                else {
                                    console.error('引导节点动画显示完毕时不是可操作状态', _this.state);
                                }
                            })));
                        }
                        else {
                            // 如果只有一个点，隐藏引导工具图片，星星闪烁
                            // 直接移到引导点上
                            guideNode.position = guideNode.parent.convertToNodeSpaceAR(dot.node.parent.convertToWorldSpaceAR(dot.node.position));
                            if (_this.state === WritingState.Dragable) {
                                // 火箭的话，一个点的不显示
                                guideNode.opacity = 0;
                            }
                            guideNode.active = true;
                            _this.scheduleOnce(function () {
                                if (_this.state === WritingState.Dragable || _this.state === WritingState.Paintable) {
                                    // 隐藏引导节点图片后，再设置触摸回调
                                    if (_this.state === WritingState.Dragable) {
                                        _this.switchRocketListener(true);
                                    }
                                    else {
                                        _this.switchPenListener(true);
                                        _this.char.showDrawPanel();
                                    }
                                    // 星星节点缩放
                                    var duration = 1, gap = 0.3;
                                    dot.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(duration / 2, 1.1), cc.scaleTo(duration / 2, 1), cc.delayTime(gap))));
                                }
                                else {
                                    console.error('引导节点动画显示完毕时不是可操作状态', _this.state);
                                }
                            }, 1);
                        }
                    }
                }, DOT_SHOWN_GAP * index);
            });
        }
        else {
            console.error('当前已经是最后一条线了，没有下一条做动画');
        }
    };
    /**
     * 向量转角度值
     * @param dirVec 待计算向量
     */
    Writing.prototype.vectorsToDegress = function (dirVec) {
        var comVec = cc.v2(0, 1); // 水平向右的对比向量
        var radian = dirVec.signAngle(comVec); // 求方向向量与对比向量间的弧度
        var degree = cc.misc.radiansToDegrees(radian); // 将弧度转换为角度
        return degree;
    };
    /**
     * 切换火箭拖拽支持状态
     */
    Writing.prototype.switchRocketListener = function (enabled) {
        if (enabled) {
            this.rocket.on(cc.Node.EventType.TOUCH_START, this.onRocketTouchStart, this);
            this.rocket.on(cc.Node.EventType.TOUCH_MOVE, this.onRocketTouchMove, this);
            this.rocket.on(cc.Node.EventType.TOUCH_CANCEL, this.onRocketTouchEndOrCancel, this);
            this.rocket.on(cc.Node.EventType.TOUCH_END, this.onRocketTouchEndOrCancel, this);
        }
        else {
            this.rocket.off(cc.Node.EventType.TOUCH_START, this.onRocketTouchStart, this);
            this.rocket.off(cc.Node.EventType.TOUCH_MOVE, this.onRocketTouchMove, this);
            this.rocket.off(cc.Node.EventType.TOUCH_CANCEL, this.onRocketTouchEndOrCancel, this);
            this.rocket.off(cc.Node.EventType.TOUCH_END, this.onRocketTouchEndOrCancel, this);
        }
    };
    Writing.prototype.onRocketTouchStart = function (event) {
        // 记录一开始拖拽的坐标，后面手的移动，都和前一次的有效位置比较，沿着轨迹方向的才允许动
        this.lastDragAvailablePosition = event.getLocation();
        var line = this.char.getLines()[this.currentLine];
        if (line && this.nextDot < line.length) {
            if (line.length > 1) {
                // 启动移动动画
                this.rocket.getComponent(cc.Animation).play('rocket_moving');
            }
            else {
                // 只有一个点，点上了就激活
                var next = line[this.nextDot];
                // 取消缩放引导
                next.node.stopAllActions();
                next.turnOn();
                this.nextDot++;
            }
        }
    };
    /**
     * 火箭拖拽，只有移动方向是朝着下一个点的，才动。如果碰到下一个点，点亮。
     * @param event
     */
    Writing.prototype.onRocketTouchMove = function (event) {
        if (this.state !== WritingState.Dragable) {
            console.error('火箭拖拽中状态不对', this.state);
            return;
        }
        // 计算当前移动距离在当前点与下一个点之间的投影，作为新的点
        var line = this.char.getLines()[this.currentLine];
        if (line && this.nextDot < line.length) {
            // 距离上一次有效点的偏移量
            var newLocation = event.getLocation();
            var delta = newLocation.sub(this.lastDragAvailablePosition);
            if (delta.magSqr() === 0) {
                // 位置没变，无需计算
                return;
            }
            var node_1 = this.rocket;
            var next = line[this.nextDot];
            // 当前火箭位置与下一个点的向量
            var dirToNext_1 = cc.v2(next.node.parent
                .convertToWorldSpaceAR(next.node.position)
                .sub(node_1.parent.convertToWorldSpaceAR(node_1.position)));
            // 如果夹角在正负90度范围内，说明新的方向一致，可以移动
            var radian = dirToNext_1.signAngle(delta);
            if (radian > -Math.PI / 2 && radian < Math.PI / 2) {
                // 按投影方向移动指定距离
                var projection = delta.project(dirToNext_1);
                var newPos_1 = node_1.getPosition().add(projection);
                if (projection.magSqr() >= dirToNext_1.magSqr()) {
                    // 防止超出下一个点
                    newPos_1 = node_1.parent.convertToNodeSpaceAR(next.node.parent.convertToWorldSpaceAR(next.node.getPosition()));
                    // 已经到了下一个点，激活
                    next.turnOn();
                    this.nextDot++;
                }
                else {
                    // 针对绑定在下一个点的未点亮的星星或小点，若已经过，则点亮之
                    next.getRelativeDots()
                        .filter(function (dot) { return !dot.isTriggered(); })
                        .forEach(function (dot) {
                        // 新位置指向星星或小点的向量
                        var dirToDot = cc.v2(dot.node.parent
                            .convertToWorldSpaceAR(dot.node.getPosition())
                            .sub(node_1.parent.convertToWorldSpaceAR(newPos_1)));
                        var turnOn = false;
                        if (dirToDot.magSqr() === 0) {
                            // 就在星星或小点上面，点亮
                            turnOn = true;
                        }
                        else {
                            // 看新位置与下一个点及星星或小点的两个向量夹角，若是直角或钝角，说明已经经过了，可以点亮
                            // 因为火箭是沿着两个引导点之间的线段移动的，可以直接用之前位置与下一个点的向量代替最新点与下一个点的向量来计算夹角
                            var radianOfDotAndNext = dirToNext_1.signAngle(dirToDot);
                            turnOn = radianOfDotAndNext <= -Math.PI / 2 || radianOfDotAndNext >= Math.PI / 2;
                        }
                        if (turnOn) {
                            dot.turnOn();
                        }
                    });
                }
                node_1.x = newPos_1.x;
                node_1.y = newPos_1.y;
                // 火箭的角度由前一个点指向当前目标点
                node_1.angle = -this.vectorsToDegress(dirToNext_1);
                // 更新拖拽位置
                this.lastDragAvailablePosition = newLocation;
            }
            else {
                console.debug('反向不变化', radian, dirToNext_1.magSqr());
            }
        }
        else {
            console.warn('当前笔画已经拖完了');
        }
    };
    /**
     * 火箭拖拽完毕，如果最后一点已经触发，转下一条线
     */
    Writing.prototype.onRocketTouchEndOrCancel = function () {
        var _this = this;
        if (this.state !== WritingState.Dragable) {
            console.error('火箭拖拽完毕状态不对', this.state);
            return;
        }
        // 切换到空闲状态动画
        this.rocket.getComponent(cc.Animation).play('rocket_idel');
        var lines = this.char.getLines();
        if (this.nextDot === lines[this.currentLine].length) {
            // 抬手时当前笔画的最后一笔已激活，触发下一笔动画
            this.switchRocketListener(false);
            this.rocket.active = false;
            if (this.currentLine < lines.length - 1) {
                // 还没到最后一条线
                this.animNextLine();
            }
            else {
                this.state = WritingState.DragCompleteAnimating;
                this.playCharAnimation()
                    // 播完动画后播下音频
                    .then(this.playCharAudio.bind(this))
                    .then(function () {
                    if (_this.state === WritingState.DragCompleteAnimating) {
                        // 重置所有点
                        _this.char.reset();
                        _this.currentLine = -1;
                        _this.nextDot = -1;
                        // 引导画线
                        _this.state = WritingState.Paintable;
                        _this.animNextLine();
                    }
                    else {
                        console.error('拖拽动画显示完毕时状态不对', _this.state);
                    }
                });
            }
        }
    };
    /**
     * 切换画笔拖拽支持状态
     */
    Writing.prototype.switchPenListener = function (enabled) {
        if (enabled) {
            this.pen.on(cc.Node.EventType.TOUCH_START, this.onPenTouchStart, this);
            this.pen.on(cc.Node.EventType.TOUCH_MOVE, this.onPenTouchMove, this);
            this.pen.on(cc.Node.EventType.TOUCH_CANCEL, this.onPenTouchEndOrCancel, this);
            this.pen.on(cc.Node.EventType.TOUCH_END, this.onPenTouchEndOrCancel, this);
        }
        else {
            this.pen.off(cc.Node.EventType.TOUCH_START, this.onPenTouchStart, this);
            this.pen.off(cc.Node.EventType.TOUCH_MOVE, this.onPenTouchMove, this);
            this.pen.off(cc.Node.EventType.TOUCH_CANCEL, this.onPenTouchEndOrCancel, this);
            this.pen.off(cc.Node.EventType.TOUCH_END, this.onPenTouchEndOrCancel, this);
        }
    };
    Writing.prototype.onPenTouchStart = function () {
        // 新的按下时，重置标记
        this.isDrawingReset = false;
        if (!Array.isArray(this.drawPath[this.currentLine])) {
            // 起始点是画笔所在
            // TODO 非2.1.2版本，要切换到节点坐标系，2.1.2有bug
            // https://forum.cocos.com/t/cocos-creator-2-1-2-graphics/80904/8
            this.drawPath[this.currentLine] = [
                // 将画笔所在点作为第一个触摸点
                // this.char.drawPanel.node.convertToNodeSpaceAR(this.pen.parent.convertToWorldSpaceAR(this.pen.position)),
                this.pen.parent.convertToWorldSpaceAR(this.pen.getPosition()),
            ];
        }
        var line = this.char.getLines()[this.currentLine];
        if (line && line.length === 1 && this.nextDot < line.length) {
            // 取消缩放动效
            line[0].node.stopAllActions();
            // 只有一个点，点上了就激活
            this.onPenTouchMove({ getDelta: function () { return cc.v2(1, 1); } });
        }
    };
    Writing.prototype.onPenTouchMove = function (event) {
        if (this.state !== WritingState.Paintable) {
            console.error('画笔绘制中状态不对', this.state);
            return;
        }
        if (this.isDrawingReset) {
            // 已重置，不处理
            return;
        }
        if (event.getDelta().magSqr() === 0) {
            // 位置没变化，不画
            return;
        }
        var lines = this.char.getLines();
        var line = lines[this.currentLine];
        if (line && this.nextDot < line.length) {
            var next = line[this.nextDot];
            // TODO 非2.1.2版本，要切换到世界坐标系，2.1.2有bug
            // const nextPosD = this.drawPanel.node.convertToNodeSpaceAR(next.node.parent.convertToWorldSpaceAR(next.node.position));
            var nextPosW = next.node.parent.convertToWorldSpaceAR(next.node.getPosition());
            // 计算新点的位置
            var linePath = this.drawPath[this.currentLine];
            var delta = event.getDelta();
            // 转换成投影路线上的点
            var prevPosD = linePath[linePath.length - 1];
            var dirToNext = cc.v2(nextPosW.sub(prevPosD));
            var dirToNextLength = dirToNext.mag();
            var projectionLength = 0;
            var projection = void 0;
            if (dirToNextLength != 0) {
                projection = delta.project(dirToNext);
                projectionLength = projection.mag();
                if (projectionLength === 0) {
                    // 在投影方向上没有移动，不处理
                    return;
                }
            }
            else {
                // 对于一个点的情况，由于起始点就在下一个点上，dirToNextLength为0
                projection = cc.v2(0, 0);
            }
            var newPosD = prevPosD.add(projection);
            var distanceToNext = nextPosW.sub(newPosD).mag();
            var radian = dirToNextLength != 0 ? dirToNext.signAngle(projection) : 0;
            if (radian > -Math.PI / 2 && radian < Math.PI / 2) {
                // 方向相同
                if (dirToNextLength <= projectionLength) {
                    // 超出了，切下一个点
                    newPosD = nextPosW;
                    this.nextDot++;
                    // 防止一笔画太远，之前没被擦掉
                    if (!next.isTriggered()) {
                        next.erase();
                    }
                }
                else if (!next.isTriggered() && distanceToNext < this.drawPanel.lineWidth / 2) {
                    // 画到了，提前擦除，并防止重复擦
                    next.erase();
                }
            }
            else {
                // 方向相反，看下距离有没有超过前后两个点距离（如果一个点还没激活，就看有没有超过画笔起始点和第一个点的距离）
                // const distanceOfPrevAndNext =
                //     this.nextDot > 0
                //         ? next.node.position.sub(line[this.nextDot - 1].node.position).mag()
                //         : 0;
                //         // : linePath[0].sub(newPosD).mag();
                // if (distanceToNext > distanceOfPrevAndNext + this.drawPanel.lineWidth / 2) {
                //     console.warn(
                //         '超过了，重置当前线段',
                //         `距离下一个 ${distanceToNext}`,
                //         `上一个点是 ${this.nextDot > 0 ? '实际点' : '初始点'}`,
                //         distanceOfPrevAndNext
                //     );
                //     this.isDrawingReset = true;
                //     this.switchPenListener(false);
                //     this.pen.active = false;
                //     this.nextDot = -1;
                //     this.currentLine -= 1;
                //     this.drawPath.pop();
                //     this.draw(this.drawPath);
                //     this.animNextLine();
                //     return;
                // }
                //反向，改为直接返回
                return;
            }
            // 根据当前偏移，在graphic上对应位置画，并移动画笔
            this.drawPath[this.currentLine].push(newPosD);
            this.draw(this.drawPath);
            // TODO 非2.1.2版本，要切换到世界坐标系，2.1.2有bug
            // const penPos = this.pen.parent.convertToNodeSpaceAR(this.drawPanel.node.convertToWorldSpaceAR(newPosD));
            var penPos = this.pen.parent.convertToNodeSpaceAR(newPosD);
            this.pen.x = penPos.x;
            this.pen.y = penPos.y;
            // 如果激活了最后一个点，要转下一笔了
            if (this.nextDot === lines[this.currentLine].length) {
                // 先设置重置标记，不处理后续的事件
                this.turnToNextDraw(lines);
            }
        }
        else {
            console.warn('当前笔画已经都画到了');
        }
    };
    /**
     * 转向下一笔的绘制或直接完成
     * @param lines 所有笔画
     */
    Writing.prototype.turnToNextDraw = function (lines) {
        var _this = this;
        this.isDrawingReset = true;
        this.switchPenListener(false);
        this.pen.active = false;
        if (this.currentLine < lines.length - 1) {
            // 还没到最后一条线，动画引导
            this.animNextLine();
        }
        else {
            this.framework && this.framework.lockSwitch();
            this.state = WritingState.PaintCompleteAnimating;
            // 填充画布
            this.char
                .fill()
                .then(this.playCharAnimation.bind(this))
                // 动画完播下音频再通关
                .then(this.playCharAudio.bind(this))
                .then(function () {
                if (_this.state === WritingState.PaintCompleteAnimating) {
                    _this.state = WritingState.Finished;
                    console.debug('描红完成');
                    if (_this.framework) {
                        _this.framework.onStarGot(3);
                        _this.framework.onPracticeFinished();
                    }
                }
                else {
                    console.error('绘制动画显示完毕时状态不对', _this.state);
                }
            });
        }
    };
    Writing.prototype.onPenTouchEndOrCancel = function () {
        if (this.state !== WritingState.Paintable) {
            console.error('画笔绘制完毕状态不对', this.state);
            return;
        }
        if (this.isDrawingReset) {
            // 已重置，不处理
            return;
        }
        var lines = this.char.getLines();
        var line = lines[this.currentLine];
        if (line && this.nextDot < line.length && this.nextDot === lines[this.currentLine].length - 1) {
            var next = line[this.nextDot];
            if (next.isTriggered()) {
                // 抬笔时，最后一个点已擦除了，只是没画到，自动切
                this.nextDot++;
                this.turnToNextDraw(lines);
            }
        }
    };
    /**
     * 绘制路径，每次都是清除画布后重新绘制完整路径，这样stroke几次，drawcall才会增加多少
     * @param path
     */
    Writing.prototype.draw = function (path) {
        var _this = this;
        this.drawPanel.clear();
        path.forEach(function (line) {
            if (line.length === 2 && line[0].equals(line[1])) {
                _this.drawPanel.arc(line[0].x, line[0].y, 10, 0, 360);
            }
            else {
                var prevValidDot_1 = null;
                line.forEach(function (dot, index) {
                    if (index === 0) {
                        _this.drawPanel.moveTo(dot.x, dot.y);
                    }
                    else {
                        if (index < line.length - 1) {
                            // 过滤距离太近的若干个点
                            if (dot.sub(prevValidDot_1).mag() < DRAW_DOT_DISTANCE_MIN) {
                                // console.debug('skip', dot.x, dot.y);
                                return;
                            }
                        }
                        _this.drawPanel.lineTo(dot.x, dot.y);
                    }
                    prevValidDot_1 = dot;
                });
            }
            _this.drawPanel.stroke();
        });
    };
    __decorate([
        property(cc.Node)
    ], Writing.prototype, "rocket", void 0);
    __decorate([
        property(cc.Node)
    ], Writing.prototype, "pen", void 0);
    __decorate([
        property(cc.Node)
    ], Writing.prototype, "charContainer", void 0);
    __decorate([
        property({ tooltip: '字母果冻效果音效', type: cc.AudioClip })
    ], Writing.prototype, "jellyAudio", void 0);
    __decorate([
        property({ tooltip: '黄色点出现音效', type: cc.AudioClip })
    ], Writing.prototype, "mainDotShown", void 0);
    __decorate([
        property({ tooltip: '黄色点擦除音效', type: cc.AudioClip })
    ], Writing.prototype, "mainDotErased", void 0);
    __decorate([
        property({ tooltip: '彩色星星出现音效', type: cc.AudioClip })
    ], Writing.prototype, "starFinishedShown", void 0);
    __decorate([
        property({ tooltip: '白色星星出现音效', type: cc.AudioClip })
    ], Writing.prototype, "rightStarShown", void 0);
    Writing = __decorate([
        ccclass
    ], Writing);
    return Writing;
}(Practice_1.default));
exports.default = Writing;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9Xcml0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QywyQ0FBc0M7QUFDdEMsdUNBQWtDO0FBRTVCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzNCLElBQU0sb0JBQW9CLEdBQUcsb0JBQVUsQ0FBQyx1QkFBdUIsQ0FBQztBQUVoRSxxQkFBcUI7QUFDckIsSUFBTSxxQkFBcUIsR0FBRyxFQUFFLENBQUM7QUFFakMsV0FBVztBQUNYLElBQVcsWUE2QlY7QUE3QkQsV0FBVyxZQUFZO0lBQ25COztPQUVHO0lBQ0gsK0NBQUksQ0FBQTtJQUNKOztPQUVHO0lBQ0gsbUVBQWMsQ0FBQTtJQUNkOztPQUVHO0lBQ0gsdURBQVEsQ0FBQTtJQUNSOztPQUVHO0lBQ0gsaUZBQXFCLENBQUE7SUFDckI7O09BRUc7SUFDSCx5REFBUyxDQUFBO0lBQ1Q7O09BRUc7SUFDSCxtRkFBc0IsQ0FBQTtJQUN0Qjs7T0FFRztJQUNILHVEQUFRLENBQUE7QUFDWixDQUFDLEVBN0JVLFlBQVksS0FBWixZQUFZLFFBNkJ0QjtBQUVEOztHQUVHO0FBRUg7SUFBcUMsMkJBQVE7SUFEN0M7UUFBQSxxRUE0ckJDO1FBenJCRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFHbkMsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUd2QyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFF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bEM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7a0RBQ2xCO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3NEQUNmO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO21EQUNsQjtJQXZCbkIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTJyQjNCO0lBQUQsY0FBQztDQTNyQkQsQUEyckJDLENBM3JCb0Msa0JBQVEsR0EyckI1QztrQkEzckJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdyaXRpbmdDaGFyIGZyb20gJy4vV3JpdGluZ0NoYXInO1xuaW1wb3J0IFdyaXRpbmdEb3QgZnJvbSAnLi9Xcml0aW5nRG90JztcbmltcG9ydCBQcmFjdGljZSBmcm9tICcuL1ByYWN0aWNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgRE9UX1NIT1dOX0dBUCA9IDAuMTU7XG5jb25zdCBHVUlERV9TSE9XTl9EVVJBVElPTiA9IFdyaXRpbmdEb3QuTEFTVF9ET1RfU0hPV05fRFVSQVRJT047XG5cbi8vIOS4pOeCueeahOacgOWwj+i3neemu++8jOWmguaenOWwj+S6jui/meS4qu+8jOWImeS4jeeUu1xuY29uc3QgRFJBV19ET1RfRElTVEFOQ0VfTUlOID0gMzA7XG5cbi8vIOaPj+e6oue7g+S5oOeKtuaAgeWumuS5iVxuY29uc3QgZW51bSBXcml0aW5nU3RhdGUge1xuICAgIC8qKlxuICAgICAqIOWIneWni+eKtuaAgVxuICAgICAqL1xuICAgIEluaXQsXG4gICAgLyoqXG4gICAgICog5Yid5aeL5pi+56S65Yqo55S75pKt5pS+5LitXG4gICAgICovXG4gICAgU2hvd25BbmltYXRpbmcsXG4gICAgLyoqXG4gICAgICog5Y+v5ouW5YqoXG4gICAgICovXG4gICAgRHJhZ2FibGUsXG4gICAgLyoqXG4gICAgICog5ouW5Yqo5a6M5oiQ5Yqo55S75pKt5pS+5LitXG4gICAgICovXG4gICAgRHJhZ0NvbXBsZXRlQW5pbWF0aW5nLFxuICAgIC8qKlxuICAgICAqIOWPr+e7mOWItlxuICAgICAqL1xuICAgIFBhaW50YWJsZSxcbiAgICAvKipcbiAgICAgKiDnu5jliLblrozmiJDliqjnlLvmkq3mlL7kuK1cbiAgICAgKi9cbiAgICBQYWludENvbXBsZXRlQW5pbWF0aW5nLFxuICAgIC8qKlxuICAgICAqIOW3suWujOaIkFxuICAgICAqL1xuICAgIEZpbmlzaGVkLFxufVxuXG4vKipcbiAqIOaPj+e6oue7g+S5oFxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JpdGluZyBleHRlbmRzIFByYWN0aWNlIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByb2NrZXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGVuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYXJDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogJ+Wtl+avjeaenOWGu+aViOaenOmfs+aViCcsIHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGplbGx5QXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn6buE6Imy54K55Ye6546w6Z+z5pWIJywgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgbWFpbkRvdFNob3duOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogJ+m7hOiJsueCueaTpumZpOmfs+aViCcsIHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIG1haW5Eb3RFcmFzZWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn5b2p6Imy5pif5pif5Ye6546w6Z+z5pWIJywgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc3RhckZpbmlzaGVkU2hvd246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn55m96Imy5pif5pif5Ye6546w6Z+z5pWIJywgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgcmlnaHRTdGFyU2hvd246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBkcmF3UGFuZWw6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGU6IFdyaXRpbmdTdGF0ZSA9IFdyaXRpbmdTdGF0ZS5Jbml0O1xuXG4gICAgcHJpdmF0ZSBjaGFyOiBXcml0aW5nQ2hhciA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJyZW50TGluZSA9IC0xO1xuICAgIHByaXZhdGUgbmV4dERvdCA9IC0xO1xuXG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmcgPSBudWxsO1xuICAgIC8vIOWvueW6lOeahOmfs+mikVxuICAgIHByaXZhdGUgc3BlbGxpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdChcIlwiLCBcIlwiLCBcImFcIilcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdChjb3Vyc2VJZDogc3RyaW5nLCBwcmFjdGljZUlkOiBzdHJpbmcsIHByYWN0aWNlRGF0YTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIOaVsOaNruWwseaYr+mihOWItuS9k+eahOWQjeensO+8iOWtl+espu+8iVxuICAgICAgICB0aGlzLnRleHQgPSBwcmFjdGljZURhdGE7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGBXcml0aW5nLyR7cHJhY3RpY2VEYXRhfWAsIGNjLlByZWZhYiwgKGVycm9yOiBFcnJvciwgcmVzOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5o+P57qi57uD5Lmg5Yqg6L295aSx6LSlJywgcHJhY3RpY2VEYXRhLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyk7XG4gICAgICAgICAgICAgICAgY2hhck5vZGUucGFyZW50ID0gdGhpcy5jaGFyQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhciA9IGNoYXJOb2RlLmdldENvbXBvbmVudChXcml0aW5nQ2hhcik7XG4gICAgICAgICAgICAgICAgLy8g5o+Q5YmN5Yid5aeL5YyW6IqC54K55bm26K6+572u6Z+z5pWIXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyLmdldExpbmVzKCkuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmZvckVhY2goKGRvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90LnNldEF1ZGlvcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5Eb3RTaG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5Eb3RFcmFzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFyRmluaXNoZWRTaG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U3RhclNob3duXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbnlLvmnb9cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYW5lbCA9IHRoaXMuY2hhci5kcmF3UGFuZWw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0ZpcnN0TGluZUd1aWRlZCA9IGZhbHNlO1xuXG4gICAgcHVibGljIG9uU2hvdygpIHtcbiAgICAgICAgLy8g5Zyo6aaW5qyh5pi+56S65pe25ZCv5Yqo5Yqo55S7XG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0TGluZUd1aWRlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TGluZUd1aWRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyDmkq3lrozpn7PpopHlho3mkq3liqjnlLtcbiAgICAgICAgICAgIHRoaXMucGxheUNoYXJBdWRpbygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBXcml0aW5nU3RhdGUuSW5pdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gV3JpdGluZ1N0YXRlLlNob3duQW5pbWF0aW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDaGFyQW5pbWF0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLlNob3duQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFdyaXRpbmdTdGF0ZS5EcmFnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1OZXh0TGluZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmmL7npLrliqjnlLvlrozmiJDml7bnirbmgIHkuI3mmK/liJ3lp4vliqjnlLvmkq3mlL7kuK3nirbmgIEnLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5Yid5aeL5byV5a+85pe254q25oCB5LiN5piv5Yid5aeL54q25oCBJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL7lrZfmr43pn7PpopFcbiAgICAgKi9cbiAgICBwcml2YXRlIHBsYXlDaGFyQXVkaW8oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3BlbGxpbmcpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc3BlbGxpbmcsIGZhbHNlLCAxKSwgcmVzb2x2ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+e8uuWwkemfs+mikei1hOa6kCcsIHRoaXMudGV4dCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL7lrZfmr43liqjnlLtcbiAgICAgKi9cbiAgICBwcml2YXRlIHBsYXlDaGFyQW5pbWF0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwRHVyID0gMC4yLFxuICAgICAgICAgICAgICAgIGRvd25EdXIgPSAwLjE1LFxuICAgICAgICAgICAgICAgIGZsYXREdXIgPSAwLjE1LFxuICAgICAgICAgICAgICAgIGVsYXN0aWNEdXIgPSAwLjI7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5ZID0gdGhpcy5jaGFyLm5vZGUueTtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IFswLjgsIDEsIDEuMiwgMC45LCAxLjEsIDFdO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gWzEuMiwgMSwgMC44LCAxLjEsIDAuOSwgMV07XG4gICAgICAgICAgICAvL+aenOWGu+aViOaenFxuICAgICAgICAgICAgdGhpcy5jaGFyLm5vZGUucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4zKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/mkq3mlL7mnpzlhrvpn7PmlYhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5qZWxseUF1ZGlvLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPmOeYpuWQkeS4iumjnu+8jOeEtuWQjuaOieS4i+adpeWPmOaJge+8jOWGjeW8ueS4gOS4i+aBouWkjVxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKHVwRHVyLCAwLCBvcmlnaW5ZICsgMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oZG93bkR1ciwgMCwgb3JpZ2luWSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5kZWxheVRpbWUoZmxhdER1ciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubW92ZVRvKGVsYXN0aWNEdXIsIDAsIG9yaWdpblkgKyA1MCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubW92ZVRvKGVsYXN0aWNEdXIsIDAsIG9yaWdpblkpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyh1cER1ciwgc2NhbGVYWzBdLCBzY2FsZVlbMF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZG93bkR1ciwgc2NhbGVYWzFdLCBzY2FsZVlbMV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZmxhdER1ciwgc2NhbGVYWzJdLCBzY2FsZVlbMl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZWxhc3RpY0R1ciwgc2NhbGVYWzNdLCBzY2FsZVlbM10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZWxhc3RpY0R1ciwgc2NhbGVYWzRdLCBzY2FsZVlbNF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZWxhc3RpY0R1ciwgc2NhbGVYWzVdLCBzY2FsZVlbNV0pXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKHVwRHVyICsgZG93bkR1ciArIGZsYXREdXIgKyBlbGFzdGljRHVyICogMyArIDAuNSksIC8vIOWkmuetiTAuNeenkuWGjeWIsOS4i+S4gOatpVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKHJlc29sdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvJXlr7zkuIvkuIDnrJTvvIzliqjnlLvmmL7npLrlkITngrnvvIzlubblsIbngavnrq3miJbnlLvnrJTnp7vliLDnrKzkuIDkuKrngrnkuIpcbiAgICAgKi9cbiAgICBwcml2YXRlIGFuaW1OZXh0TGluZSgpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSB0aGlzLmNoYXIuZ2V0TGluZXMoKTtcbiAgICAgICAgY29uc3QgbmV4dExpbmUgPSB0aGlzLmN1cnJlbnRMaW5lICsgMTtcbiAgICAgICAgaWYgKG5leHRMaW5lID49IDAgJiYgbmV4dExpbmUgPCBsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpbmUgPSBuZXh0TGluZTtcbiAgICAgICAgICAgIHRoaXMubmV4dERvdCA9IDA7XG4gICAgICAgICAgICAvLyDku4Xlr7nlvJXlr7zoioLngrnlgZrliqjnlLtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tuZXh0TGluZV07XG5cbiAgICAgICAgICAgIGxpbmUuZm9yRWFjaCgoZG90LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG90LnNob3dHdWlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGxpbmUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g54Gr566t5oiW56yU5ZKM5pyA5ZCO5LiA5Liq54K55ZCM5q2l5Ye65p2lXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBndWlkZU5vZGUgPSB0aGlzLnN0YXRlID09PSBXcml0aW5nU3RhdGUuRHJhZ2FibGUgPyB0aGlzLnJvY2tldCA6IHRoaXMucGVuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVOb2RlLnNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDorqHnrpfliY3kuKTkuKrlvJXlr7zngrnnmoTmlrnlkJFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE5vZGUgPSBsaW5lWzBdLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3ROb2RlUG9zaXRpb24gPSBmaXJzdE5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXIwVG8xID0gY2MudjIobGluZVsxXS5ub2RlLmdldFBvc2l0aW9uKCkuc3ViKGZpcnN0Tm9kZVBvc2l0aW9uKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLkRyYWdhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOayv+edgOWJjeS4pOS4quiKgueCueeahOWPjeWQkeenu+WKqOWNiuS4queBq+eureeahOi3neemu1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUuc2V0UG9zaXRpb24oZ3VpZGVOb2RlLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKGZpcnN0Tm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGZpcnN0Tm9kZVBvc2l0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIoZGlyMFRvMS5tdWwoZ3VpZGVOb2RlLmhlaWdodCAvIDIgLyBkaXIwVG8xLm1hZygpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDngavnrq3nmoTop5LluqbmmK/opoHlj5jnmoRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVOb2RlLmFuZ2xlID0gLXRoaXMudmVjdG9yc1RvRGVncmVzcyhkaXIwVG8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUuc2V0UG9zaXRpb24oZ3VpZGVOb2RlLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKGZpcnN0Tm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGZpcnN0Tm9kZVBvc2l0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIoZGlyMFRvMS5tdWwoMTAgLyBkaXIwVG8xLm1hZygpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oR1VJREVfU0hPV05fRFVSQVRJT04sIDEsIDEpLmVhc2luZyhjYy5lYXNlQmFja091dCgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlvJXlr7zoioLngrnvvIjngavnrq0v56yU77yJ5pi+56S65Ye65p2l5ZCO77yM5YaN6K6+572u6Kem5pG45Zue6LCDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFdyaXRpbmdTdGF0ZS5EcmFnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFJvY2tldExpc3RlbmVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLlBhaW50YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFBlbkxpc3RlbmVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXIuc2hvd0RyYXdQYW5lbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W8leWvvOiKgueCueWKqOeUu+aYvuekuuWujOavleaXtuS4jeaYr+WPr+aTjeS9nOeKtuaAgScsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlj6rmnInkuIDkuKrngrnvvIzpmpDol4/lvJXlr7zlt6Xlhbflm77niYfvvIzmmJ/mmJ/pl6rng4FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnm7TmjqXnp7vliLDlvJXlr7zngrnkuIpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUucG9zaXRpb24gPSBndWlkZU5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Qubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGRvdC5ub2RlLnBvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFdyaXRpbmdTdGF0ZS5EcmFnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDngavnrq3nmoTor53vvIzkuIDkuKrngrnnmoTkuI3mmL7npLpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVOb2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBXcml0aW5nU3RhdGUuRHJhZ2FibGUgfHwgdGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLlBhaW50YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6ZqQ6JeP5byV5a+86IqC54K55Zu+54mH5ZCO77yM5YaN6K6+572u6Kem5pG45Zue6LCDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLkRyYWdhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hSb2NrZXRMaXN0ZW5lcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hQZW5MaXN0ZW5lcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXIuc2hvd0RyYXdQYW5lbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmmJ/mmJ/oioLngrnnvKnmlL5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXAgPSAwLjM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Qubm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKGR1cmF0aW9uIC8gMiwgMS4xKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oZHVyYXRpb24gLyAyLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZShnYXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5byV5a+86IqC54K55Yqo55S75pi+56S65a6M5q+V5pe25LiN5piv5Y+v5pON5L2c54q25oCBJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIERPVF9TSE9XTl9HQVAgKiBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W9k+WJjeW3sue7j+aYr+acgOWQjuS4gOadoee6v+S6hu+8jOayoeacieS4i+S4gOadoeWBmuWKqOeUuycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCR6YeP6L2s6KeS5bqm5YC8XG4gICAgICogQHBhcmFtIGRpclZlYyDlvoXorqHnrpflkJHph49cbiAgICAgKi9cbiAgICBwcml2YXRlIHZlY3RvcnNUb0RlZ3Jlc3MoZGlyVmVjOiBjYy5WZWMyKSB7XG4gICAgICAgIGNvbnN0IGNvbVZlYyA9IGNjLnYyKDAsIDEpOyAvLyDmsLTlubPlkJHlj7PnmoTlr7nmr5TlkJHph49cbiAgICAgICAgY29uc3QgcmFkaWFuID0gZGlyVmVjLnNpZ25BbmdsZShjb21WZWMpOyAvLyDmsYLmlrnlkJHlkJHph4/kuI7lr7nmr5TlkJHph4/pl7TnmoTlvKfluqZcbiAgICAgICAgY29uc3QgZGVncmVlID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKHJhZGlhbik7IC8vIOWwhuW8p+W6pui9rOaNouS4uuinkuW6plxuICAgICAgICByZXR1cm4gZGVncmVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIh+aNoueBq+eureaLluaLveaUr+aMgeeKtuaAgVxuICAgICAqL1xuICAgIHByaXZhdGUgc3dpdGNoUm9ja2V0TGlzdGVuZXIoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5yb2NrZXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Sb2NrZXRUb3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucm9ja2V0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Sb2NrZXRUb3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yb2NrZXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uUm9ja2V0VG91Y2hFbmRPckNhbmNlbCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJvY2tldC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Sb2NrZXRUb3VjaEVuZE9yQ2FuY2VsLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9ja2V0Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblJvY2tldFRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yb2NrZXQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Sb2NrZXRUb3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yb2NrZXQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblJvY2tldFRvdWNoRW5kT3JDYW5jZWwsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yb2NrZXQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblJvY2tldFRvdWNoRW5kT3JDYW5jZWwsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5pyA5ZCO5LiA5qyh5pyJ5pWI5ouW5Yqo6Kem5Y+R5L2N572uXG4gICAgcHJpdmF0ZSBsYXN0RHJhZ0F2YWlsYWJsZVBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcblxuICAgIHByaXZhdGUgb25Sb2NrZXRUb3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIC8vIOiusOW9leS4gOW8gOWni+aLluaLveeahOWdkOagh++8jOWQjumdouaJi+eahOenu+WKqO+8jOmDveWSjOWJjeS4gOasoeeahOacieaViOS9jee9ruavlOi+g++8jOayv+edgOi9qOi/ueaWueWQkeeahOaJjeWFgeiuuOWKqFxuICAgICAgICB0aGlzLmxhc3REcmFnQXZhaWxhYmxlUG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLmNoYXIuZ2V0TGluZXMoKVt0aGlzLmN1cnJlbnRMaW5lXTtcbiAgICAgICAgaWYgKGxpbmUgJiYgdGhpcy5uZXh0RG90IDwgbGluZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAvLyDlkK/liqjnp7vliqjliqjnlLtcbiAgICAgICAgICAgICAgICB0aGlzLnJvY2tldC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCdyb2NrZXRfbW92aW5nJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWPquacieS4gOS4queCue+8jOeCueS4iuS6huWwsea/gOa0u1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBsaW5lW3RoaXMubmV4dERvdF07XG4gICAgICAgICAgICAgICAgLy8g5Y+W5raI57yp5pS+5byV5a+8XG4gICAgICAgICAgICAgICAgbmV4dC5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgbmV4dC50dXJuT24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHREb3QrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeBq+eureaLluaLve+8jOWPquacieenu+WKqOaWueWQkeaYr+acneedgOS4i+S4gOS4queCueeahO+8jOaJjeWKqOOAguWmguaenOeisOWIsOS4i+S4gOS4queCue+8jOeCueS6ruOAglxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgb25Sb2NrZXRUb3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFdyaXRpbmdTdGF0ZS5EcmFnYWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign54Gr566t5ouW5ou95Lit54q25oCB5LiN5a+5JywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorqHnrpflvZPliY3np7vliqjot53nprvlnKjlvZPliY3ngrnkuI7kuIvkuIDkuKrngrnkuYvpl7TnmoTmipXlvbHvvIzkvZzkuLrmlrDnmoTngrlcbiAgICAgICAgY29uc3QgbGluZSA9IHRoaXMuY2hhci5nZXRMaW5lcygpW3RoaXMuY3VycmVudExpbmVdO1xuICAgICAgICBpZiAobGluZSAmJiB0aGlzLm5leHREb3QgPCBsaW5lLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8g6Led56a75LiK5LiA5qyh5pyJ5pWI54K555qE5YGP56e76YePXG4gICAgICAgICAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IG5ld0xvY2F0aW9uLnN1Yih0aGlzLmxhc3REcmFnQXZhaWxhYmxlUG9zaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVsdGEubWFnU3FyKCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyDkvY3nva7msqHlj5jvvIzml6DpnIDorqHnrpdcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnJvY2tldDtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBsaW5lW3RoaXMubmV4dERvdF07XG5cbiAgICAgICAgICAgIC8vIOW9k+WJjeeBq+eureS9jee9ruS4juS4i+S4gOS4queCueeahOWQkemHj1xuICAgICAgICAgICAgY29uc3QgZGlyVG9OZXh0ID0gY2MudjIoXG4gICAgICAgICAgICAgICAgbmV4dC5ub2RlLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAuY29udmVydFRvV29ybGRTcGFjZUFSKG5leHQubm9kZS5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgLnN1Yihub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbikpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyDlpoLmnpzlpLnop5LlnKjmraPotJ85MOW6puiMg+WbtOWGhe+8jOivtOaYjuaWsOeahOaWueWQkeS4gOiHtO+8jOWPr+S7peenu+WKqFxuICAgICAgICAgICAgY29uc3QgcmFkaWFuID0gZGlyVG9OZXh0LnNpZ25BbmdsZShkZWx0YSk7XG4gICAgICAgICAgICBpZiAocmFkaWFuID4gLU1hdGguUEkgLyAyICYmIHJhZGlhbiA8IE1hdGguUEkgLyAyKSB7XG4gICAgICAgICAgICAgICAgLy8g5oyJ5oqV5b2x5pa55ZCR56e75Yqo5oyH5a6a6Led56a7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IGRlbHRhLnByb2plY3QoZGlyVG9OZXh0KTtcblxuICAgICAgICAgICAgICAgIGxldCBuZXdQb3MgPSBub2RlLmdldFBvc2l0aW9uKCkuYWRkKHByb2plY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0aW9uLm1hZ1NxcigpID49IGRpclRvTmV4dC5tYWdTcXIoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDpmLLmraLotoXlh7rkuIvkuIDkuKrngrlcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Lm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihuZXh0Lm5vZGUuZ2V0UG9zaXRpb24oKSlcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDlt7Lnu4/liLDkuobkuIvkuIDkuKrngrnvvIzmv4DmtLtcbiAgICAgICAgICAgICAgICAgICAgbmV4dC50dXJuT24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0RG90Kys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZKI5a+557uR5a6a5Zyo5LiL5LiA5Liq54K555qE5pyq54K55Lqu55qE5pif5pif5oiW5bCP54K577yM6Iul5bey57uP6L+H77yM5YiZ54K55Lqu5LmLXG4gICAgICAgICAgICAgICAgICAgIG5leHQuZ2V0UmVsYXRpdmVEb3RzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRvdCkgPT4gIWRvdC5pc1RyaWdnZXJlZCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGRvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaWsOS9jee9ruaMh+WQkeaYn+aYn+aIluWwj+eCueeahOWQkemHj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpclRvRG90ID0gY2MudjIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdC5ub2RlLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihkb3Qubm9kZS5nZXRQb3NpdGlvbigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yihub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobmV3UG9zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR1cm5PbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJUb0RvdC5tYWdTcXIoKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlsLHlnKjmmJ/mmJ/miJblsI/ngrnkuIrpnaLvvIzngrnkuq5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVybk9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnnIvmlrDkvY3nva7kuI7kuIvkuIDkuKrngrnlj4rmmJ/mmJ/miJblsI/ngrnnmoTkuKTkuKrlkJHph4/lpLnop5LvvIzoi6XmmK/nm7Top5LmiJbpkp3op5LvvIzor7TmmI7lt7Lnu4/nu4/ov4fkuobvvIzlj6/ku6Xngrnkuq5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Zug5Li654Gr566t5piv5rK/552A5Lik5Liq5byV5a+854K55LmL6Ze055qE57q/5q6156e75Yqo55qE77yM5Y+v5Lul55u05o6l55So5LmL5YmN5L2N572u5LiO5LiL5LiA5Liq54K555qE5ZCR6YeP5Luj5pu/5pyA5paw54K55LiO5LiL5LiA5Liq54K555qE5ZCR6YeP5p2l6K6h566X5aS56KeSXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlhbk9mRG90QW5kTmV4dCA9IGRpclRvTmV4dC5zaWduQW5nbGUoZGlyVG9Eb3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJuT24gPSByYWRpYW5PZkRvdEFuZE5leHQgPD0gLU1hdGguUEkgLyAyIHx8IHJhZGlhbk9mRG90QW5kTmV4dCA+PSBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHVybk9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdC50dXJuT24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS54ID0gbmV3UG9zLng7XG4gICAgICAgICAgICAgICAgbm9kZS55ID0gbmV3UG9zLnk7XG5cbiAgICAgICAgICAgICAgICAvLyDngavnrq3nmoTop5LluqbnlLHliY3kuIDkuKrngrnmjIflkJHlvZPliY3nm67moIfngrlcbiAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gLXRoaXMudmVjdG9yc1RvRGVncmVzcyhkaXJUb05leHQpO1xuXG4gICAgICAgICAgICAgICAgLy8g5pu05paw5ouW5ou95L2N572uXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RHJhZ0F2YWlsYWJsZVBvc2l0aW9uID0gbmV3TG9jYXRpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ+WPjeWQkeS4jeWPmOWMlicsIHJhZGlhbiwgZGlyVG9OZXh0Lm1hZ1NxcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign5b2T5YmN56yU55S75bey57uP5ouW5a6M5LqGJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDngavnrq3mi5bmi73lrozmr5XvvIzlpoLmnpzmnIDlkI7kuIDngrnlt7Lnu4/op6blj5HvvIzovazkuIvkuIDmnaHnur9cbiAgICAgKi9cbiAgICBwcml2YXRlIG9uUm9ja2V0VG91Y2hFbmRPckNhbmNlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFdyaXRpbmdTdGF0ZS5EcmFnYWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign54Gr566t5ouW5ou95a6M5q+V54q25oCB5LiN5a+5JywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliIfmjaLliLDnqbrpl7LnirbmgIHliqjnlLtcbiAgICAgICAgdGhpcy5yb2NrZXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgncm9ja2V0X2lkZWwnKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IHRoaXMuY2hhci5nZXRMaW5lcygpO1xuICAgICAgICBpZiAodGhpcy5uZXh0RG90ID09PSBsaW5lc1t0aGlzLmN1cnJlbnRMaW5lXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIOaKrOaJi+aXtuW9k+WJjeeslOeUu+eahOacgOWQjuS4gOeslOW3sua/gOa0u++8jOinpuWPkeS4i+S4gOeslOWKqOeUu1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hSb2NrZXRMaXN0ZW5lcihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnJvY2tldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMaW5lIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIC8vIOi/mOayoeWIsOacgOWQjuS4gOadoee6v1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbU5leHRMaW5lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBXcml0aW5nU3RhdGUuRHJhZ0NvbXBsZXRlQW5pbWF0aW5nO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUNoYXJBbmltYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAvLyDmkq3lrozliqjnlLvlkI7mkq3kuIvpn7PpopFcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odGhpcy5wbGF5Q2hhckF1ZGlvLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBXcml0aW5nU3RhdGUuRHJhZ0NvbXBsZXRlQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YeN572u5omA5pyJ54K5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGluZSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dERvdCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW8leWvvOeUu+e6v1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBXcml0aW5nU3RhdGUuUGFpbnRhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbU5leHRMaW5lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aLluaLveWKqOeUu+aYvuekuuWujOavleaXtueKtuaAgeS4jeWvuScsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIh+aNoueUu+eslOaLluaLveaUr+aMgeeKtuaAgVxuICAgICAqL1xuICAgIHByaXZhdGUgc3dpdGNoUGVuTGlzdGVuZXIoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5wZW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25QZW5Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGVuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25QZW5Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wZW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uUGVuVG91Y2hFbmRPckNhbmNlbCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBlbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25QZW5Ub3VjaEVuZE9yQ2FuY2VsLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGVuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblBlblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wZW4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25QZW5Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wZW4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblBlblRvdWNoRW5kT3JDYW5jZWwsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wZW4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblBlblRvdWNoRW5kT3JDYW5jZWwsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3UGF0aDogY2MuVmVjMltdW10gPSBbXTtcbiAgICBwcml2YXRlIGlzRHJhd2luZ1Jlc2V0ID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIG9uUGVuVG91Y2hTdGFydCgpIHtcbiAgICAgICAgLy8g5paw55qE5oyJ5LiL5pe277yM6YeN572u5qCH6K6wXG4gICAgICAgIHRoaXMuaXNEcmF3aW5nUmVzZXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5kcmF3UGF0aFt0aGlzLmN1cnJlbnRMaW5lXSkpIHtcbiAgICAgICAgICAgIC8vIOi1t+Wni+eCueaYr+eUu+eslOaJgOWcqFxuICAgICAgICAgICAgLy8gVE9ETyDpnZ4yLjEuMueJiOacrO+8jOimgeWIh+aNouWIsOiKgueCueWdkOagh+ezu++8jDIuMS4y5pyJYnVnXG4gICAgICAgICAgICAvLyBodHRwczovL2ZvcnVtLmNvY29zLmNvbS90L2NvY29zLWNyZWF0b3ItMi0xLTItZ3JhcGhpY3MvODA5MDQvOFxuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aFt0aGlzLmN1cnJlbnRMaW5lXSA9IFtcbiAgICAgICAgICAgICAgICAvLyDlsIbnlLvnrJTmiYDlnKjngrnkvZzkuLrnrKzkuIDkuKrop6bmkbjngrlcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNoYXIuZHJhd1BhbmVsLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5wZW4ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBlbi5wb3NpdGlvbikpLFxuICAgICAgICAgICAgICAgIHRoaXMucGVuLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wZW4uZ2V0UG9zaXRpb24oKSksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluZSA9IHRoaXMuY2hhci5nZXRMaW5lcygpW3RoaXMuY3VycmVudExpbmVdO1xuICAgICAgICBpZiAobGluZSAmJiBsaW5lLmxlbmd0aCA9PT0gMSAmJiB0aGlzLm5leHREb3QgPCBsaW5lLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8g5Y+W5raI57yp5pS+5Yqo5pWIXG4gICAgICAgICAgICBsaW5lWzBdLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIC8vIOWPquacieS4gOS4queCue+8jOeCueS4iuS6huWwsea/gOa0u1xuICAgICAgICAgICAgdGhpcy5vblBlblRvdWNoTW92ZSh7IGdldERlbHRhOiAoKSA9PiBjYy52MigxLCAxKSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25QZW5Ub3VjaE1vdmUoZXZlbnQ6IHsgZ2V0RGVsdGE6ICgpID0+IGNjLlZlYzIgfSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gV3JpdGluZ1N0YXRlLlBhaW50YWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign55S756yU57uY5Yi25Lit54q25oCB5LiN5a+5JywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0RyYXdpbmdSZXNldCkge1xuICAgICAgICAgICAgLy8g5bey6YeN572u77yM5LiN5aSE55CGXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuZ2V0RGVsdGEoKS5tYWdTcXIoKSA9PT0gMCkge1xuICAgICAgICAgICAgLy8g5L2N572u5rKh5Y+Y5YyW77yM5LiN55S7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5lcyA9IHRoaXMuY2hhci5nZXRMaW5lcygpO1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbdGhpcy5jdXJyZW50TGluZV07XG4gICAgICAgIGlmIChsaW5lICYmIHRoaXMubmV4dERvdCA8IGxpbmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gbGluZVt0aGlzLm5leHREb3RdO1xuICAgICAgICAgICAgLy8gVE9ETyDpnZ4yLjEuMueJiOacrO+8jOimgeWIh+aNouWIsOS4lueVjOWdkOagh+ezu++8jDIuMS4y5pyJYnVnXG4gICAgICAgICAgICAvLyBjb25zdCBuZXh0UG9zRCA9IHRoaXMuZHJhd1BhbmVsLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobmV4dC5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobmV4dC5ub2RlLnBvc2l0aW9uKSk7XG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zVyA9IG5leHQubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5leHQubm9kZS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIC8vIOiuoeeul+aWsOeCueeahOS9jee9rlxuICAgICAgICAgICAgY29uc3QgbGluZVBhdGggPSB0aGlzLmRyYXdQYXRoW3RoaXMuY3VycmVudExpbmVdO1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBldmVudC5nZXREZWx0YSgpO1xuXG4gICAgICAgICAgICAvLyDovazmjaLmiJDmipXlvbHot6/nur/kuIrnmoTngrlcbiAgICAgICAgICAgIGNvbnN0IHByZXZQb3NEID0gbGluZVBhdGhbbGluZVBhdGgubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCBkaXJUb05leHQgPSBjYy52MihuZXh0UG9zVy5zdWIocHJldlBvc0QpKTtcbiAgICAgICAgICAgIGNvbnN0IGRpclRvTmV4dExlbmd0aCA9IGRpclRvTmV4dC5tYWcoKTtcblxuICAgICAgICAgICAgbGV0IHByb2plY3Rpb25MZW5ndGggPSAwO1xuICAgICAgICAgICAgbGV0IHByb2plY3Rpb246IGNjLlZlYzI7XG4gICAgICAgICAgICBpZiAoZGlyVG9OZXh0TGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uID0gZGVsdGEucHJvamVjdChkaXJUb05leHQpO1xuICAgICAgICAgICAgICAgIHByb2plY3Rpb25MZW5ndGggPSBwcm9qZWN0aW9uLm1hZygpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0aW9uTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWcqOaKleW9seaWueWQkeS4iuayoeacieenu+WKqO+8jOS4jeWkhOeQhlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlr7nkuo7kuIDkuKrngrnnmoTmg4XlhrXvvIznlLHkuo7otbflp4vngrnlsLHlnKjkuIvkuIDkuKrngrnkuIrvvIxkaXJUb05leHRMZW5ndGjkuLowXG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbiA9IGNjLnYyKDAsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbmV3UG9zRCA9IHByZXZQb3NELmFkZChwcm9qZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlVG9OZXh0ID0gbmV4dFBvc1cuc3ViKG5ld1Bvc0QpLm1hZygpO1xuICAgICAgICAgICAgY29uc3QgcmFkaWFuID0gZGlyVG9OZXh0TGVuZ3RoICE9IDAgPyBkaXJUb05leHQuc2lnbkFuZ2xlKHByb2plY3Rpb24pIDogMDtcbiAgICAgICAgICAgIGlmIChyYWRpYW4gPiAtTWF0aC5QSSAvIDIgJiYgcmFkaWFuIDwgTWF0aC5QSSAvIDIpIHtcbiAgICAgICAgICAgICAgICAvLyDmlrnlkJHnm7jlkIxcbiAgICAgICAgICAgICAgICBpZiAoZGlyVG9OZXh0TGVuZ3RoIDw9IHByb2plY3Rpb25MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6LaF5Ye65LqG77yM5YiH5LiL5LiA5Liq54K5XG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc0QgPSBuZXh0UG9zVztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0RG90Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g6Ziy5q2i5LiA56yU55S75aSq6L+c77yM5LmL5YmN5rKh6KKr5pOm5o6JXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dC5pc1RyaWdnZXJlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmVyYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFuZXh0LmlzVHJpZ2dlcmVkKCkgJiYgZGlzdGFuY2VUb05leHQgPCB0aGlzLmRyYXdQYW5lbC5saW5lV2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOeUu+WIsOS6hu+8jOaPkOWJjeaTpumZpO+8jOW5tumYsuatoumHjeWkjeaTplxuICAgICAgICAgICAgICAgICAgICBuZXh0LmVyYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDmlrnlkJHnm7jlj43vvIznnIvkuIvot53nprvmnInmsqHmnInotoXov4fliY3lkI7kuKTkuKrngrnot53nprvvvIjlpoLmnpzkuIDkuKrngrnov5jmsqHmv4DmtLvvvIzlsLHnnIvmnInmsqHmnInotoXov4fnlLvnrJTotbflp4vngrnlkoznrKzkuIDkuKrngrnnmoTot53nprvvvIlcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBkaXN0YW5jZU9mUHJldkFuZE5leHQgPVxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5leHREb3QgPiAwXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA/IG5leHQubm9kZS5wb3NpdGlvbi5zdWIobGluZVt0aGlzLm5leHREb3QgLSAxXS5ub2RlLnBvc2l0aW9uKS5tYWcoKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gOiBsaW5lUGF0aFswXS5zdWIobmV3UG9zRCkubWFnKCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgKGRpc3RhbmNlVG9OZXh0ID4gZGlzdGFuY2VPZlByZXZBbmROZXh0ICsgdGhpcy5kcmF3UGFuZWwubGluZVdpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAn6LaF6L+H5LqG77yM6YeN572u5b2T5YmN57q/5q61JyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGDot53nprvkuIvkuIDkuKogJHtkaXN0YW5jZVRvTmV4dH1gLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYOS4iuS4gOS4queCueaYryAke3RoaXMubmV4dERvdCA+IDAgPyAn5a6e6ZmF54K5JyA6ICfliJ3lp4vngrknfWAsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBkaXN0YW5jZU9mUHJldkFuZE5leHRcbiAgICAgICAgICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5pc0RyYXdpbmdSZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc3dpdGNoUGVuTGlzdGVuZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnBlbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5uZXh0RG90ID0gLTE7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudExpbmUgLT0gMTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5kcmF3UGF0aC5wb3AoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5kcmF3KHRoaXMuZHJhd1BhdGgpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1OZXh0TGluZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAvL+WPjeWQke+8jOaUueS4uuebtOaOpei/lOWbnlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5qC55o2u5b2T5YmN5YGP56e777yM5ZyoZ3JhcGhpY+S4iuWvueW6lOS9jee9rueUu++8jOW5tuenu+WKqOeUu+eslFxuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aFt0aGlzLmN1cnJlbnRMaW5lXS5wdXNoKG5ld1Bvc0QpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KHRoaXMuZHJhd1BhdGgpO1xuICAgICAgICAgICAgLy8gVE9ETyDpnZ4yLjEuMueJiOacrO+8jOimgeWIh+aNouWIsOS4lueVjOWdkOagh+ezu++8jDIuMS4y5pyJYnVnXG4gICAgICAgICAgICAvLyBjb25zdCBwZW5Qb3MgPSB0aGlzLnBlbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5kcmF3UGFuZWwubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobmV3UG9zRCkpO1xuICAgICAgICAgICAgY29uc3QgcGVuUG9zID0gdGhpcy5wZW4ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG5ld1Bvc0QpO1xuICAgICAgICAgICAgdGhpcy5wZW4ueCA9IHBlblBvcy54O1xuICAgICAgICAgICAgdGhpcy5wZW4ueSA9IHBlblBvcy55O1xuXG4gICAgICAgICAgICAvLyDlpoLmnpzmv4DmtLvkuobmnIDlkI7kuIDkuKrngrnvvIzopoHovazkuIvkuIDnrJTkuoZcbiAgICAgICAgICAgIGlmICh0aGlzLm5leHREb3QgPT09IGxpbmVzW3RoaXMuY3VycmVudExpbmVdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIOWFiOiuvue9rumHjee9ruagh+iusO+8jOS4jeWkhOeQhuWQjue7reeahOS6i+S7tlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblRvTmV4dERyYXcobGluZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCflvZPliY3nrJTnlLvlt7Lnu4/pg73nlLvliLDkuoYnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi9rOWQkeS4i+S4gOeslOeahOe7mOWItuaIluebtOaOpeWujOaIkFxuICAgICAqIEBwYXJhbSBsaW5lcyDmiYDmnInnrJTnlLtcbiAgICAgKi9cbiAgICBwcml2YXRlIHR1cm5Ub05leHREcmF3KGxpbmVzOiBXcml0aW5nRG90W11bXSkge1xuICAgICAgICB0aGlzLmlzRHJhd2luZ1Jlc2V0ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnN3aXRjaFBlbkxpc3RlbmVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5wZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMaW5lIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgLy8g6L+Y5rKh5Yiw5pyA5ZCO5LiA5p2h57q/77yM5Yqo55S75byV5a+8XG4gICAgICAgICAgICB0aGlzLmFuaW1OZXh0TGluZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcmFtZXdvcmsgJiYgdGhpcy5mcmFtZXdvcmsubG9ja1N3aXRjaCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFdyaXRpbmdTdGF0ZS5QYWludENvbXBsZXRlQW5pbWF0aW5nO1xuXG4gICAgICAgICAgICAvLyDloavlhYXnlLvluINcbiAgICAgICAgICAgIHRoaXMuY2hhclxuICAgICAgICAgICAgICAgIC5maWxsKClcbiAgICAgICAgICAgICAgICAudGhlbih0aGlzLnBsYXlDaGFyQW5pbWF0aW9uLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgLy8g5Yqo55S75a6M5pKt5LiL6Z+z6aKR5YaN6YCa5YWzXG4gICAgICAgICAgICAgICAgLnRoZW4odGhpcy5wbGF5Q2hhckF1ZGlvLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gV3JpdGluZ1N0YXRlLlBhaW50Q29tcGxldGVBbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBXcml0aW5nU3RhdGUuRmluaXNoZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCfmj4/nuqLlrozmiJAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWV3b3JrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXdvcmsub25TdGFyR290KDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWV3b3JrLm9uUHJhY3RpY2VGaW5pc2hlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign57uY5Yi25Yqo55S75pi+56S65a6M5q+V5pe254q25oCB5LiN5a+5JywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25QZW5Ub3VjaEVuZE9yQ2FuY2VsKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gV3JpdGluZ1N0YXRlLlBhaW50YWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign55S756yU57uY5Yi25a6M5q+V54q25oCB5LiN5a+5JywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0RyYXdpbmdSZXNldCkge1xuICAgICAgICAgICAgLy8g5bey6YeN572u77yM5LiN5aSE55CGXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5lcyA9IHRoaXMuY2hhci5nZXRMaW5lcygpO1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbdGhpcy5jdXJyZW50TGluZV07XG4gICAgICAgIGlmIChsaW5lICYmIHRoaXMubmV4dERvdCA8IGxpbmUubGVuZ3RoICYmIHRoaXMubmV4dERvdCA9PT0gbGluZXNbdGhpcy5jdXJyZW50TGluZV0ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGxpbmVbdGhpcy5uZXh0RG90XTtcbiAgICAgICAgICAgIGlmIChuZXh0LmlzVHJpZ2dlcmVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyDmiqznrJTml7bvvIzmnIDlkI7kuIDkuKrngrnlt7Lmk6bpmaTkuobvvIzlj6rmmK/msqHnlLvliLDvvIzoh6rliqjliIdcbiAgICAgICAgICAgICAgICB0aGlzLm5leHREb3QrKztcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5Ub05leHREcmF3KGxpbmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe7mOWItui3r+W+hO+8jOavj+asoemDveaYr+a4hemZpOeUu+W4g+WQjumHjeaWsOe7mOWItuWujOaVtOi3r+W+hO+8jOi/meagt3N0cm9rZeWHoOasoe+8jGRyYXdjYWxs5omN5Lya5aKe5Yqg5aSa5bCRXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKi9cbiAgICBwcml2YXRlIGRyYXcocGF0aDogY2MuVmVjMltdW10pIHtcbiAgICAgICAgdGhpcy5kcmF3UGFuZWwuY2xlYXIoKTtcbiAgICAgICAgcGF0aC5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPT09IDIgJiYgbGluZVswXS5lcXVhbHMobGluZVsxXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYW5lbC5hcmMobGluZVswXS54LCBsaW5lWzBdLnksIDEwLCAwLCAzNjApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJldlZhbGlkRG90OiBjYy5WZWMyID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsaW5lLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYW5lbC5tb3ZlVG8oZG90LngsIGRvdC55KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGxpbmUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/h+a7pOi3neemu+Wkqui/keeahOiLpeW5suS4queCuVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb3Quc3ViKHByZXZWYWxpZERvdCkubWFnKCkgPCBEUkFXX0RPVF9ESVNUQU5DRV9NSU4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kZWJ1Zygnc2tpcCcsIGRvdC54LCBkb3QueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYW5lbC5saW5lVG8oZG90LngsIGRvdC55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcmV2VmFsaWREb3QgPSBkb3Q7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYXdQYW5lbC5zdHJva2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Base/IProtocol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f142bFnmGRIb5tfUA5sOsnl', 'IProtocol');
// Framwork/Base/IProtocol.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EStadus = void 0;
/** 协议返回状态值 */
var EStadus;
(function (EStadus) {
    EStadus[EStadus["UNKOWN"] = -1] = "UNKOWN";
    EStadus[EStadus["ERROR"] = 100] = "ERROR";
    EStadus[EStadus["OK"] = 200] = "OK";
})(EStadus = exports.EStadus || (exports.EStadus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9CYXNlL0lQcm90b2NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxjQUFjO0FBQ2QsSUFBWSxPQUlYO0FBSkQsV0FBWSxPQUFPO0lBQ2YsMENBQVcsQ0FBQTtJQUNYLHlDQUFXLENBQUE7SUFDWCxtQ0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUlsQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqIOWNj+iurui/lOWbnueKtuaAgeWAvCAqL1xuZXhwb3J0IGVudW0gRVN0YWR1cyB7XG4gICAgVU5LT1dOID0gLTEsXG4gICAgRVJST1IgPSAxMDAsXG4gICAgT0sgPSAyMDBcbn1cblxuLyoqIOWNj+iurui/lOWbnuS9k+aOpeWPoyAqL1xuZXhwb3J0IGludGVyZmFjZSBJUmV0IHtcbiAgICAvKiog54q25oCB56CBICovXG4gICAgc3RhZHVzOiBudW1iZXI7XG5cbiAgICAvKiog6ZSZ6K+v5L+h5oGvICovXG4gICAgbXNnPzogc3RyaW5nO1xuXG4gICAgLyoqIOaVsOaNruS9kyAqL1xuICAgIGRhdGE6IGFueTtcbn1cblxuLyoqIOWNj+iuruivt+axguS9k+aOpeWPoyAqL1xuZXhwb3J0IGludGVyZmFjZSBJUmVxIHtcbiAgICAvKiog6Lev5b6EICovXG4gICAgdXJsOiBzdHJpbmc7XG5cbiAgICAvKiog5Y+C5pWwICovXG4gICAgcGFyYW1hdGVyczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm90b2NvbExpc3RlbmVyIHtcblxuICAgIG9uUmVjZWl2ZVByb3RvY29sKHBhcmFtKTtcblxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Base/BaseProtocol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92c25qXLqRErY6PnM+x3Lrp', 'BaseProtocol');
// Framwork/Base/BaseProtocol.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProtocol = void 0;
var Native_1 = require("./Native");
var IProtocol_1 = require("./IProtocol");
var PlatformUtil_1 = require("../Utils/PlatformUtil");
var TAG = "BaseProtocol";
/**
 * 协议抽象基类
 */
var BaseProtocol = /** @class */ (function () {
    function BaseProtocol() {
        this.Head = "eagle://";
        this.Separator = "?";
        this.Package = "com/eagle/base/jni/";
        this.Class = "PlatformSystem";
        this.Method = "onOpenProtocol";
    }
    BaseProtocol.prototype.openProtocol = function (url) {
        if (!url || !url.split(this.Head)[1]) {
            console.error("[" + TAG + "] openProtocol illegal url " + url);
            return;
        }
        var body = url.split(this.Head)[1];
        var func = body.split(this.Separator)[1];
        var args = body.split(this.Separator)[2] || "null";
        if (PlatformUtil_1.PlatformUtil.isAndroid() || PlatformUtil_1.PlatformUtil.isIOS()) {
            return this.callNative({
                package: this.Package,
                class: this.Class,
                method: this.Method,
                sign: "(SS)S",
                args: [func, args]
            });
        }
        else {
            //TODO when call the other host platform
        }
    };
    BaseProtocol.prototype.callNative = function (params) {
        if (!params) {
            console.error("[" + TAG + "] callNative params is undefined!");
            return;
        }
        var ret = Native_1.Native.instance.call(params);
        try {
            var retObj = JSON.parse(ret);
            if (retObj.stadus == IProtocol_1.EStadus.OK) {
                return retObj.data;
            }
            else {
                console.error("[" + TAG + "] callNative return error msg:" + retObj.msg + "!");
                return;
            }
        }
        catch (error) {
            console.error("[" + TAG + "] callNative ret:" + ret + ", decode exception:" + error + "!");
            return;
        }
    };
    return BaseProtocol;
}());
exports.BaseProtocol = BaseProtocol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9CYXNlL0Jhc2VQcm90b2NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMseUNBQTRDO0FBQzVDLHNEQUFxRDtBQUVyRCxJQUFNLEdBQUcsR0FBRyxjQUFjLENBQUM7QUFFM0I7O0dBRUc7QUFDSDtJQUFBO1FBQ3FCLFNBQUksR0FBRyxVQUFVLENBQUM7UUFDbEIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUVoQixZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDaEMsVUFBSyxHQUFHLGdCQUFnQixDQUFDO1FBQ3pCLFdBQU0sR0FBRyxnQkFBZ0IsQ0FBQztJQXNEL0MsQ0FBQztJQW5EVSxtQ0FBWSxHQUFuQixVQUFvQixHQUFXO1FBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQUksR0FBRyxtQ0FBOEIsR0FBSyxDQUFDLENBQUE7WUFDekQsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFBO1FBRWxELElBQUksMkJBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSwyQkFBWSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2xELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzthQUNyQixDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsd0NBQXdDO1NBRTNDO0lBQ0wsQ0FBQztJQUVPLGlDQUFVLEdBQWxCLFVBQW1CLE1BTWxCO1FBQ0csSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBSSxHQUFHLHNDQUFtQyxDQUFDLENBQUM7WUFDMUQsT0FBTztTQUNWO1FBRUQsSUFBSSxHQUFHLEdBQUcsZUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSTtZQUNBLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFTLENBQUM7WUFDckMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLG1CQUFPLENBQUMsRUFBRSxFQUFFO2dCQUM3QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFJLEdBQUcsc0NBQWlDLE1BQU0sQ0FBQyxHQUFHLE1BQUcsQ0FBQyxDQUFDO2dCQUNyRSxPQUFPO2FBQ1Y7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFJLEdBQUcseUJBQW9CLEdBQUcsMkJBQXNCLEtBQUssTUFBRyxDQUFDLENBQUM7WUFDNUUsT0FBTztTQUNWO0lBQ0wsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0E1REEsQUE0REMsSUFBQTtBQTVEcUIsb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmUgfSBmcm9tIFwiLi9OYXRpdmVcIjtcbmltcG9ydCB7IElSZXQsIEVTdGFkdXMgfSBmcm9tIFwiLi9JUHJvdG9jb2xcIjtcbmltcG9ydCB7IFBsYXRmb3JtVXRpbCB9IGZyb20gXCIuLi9VdGlscy9QbGF0Zm9ybVV0aWxcIjtcblxuY29uc3QgVEFHID0gXCJCYXNlUHJvdG9jb2xcIjtcblxuLyoqXG4gKiDljY/orq7mir3osaHln7rnsbtcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQcm90b2NvbCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBIZWFkID0gXCJlYWdsZTovL1wiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU2VwYXJhdG9yID0gXCI/XCI7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IFBhY2thZ2UgPSBcImNvbS9lYWdsZS9iYXNlL2puaS9cIjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IENsYXNzID0gXCJQbGF0Zm9ybVN5c3RlbVwiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgTWV0aG9kID0gXCJvbk9wZW5Qcm90b2NvbFwiO1xuXG5cbiAgICBwdWJsaWMgb3BlblByb3RvY29sKHVybDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdXJsIHx8ICF1cmwuc3BsaXQodGhpcy5IZWFkKVsxXSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7VEFHfV0gb3BlblByb3RvY29sIGlsbGVnYWwgdXJsICR7dXJsfWApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYm9keSA9IHVybC5zcGxpdCh0aGlzLkhlYWQpWzFdXG4gICAgICAgIGxldCBmdW5jID0gYm9keS5zcGxpdCh0aGlzLlNlcGFyYXRvcilbMV1cbiAgICAgICAgbGV0IGFyZ3MgPSBib2R5LnNwbGl0KHRoaXMuU2VwYXJhdG9yKVsyXSB8fCBcIm51bGxcIlxuXG4gICAgICAgIGlmIChQbGF0Zm9ybVV0aWwuaXNBbmRyb2lkKCkgfHwgUGxhdGZvcm1VdGlsLmlzSU9TKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxOYXRpdmUoe1xuICAgICAgICAgICAgICAgIHBhY2thZ2U6IHRoaXMuUGFja2FnZSxcbiAgICAgICAgICAgICAgICBjbGFzczogdGhpcy5DbGFzcyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuTWV0aG9kLFxuICAgICAgICAgICAgICAgIHNpZ246IFwiKFNTKVNcIixcbiAgICAgICAgICAgICAgICBhcmdzOiBbZnVuYywgYXJnc11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9UT0RPIHdoZW4gY2FsbCB0aGUgb3RoZXIgaG9zdCBwbGF0Zm9ybVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGxOYXRpdmUocGFyYW1zOiB7XG4gICAgICAgIHBhY2thZ2U6IHN0cmluZyxcbiAgICAgICAgY2xhc3M6IHN0cmluZyxcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHNpZ24/OiBzdHJpbmcsXG4gICAgICAgIGFyZ3M/OiBhbnlbXSxcbiAgICB9KTogYW55IHtcbiAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFske1RBR31dIGNhbGxOYXRpdmUgcGFyYW1zIGlzIHVuZGVmaW5lZCFgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXQgPSBOYXRpdmUuaW5zdGFuY2UuY2FsbChwYXJhbXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJldE9iaiA9IEpTT04ucGFyc2UocmV0KSBhcyBJUmV0O1xuICAgICAgICAgICAgaWYgKHJldE9iai5zdGFkdXMgPT0gRVN0YWR1cy5PSykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXRPYmouZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7VEFHfV0gY2FsbE5hdGl2ZSByZXR1cm4gZXJyb3IgbXNnOiR7cmV0T2JqLm1zZ30hYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7VEFHfV0gY2FsbE5hdGl2ZSByZXQ6JHtyZXR9LCBkZWNvZGUgZXhjZXB0aW9uOiR7ZXJyb3J9IWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Mvc/BaseComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '098c2aQvoBM0JgDbMtlllp3', 'BaseComponent');
// Framwork/Mvc/BaseComponent.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._model = null;
        return _this;
    }
    BaseComponent.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BaseComponent.prototype._dataChanged = function (data) {
    };
    BaseComponent = __decorate([
        ccclass
    ], BaseComponent);
    return BaseComponent;
}(cc.Component));
exports.BaseComponent = BaseComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9NdmMvQmFzZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTRDLGlDQUFZO0lBRHhEO1FBQUEscUVBWUM7UUFUVyxZQUFNLEdBQWMsSUFBSSxDQUFBOztJQVNwQyxDQUFDO0lBUEcsOEJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsSUFBUztJQUV0QixDQUFDO0lBVmlCLGFBQWE7UUFEbEMsT0FBTztPQUNjLGFBQWEsQ0FXbEM7SUFBRCxvQkFBQztDQVhELEFBV0MsQ0FYMkMsRUFBRSxDQUFDLFNBQVMsR0FXdkQ7QUFYcUIsc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tIFwiLi9CYXNlTW9kZWxcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBfbW9kZWw6IEJhc2VNb2RlbCA9IG51bGxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKClcbiAgICB9XG5cbiAgICBfZGF0YUNoYW5nZWQoZGF0YTogYW55KSB7XG4gICAgICAgIFxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------
