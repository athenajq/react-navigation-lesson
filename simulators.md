# simulators and virtual devices

if you don't have access to a phone or would prefer using a virtual phone on your laptop, you can download a simulator. a warning: the process is harder. refer to the expo docs for [ios](https://docs.expo.io/workflow/ios-simulator/) and [android](https://docs.expo.io/workflow/android-studio-emulator/)

## simulators for mac:

1. download [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) from the app store (it might take a while)

2. to install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use

3. that should begin to load an iphone simulator.

## simulators for windows:

1. download [Android Studio](https://developer.android.com/studio/index.html) 3.0+

   Select "Standard" for the "Install Type" inside the wizard.

2. Inside Android Studio, go to `Preferences > Appearance & Behavior > System Settings > Android SDK`. Click on the **"SDK Tools"** tab and make sure you have at least one version of the **"Android SDK Build-Tools"** installed.

   Copy or remember the path listed in the box that says **"Android SDK Location."**

3. On the Android Studio main screen, click **"Configure"**, then **"AVD Manager"** in the dropdown.

4. Press the **"+ Create Virtual Device"** button.

5. Choose the type of hardware you'd like to emulate. (any works, but the latest releases are probably the best option)

6. Select an OS version to load on the emulator (probably one of the system images in the **"Recommended"** tab), and download the image. Change any other settings you'd like, and press **"Finish"** to create the virtual device. You can now run this device anytime by pressing the **Play** button in the AVD Manager window.
