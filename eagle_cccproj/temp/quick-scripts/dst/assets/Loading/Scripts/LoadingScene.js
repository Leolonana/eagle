
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