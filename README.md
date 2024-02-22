# Vizbee RN Demo App

Welcome to the Vizbee React Native Demo App! This app demonstrates the integration of the `react-native-vizbee-sender-sdk` for casting media content to supported devices using Vizbee.

## Integration Guide

Follow these steps to integrate the `react-native-vizbee-sender-sdk` into your React Native project:

1. **Installation**

   First, install the package using npm or yarn:

   ```bash
   npm install react-native-vizbee-sender-sdk
   # or
   yarn add react-native-vizbee-sender-sdk
   ```

2. **Linking (for React Native < 0.60)**

    If you're using React Native version 0.60 or above, linking is done automatically. For older versions, you may need to link the package manually:

    ```bash
    react-native link react-native-vizbee-sender-sdk
    ```

3. **iOS Setup (with CocoaPods)**

    For iOS, navigate to the `ios` directory of your project and install CocoaPods dependencies:

    ```bash
    cd ios
    pod install
    ```

4. **Usage**

    Import the Vizbee sender SDK in your JavaScript files:

    ```javascript
    import VizbeeSenderSDK from 'react-native-vizbee-sender-sdk';
    ```
    Use the SDK methods to cast media content to supported devices. Refer to the SDK documentation for detailed usage instructions.

**Getting Started**

To run the demo app:

    1. Clone this repository to your local machine.
    2. Navigate to the project directory and install dependencies:

```bash
npm install
# or
yarn install
```
For iOS, navigate to the ios directory and install CocoaPods dependencies:
```bash
cd ios
pod install
```
Run the app on an emulator or device:
```bash
npx react-native run-android
# or
npx react-native run-ios
```

**Developer guide**

Once you are setup, you can get further instructions for integrating this React Native Vizbee Sender from the [Vizbee console](https://console.vizbee.tv/)
