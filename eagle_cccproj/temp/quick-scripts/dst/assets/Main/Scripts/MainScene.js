
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