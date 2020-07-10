import 'dart:developer';

import 'package:flutter/services.dart';

class helloNative {
  static const platform = MethodChannel("eagle.flutter.io/video");

  static helloNative instance;
  static helloNative getInstance() {
    if (instance == null) {
      instance = new helloNative();
    }
    return instance;
  }

  Future<bool> presentGameView(sceneId) async {
    log("callNative presentGameView" + sceneId.toString());
    bool isShown = false;
    try {
      isShown =
          await platform.invokeMethod('presentGameView', {"sceneId": sceneId});
      print("native_bridge presentGameView callback" + isShown.toString());
    } on PlatformException catch (e) {
      return false;
    }
    return isShown;
  }
}
