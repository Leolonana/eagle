package com.eagle.video;

import android.os.Bundle;
import android.util.Log;

import androidx.annotation.NonNull;
import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.plugins.FlutterPluginRegistrant;

public class MainActivity extends FlutterActivity {

  private static final String TAG = "[MainActivity]";

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    App.get()._currentAct = this;
  }

  @Override
  public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {
    FlutterPluginRegistrant.registerWith(flutterEngine, this);
  }

  @Override
  protected void onStart() {
    super.onStart();
    Log.v(TAG, "onStart");
  }

  @Override
  protected void onPause() {
    super.onPause();;
    Log.v(TAG, "onPause");
  }

  @Override
  protected void onStop() {
    super.onStop();;
    Log.v(TAG, "onStop");
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();;
    Log.v(TAG, "onDestroy");
  }

  @Override
  public void onBackPressed() {
    super.onBackPressed();
  }
}
