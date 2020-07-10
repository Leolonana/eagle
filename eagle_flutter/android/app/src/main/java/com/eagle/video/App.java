package com.eagle.video;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.util.Log;

import java.util.ArrayList;

import io.flutter.app.FlutterApplication;

public class App extends FlutterApplication implements Application.ActivityLifecycleCallbacks {

    private static final String TAG = "EagleApp";
    private static App instance;

    private ArrayList<Activity> _actList = new ArrayList<Activity>();
    public Activity _currentAct;
    public GameActivity _gameAct;

    public static App get() {
        return instance;
    }

    @Override
    public void onCreate() {
        Log.v(TAG, "onCreate");
        super.onCreate();
        instance = this;
    }

    @Override
    public void onActivityCreated(Activity activity, Bundle bundle) {
        Log.v(TAG, "onActivityCreated");
        setCurrentActivity(activity);
        instance = this;
        _currentAct = activity;
        pushActivity(activity);
    }

    public Activity getCurrentAct() {
        return this._currentAct;
    }

    public Activity getGameAct() {
        return this._gameAct;
    }

    @Override
    public void onActivityStarted(Activity activity) {
        _currentAct = activity;
    }

    @Override
    public void onActivityResumed(Activity activity) {
        Log.v(TAG, "App onActivityResumed");
        instance = this;
        _currentAct = activity;
    }

    @Override
    public void onActivityPaused(Activity activity) {

    }

    @Override
    public void onActivityStopped(Activity activity) {

    }

    @Override
    public void onActivitySaveInstanceState(Activity activity, Bundle bundle) {

    }

    @Override
    public void onActivityDestroyed(Activity activity) {

    }

    private void pushActivity(Activity act) {
        _actList.add(act);
    }

    private void removeActivity(Activity act) {

    }
}
