package io.flutter.plugins;

import androidx.annotation.Keep;
import androidx.annotation.NonNull;

import com.eagle.video.Flutter.FlutterPagePlugin;

import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.engine.FlutterEngine;

/**
 * Generated file. Do not edit.
 * This file is generated by the Flutter tool based on the
 * plugins that support the Android platform.
 */
@Keep
public final class FlutterPluginRegistrant {
  public static void registerWith(@NonNull FlutterEngine flutterEngine, FlutterActivity flutterEngineAct) {
    FlutterPagePlugin.instance().setFlutterAct(flutterEngineAct);
    flutterEngine.getPlugins().add(FlutterPagePlugin.instance());
  }
}
