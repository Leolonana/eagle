package com.eagle.video;

import android.content.Intent;
import android.util.Log;

public class Hello {

    public static int SceneId;

    public static void helloNativeS(String info) {
        Log.v("JsReflection", info);
    }

    public static int helloNativeI(int num1, int num2) {
        return 1;
    }

    public static void gameBack(int sceneId) {
        Log.v("Hello", "gameBack " + sceneId);
        App.get()._gameAct.finish();
    }

    public static int sceneData() {
        return SceneId;
    }
}
