# JPR Dictionary

A React Native dictionary application that has been migrated from Expo to React Native CLI for Android Studio compatibility.

## Migration Summary

This project has been successfully migrated from Expo to React Native CLI with the following changes:

### Removed Expo Dependencies
- `expo` package
- `expo-status-bar` package
- `expo.json` configuration file
- `.expo` directory
- Expo-specific scripts in `package.json`

### Added React Native CLI Configuration
- `metro.config.js` - Metro bundler configuration
- `babel.config.js` - Babel configuration with React Native preset
- `react-native.config.js` - React Native CLI configuration
- Complete Android project structure in `/android` directory

### Preserved Features
- All React Navigation functionality
- React Native Gesture Handler
- React Native Reanimated
- React Native Safe Area Context
- React Native Screens
- React Native Vector Icons
- All existing screens and components
- All data and dictionary content

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- React Native CLI
- Android Studio with Android SDK
- Java Development Kit (JDK)

### Installation

1. Install dependencies:
```bash
npm install
```

2. For Android development:
```bash
npm run android
```

3. For iOS development (macOS only):
```bash
npm run ios
```

4. Start Metro bundler:
```bash
npm start
```

## Project Structure

```
jpr-dictionary/
├── android/                 # Android native code
├── components/             # Reusable React components
├── data/                   # Dictionary data
├── navigation/             # Navigation configuration
├── screens/                # App screens
├── assets/                 # Images and other assets
├── App.js                  # Main app component
├── index.js                # App entry point
└── package.json            # Dependencies and scripts
```

## Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Building for Production

### Android
```bash
cd android
./gradlew assembleRelease
```

The APK will be generated in `android/app/build/outputs/apk/release/`.

## Notes

- This project is now fully compatible with Android Studio
- All Expo-specific APIs have been replaced with React Native CLI equivalents
- The app maintains all original functionality and data
- Vector icons are configured for Android compatibility
