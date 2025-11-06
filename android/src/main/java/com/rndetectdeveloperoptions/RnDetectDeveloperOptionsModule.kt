package com.rndetectdeveloperoptions

import android.content.Context
import android.provider.Settings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RnDetectDeveloperOptionsModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "RnDetectDeveloperOptions"
    }

    @ReactMethod
    fun isDeveloperOptionsEnabled(promise: Promise) {
        try {
            val devOptions = Settings.Global.getInt(
                reactApplicationContext.contentResolver,
                Settings.Global.DEVELOPMENT_SETTINGS_ENABLED, 0
            )
            promise.resolve(devOptions == 1)
        } catch (e: Exception) {
            promise.reject("ERROR", e.message)
        }
    }
}
