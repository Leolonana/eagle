package com.eagle.video;

import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import androidx.annotation.NonNull;

public class DataReflection {

    private static GameDataBean _packageData;

    public static void initGameData(GameDataBean data) {
        _packageData = data;
    }

    public static void helloNativeS(String info) {
        Log.v("JsReflection", info);
    }

    public static int helloNativeI(int num1, int num2) {
        return 1;
    }

    public static String getPackageData() {
        return _packageData.toString();
    }
}

class GameDataBean {

    public int getLaunchSceneID() {
        return launchSceneID;
    }

    public void setLaunchSceneID(int launchSceneID) {
        this.launchSceneID = launchSceneID;
    }

    public String getPackageData() {
        return packageData;
    }

    public void setPackageData(String packageData) {
        this.packageData = packageData;
    }

    private int launchSceneID;
    private String packageData;

    @NonNull
    @Override
    public String toString() {
        StringBuffer data = new StringBuffer();
        data.append("{\"launchSceneID\":"+launchSceneID+"}");
//        data.append("packageData:"+packageData+"}");
        Log.w("GameDataBean", data.toString());
        return data.toString();
    }
}
