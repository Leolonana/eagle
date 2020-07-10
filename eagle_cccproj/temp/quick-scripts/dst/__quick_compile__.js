
(function () {
var scripts = [{"deps":{"./assets/Framwork/Platform/PlatformAndroid":1,"./assets/Framwork/Mvc/BaseComponent":8,"./assets/Framwork/NativeBridge/CallNative":9,"./assets/Framwork/Utils/FitterHeightFirst":10,"./assets/Framwork/Base/IProtocol":11,"./assets/Framwork/Platform/IPlatform":12,"./assets/Framwork/Utils/FitterWidthFirst":13,"./assets/Framwork/Utils/FileUtil":14,"./assets/Framwork/Utils/PlatformUtil":15,"./assets/Writing/Script/FrameworkInterface":18,"./assets/Writing/Script/WritingSmallDot":19,"./assets/Writing/Script/Practice":20,"./assets/Framwork/Mvc/BaseModel":24,"./assets/Framwork/Framwork":7,"./assets/GameBase/Protocol/Protocol":2,"./assets/Loading/Scripts/LoadingScene":3,"./assets/Main/Scripts/MainScene":4,"./assets/Writing/Script/WritingDot":5,"./assets/Main2/Scripts/MainScene2":6,"./assets/Writing/Script/WritingRightStar":16,"./assets/Writing/Script/WritingChar":17,"./assets/Writing/Script/Writing":21,"./assets/Framwork/Base/Native":22,"./assets/Framwork/Base/BaseProtocol":23},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/Framwork/Platform/PlatformAndroid.js"},{"deps":{"../../Framwork/Base/BaseProtocol":23},"path":"preview-scripts/assets/GameBase/Protocol/Protocol.js"},{"deps":{"../../Framwork/NativeBridge/CallNative":9},"path":"preview-scripts/assets/Loading/Scripts/LoadingScene.js"},{"deps":{"../../Framwork/NativeBridge/CallNative":9},"path":"preview-scripts/assets/Main/Scripts/MainScene.js"},{"deps":{"./WritingRightStar":16,"./WritingSmallDot":19},"path":"preview-scripts/assets/Writing/Script/WritingDot.js"},{"deps":{"../../Framwork/NativeBridge/CallNative":9},"path":"preview-scripts/assets/Main2/Scripts/MainScene2.js"},{"deps":{"./Base/Native":22},"path":"preview-scripts/assets/Framwork/Framwork.js"},{"deps":{},"path":"preview-scripts/assets/Framwork/Mvc/BaseComponent.js"},{"deps":{},"path":"preview-scripts/assets/Framwork/NativeBridge/CallNative.js"},{"deps":{},"path":"preview-scripts/assets/Framwork/Utils/FitterHeightFirst.js"},{"deps":{},"path":"preview-scripts/assets/Framwork/Base/IProtocol.js"},{"deps":{},"path":"preview-scripts/assets/Framwork/Platform/IPlatform.js"},{"deps":{},"path":"preview-scripts/assets/Framwork/Utils/FitterWidthFirst.js"},{"deps":{},"path":"preview-scripts/assets/Framwork/Utils/FileUtil.js"},{"deps":{},"path":"preview-scripts/assets/Framwork/Utils/PlatformUtil.js"},{"deps":{"./WritingSmallDot":19},"path":"preview-scripts/assets/Writing/Script/WritingRightStar.js"},{"deps":{"./WritingDot":5},"path":"preview-scripts/assets/Writing/Script/WritingChar.js"},{"deps":{},"path":"preview-scripts/assets/Writing/Script/FrameworkInterface.js"},{"deps":{},"path":"preview-scripts/assets/Writing/Script/WritingSmallDot.js"},{"deps":{},"path":"preview-scripts/assets/Writing/Script/Practice.js"},{"deps":{"./WritingChar":17,"./WritingDot":5,"./Practice":20},"path":"preview-scripts/assets/Writing/Script/Writing.js"},{"deps":{"../Utils/PlatformUtil":15},"path":"preview-scripts/assets/Framwork/Base/Native.js"},{"deps":{"./Native":22,"../Utils/PlatformUtil":15,"./IProtocol":11},"path":"preview-scripts/assets/Framwork/Base/BaseProtocol.js"},{"deps":{},"path":"preview-scripts/assets/Framwork/Mvc/BaseModel.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    