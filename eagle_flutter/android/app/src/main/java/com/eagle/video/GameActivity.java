package com.eagle.video;

import android.os.Bundle;
import android.util.Log;
import android.view.WindowManager;

import org.cocos2dx.javascript.EagleCocos2dxActivity;
import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;

public class GameActivity extends EagleCocos2dxActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        App.get()._gameAct = this;
        // 屏幕常亮状态处理
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }

}
