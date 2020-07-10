package com.eagle.video.Flutter;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.eagle.video.GameActivity;
import com.eagle.video.Hello;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;

public class FlutterPageCallHandlerImpel implements MethodChannel.MethodCallHandler {

    private static final String TAG = "FlutterCallMethod";
    private Activity mActivity;

    FlutterPageCallHandlerImpel(Activity flutterEngineAct) {
        mActivity = flutterEngineAct;
    }

    @Override
    public void onMethodCall(MethodCall call, MethodChannel.Result result) {
        switch (call.method) {
            case "presentGameView":
                int sceneId = 1;
                Log.v(TAG, call.arguments.toString());
                if (call.hasArgument("sceneId")) {
                    sceneId = call.argument("sceneId");
                    Log.v(TAG, "sceneId "+sceneId );
                }
                presentGameView(sceneId, result);
                break;
            default:
                Log.e("", "no such method registered " + call.method);
                result.notImplemented();
                break;
        }
    }

    /**
     * 打开Game界面
     * @param sceneId 场景id
     */
    private void presentGameView(int sceneId, MethodChannel.Result result) {
        Log.v(TAG, "presentGameView called.");
        Hello.SceneId = sceneId;
        mActivity.startActivity(new Intent(mActivity, GameActivity.class));
        mActivity.overridePendingTransition(0, 0);
        result.success(true);
    }
}
