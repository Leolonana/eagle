package com.eagle.video;

import android.app.Activity;

public class UIUtil {

    public UIUtil() {

    }

    private static UIUtil _instance = null;
    public static UIUtil getInstance() {
        if (_instance == null) {
            _instance = new UIUtil();
        }
        return _instance;
    }



}
