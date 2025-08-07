package com.jprdictionary;

import android.content.Context;

/**
 * Class responsible for loading Flipper inside your React Native application. This is the release
 * flavor of this class.
 */
public class ReactNativeFlipper {
  public static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
    // Do nothing as we don't want to initialize Flipper on Release.
  }
}
