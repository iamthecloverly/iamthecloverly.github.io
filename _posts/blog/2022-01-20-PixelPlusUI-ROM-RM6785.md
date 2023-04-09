---
title: "PixelPlusUI ROM [Android12] Realme 6, 6i, 6s and Realme 7, Narzo 20 Pro, Narzo 30 4G (G90T Series) (RM6785) [OFFICIAL]"
date: 2022-08-19 19:25:00 +/-0530
description: "YET ANOTHER PIXEL ROM!"
categories: [ROMs]
pin : false
tags: [PixelPlusUI, PPUI, RM6785]
img_path: /assets/img/

image:
  path: headers/PPUI_4.8.jpg
  width: 1000   # in pixels
  height: 400   # in pixels
  alt: PixelPlusUI
---

**PixelPlusUI** YET ANOTHER PIXEL ROM!
Android is one of the most featuristic OS. We all know that it is Google that provides the Android Platform and its maintenance. Based on which OEMs build their own custom Firmware/Skin/ROM such as Xiaomi's MIUI, Samsung's OneUI, OnePlus' OxygenOS, etc. Due to the fact that Android is an open-source platform, developers can build their own ROM/Firmware/Skin and that is what we commonly refer to as Custom ROM. Unlike OEMs, Custom ROM developers provide frequent updates, a bloatware-free, and ad-free experience with great flexibility when it comes to the usability of the OS.


# Working features
* VoLTE, Wifi calling
* Fingerprint sensor
* WiFi
* Bluetooth
* SELinux
* RIL (Data,SMS,Calls)
* Camera
* Camcorder
* Audio
* GPS
* NFC
* Sensors
* Video Playback
* ZRAM
* Internal audio recording
* Faceunlock
* Safetynet without magisk
* DT2W
* EngineerMode

# Known issues

- Native video calling (ViLTE) and Voice over WiFi (VoWiFi)
- USB Audio

# Changelog

v4.8 Update (19-August-2022)
* August ASB (android-12.1.0_r22)
* PixelplusUI source upstream
* Fixed IPv6 tethering
* Upstreamed kernel to 4.14.290
* Updated vendor blobs and firmware images to RMX2002_11.C.19
* Fixed youtube lag while playing 1080p/2K video's
* Improved Smoothness
* Misc improvements

<details>
<summary>24th May, 2022</summary>
<ul>
<li> May ASB (android-12.1.0_r5)</li>
<li> SELinux Enforcing</li>
<li> PixelplusUI source upstream</li>
<li> Fixed Auto brightness QS toggle</li>
<li> Unlocked Google app weather widgets</li>
<li> Improved haptics</li>
<li> Improved UI performance</li>
<li> Fixed lag on viewfinder in GCam</li>
<li> power: Boost min CPU freq to 1618000,1419000 on interaction</li>
<li> Drop redundant secure element service</li>
</ul>
</details>

<details>
<summary>14th March, 2022</summary>
<p><ul>
<li> February Security Patch</li>
<li> Passes SafetyNet out-of-the-box</li>
<li> Use GcamGo as default</li>
<li> Fixed screen flicker</li>
<li> Fixed charging info on lockscreen</li>
<li> Fixed native screen recorder</li>
<li> Fixed offline charging</li>
<li> Miscellaneous changes</li>
<li> Fixed DRM Widevine L1</li>
</ul></p>
</details>

<details>
<summary>14th October, 2021</summary>
<p><ul>
  <li>January ASB (android-12.0.0_r26)</li>
  <li>Switched to RUI2 firmware</li>
  <li>Passes SafetyNet out-of-the-box</li>
  <li>Improved Gaming performance</li>
  <li>Unlimited Google Photos storage</li>
  <li>NFC works now</li>
  <li>Added LiveDisplay (Display settings)</li>
  <li>Fixed VOOC charging delay</li>
  <li>Fixed brightness slider curve</li>
  <li>Fixed minimum brightness</li>
  <li>Upstreamed kernel to 4.14.261</li>
  <li>Added F2FS support</li>
</ul></p>
</details>

# Screenshots
<div id='images'> 
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/1.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/2.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/3.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/4.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/5.jpg"> 
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/6.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/7.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/8.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/9.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/10.jpg"> 
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/11.jpg"> 
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/12.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/13.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/14.jpg">
<img class='screenshots' src="/assets/img/screenshots/PPUI_4.8/15.jpg">
</div>

# Reporting Bugs
- Don’t report bugs if you have any custom kernel or module installed
- Create new [issue here](https://github.com/iamthecloverly/android_device_realme_RM6785) or Report it [here](https://t.me/SriBalajiHub).
- Grab a logcat right after the problem has occurred. (Please include at least a few pages of the log, not just the last few lines, unless you know what you’re doing.)
- If it is a random reboot, grab /proc/last_kmsg. (Do not bother getting a logcat unless you can get it just before the reboot. A logcat after a reboot is useless)

# Instructions
If you are coming from RealmeUI-1.0 or RealmeUI-2.0 or any custom ROM
- Boot into custom recovery
- Format data
- Flash latest build
- Flash Lineage Recovery
- Reboot your device once the installation is done

# FAQs

## Can I flash this rom from RealmeUI-1.0 or custom ROM based on it?
- Yes! this build contains RealmeUI-2.0 firmware so doesn’t matter what ROM you are on.

## How to root?
- Download latest Magisk apk and flash it from RECOVERY.

## I can’t boot into RECOVERY mode after flashing this ROM

- You can, just not with the key combo. Realme have mapped that combo to bootloader instead of recovery unlike in RealmeUI-1.0.
Enable Advanced restart from `Settings->System->Buttons->Power Menu` and use that

## How to flash stuffs in recovery
- Use External SDCard or adb sideload

## Safetynet is failing after rooting the device
- If you are on Magisk 23.0:
- Enable MagiskHide from Magisk Manager app
- If you are on Magisk 24.0+ (Zygisk):
    - Enable `“Zygisk”` option from the Magisk Manager app
    - Reboot your device
    - Enable `“Enforce DenyList”` option
    - Go in `“Configure DenyList”`
    - Enable `“Show system apps” option then search ‘Google Play Services’ and tap on it (but NOT on the tick box!)` to expand activities
    - Enable `“com.google.android.gms” and “com.google.android.gms.unstable”`

# Downloads
**GApps Variant*<li> - [Download](https://ppui.site/download) 