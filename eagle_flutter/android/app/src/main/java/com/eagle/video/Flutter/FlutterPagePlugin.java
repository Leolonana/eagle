package com.eagle.video.Flutter;

import android.app.Activity;

import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.engine.plugins.FlutterPlugin;
import io.flutter.plugin.common.BinaryMessenger;
import io.flutter.plugin.common.MethodChannel;

public class FlutterPagePlugin implements FlutterPlugin {

    private static final String CHANNEL = "eagle.flutter.io/video";

    private static FlutterPagePlugin instance;
    public static FlutterPagePlugin instance() {
        if (instance == null) {
            instance = new FlutterPagePlugin();
        }
        return instance;
    }

    private Activity mActivity;
    private MethodChannel channel;

    @Override
    public void onAttachedToEngine(FlutterPluginBinding binding) {
        setupMethodChannel(binding.getBinaryMessenger());
    }

    @Override
    public void onDetachedFromEngine(FlutterPluginBinding binding) {
        tearDownChannel();
    }

    private void setupMethodChannel(BinaryMessenger messenger) {
        channel = new MethodChannel(messenger, CHANNEL);
        final FlutterPageCallHandlerImpel handler = new FlutterPageCallHandlerImpel(mActivity);
        channel.setMethodCallHandler(handler);
    }

    private void tearDownChannel() {
        channel.setMethodCallHandler(null);
        channel = null;
    }

    public void setFlutterAct(FlutterActivity flutterEngineActivity) {
        mActivity = flutterEngineActivity;
    }
}
