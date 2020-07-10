'use strict';
var fs = require("fs");
var path = require("path")

module.exports = {

  onBuildStart(options, callback) {

  },

  onBuildChangeFiles(options, callback) {

  },

  onBuildFinished(options, callback) {
    if (options.actualPlatform !== "android" || options.actualPlatform !== "ios") {
      Editor.log('当前平台为: ' + options.actualPlatform + ' 不需要添加native支持!')
      callback()
      return;
    }

    // 加入脚本引用
    const jsPath = paht.join(options.dest, "libs", "framworkNative.js");
    if (fs.existsSync(jsPath)) {
      const mainJsPath = path.join(options.dest, "main.js");
      let script = fs.readFileSync(mainJsPath, "utf-8");
      script = `require("./libs/framworkNative.js");\n${script}`;
      fs.writeFileSync(mainJsPath, script);
    } else {
      Editor.error("找不到build-templates/jsb-link/libs/framworkNative.js");
    }
    callback();
  },

  load() {
    // execute when package loaded
    // Editor.Builder.on("build-start", this.onBuildStart);  // 开始构建事件
    // Editor.Builder.on("build-change-files", this.onBuildChangeFiles); // 构建结束之前触发，一般在这里对已构建的文件做进一步处理（如，注入第三方脚本代码）
    Editor.Builder.on("build-finished", this.onBuildFinished);  // 构建完全结束事件
  },

  unload() {
    // execute when package unloaded
    // Editor.Builder.removeListener("build-finished", this.onBuildFinished);
    // Editor.Builder.removeListener("build-start", this.onBuildStart);
    Editor.Builder.removeListener("build-change-files", this.onBuildChangeFiles);
  },

};