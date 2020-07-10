
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