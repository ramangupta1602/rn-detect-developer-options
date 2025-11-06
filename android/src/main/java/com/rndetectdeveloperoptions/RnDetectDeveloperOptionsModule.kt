package com.rndetectdeveloperoptions

import android.content.ContentResolver
import android.provider.Settings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = RnDetectDeveloperOptionsModule.NAME)
class RnDetectDeveloperOptionsModule(reactContext: ReactApplicationContext) :
    NativeRnDetectDeveloperOptionsSpec(reactContext) {

    override fun getName(): String = NAME

    override fun isDeveloperOptionsEnabled(promise: Promise) {
        try {
            val resolver: ContentResolver = reactApplicationContext.contentResolver
            val devOptions = Settings.Global.getInt(
                resolver,
                Settings.Global.DEVELOPMENT_SETTINGS_ENABLED,
                0
            )
            promise.resolve(devOptions == 1)
        } catch (e: Exception) {
            promise.reject("ERROR", e.message, e)
        }
    }

    companion object {
        const val NAME = "RnDetectDeveloperOptions"
    }
}
