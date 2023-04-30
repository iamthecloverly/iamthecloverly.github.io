---
title: "crDroidAndroid v9.0 ROM [Android13] Realme 6, 6i, 6s and Realme 7, Narzo 20 Pro, Narzo 30 4G (G90T Series) (RM6785) [OFFICIAL]"
date: 2022-12-25 08:53:00 +0530
categories: [ROMs]
pin : true
tags: [crDroidAndroid, crDroid, RM6785]
img_path: /assets/img/screenshots/crdroid

image:
  path:  crdroid.jpg
  width: 1000   # in pixels
  height: 400   # in pixels
  alt: crDroid Android
---

**crDroid** is designed to improve the performance, reliability and customizability of stock Android.crDroid uses LineageOS as base. We try to keep in sync with LineageOS source while also adding lots of customizations for you to choose from.As crDroid is based on LineageOS, which is also based on stock Android, we can say crDroid is going to keep updates flowing as long as LineageOS and Google do.
crDroid is maintained by a small group of developers.
Those developers donate their free time towards the project. We do our best to bring a quality OS to your device, while working a real job on the side in most cases.
Our project will always be open source so that others can build and contribute also. We do encourage everyone to contribute on our GitHub. 

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

# Changelog

## 2023-04-22
- April ASB (android-13.0.0_r41)
- Upstreamed kernel to 4.14.313
- Force enabled LTE Carrier Aggregation (CA)
    - It won't show the 4G+ icon on the status bar
    - Use NetMonster app to check CA
- Crdroid source upstream
- Fixed double click vibration effect
- Improved brightness slider curve

<details>
<summary>06/04/2023</summary>
<p>
<li> March ASB (android-13.0.0_r35) and Feature Drop (QPR2) </li>
<li> Crdroid source upstream </li>
<li> Improved auto brightness </li>
<li> Upstreamed kernel to 4.14.311</li>
<li> Fixed rounded corners radius on lockscreen</li>
<li> Fixed issue where battery settings shows "Connected" instead of "Not charging"</li>
</p>
</details>

<details>
<summary>22/02/2023</summary>
<p>
<li> February ASB (android-13.0.0_r30)</li>
<li> Crdroid source upstream</li>
<li> Fixed double click vibration effect</li>
<li> Fixed weak vibrations on calls, notifications and alarms</li>
<li> Improved brightness slider curve</li>
<li> Upstreamed kernel to 4.14.304</li>
</p>
</details>

<details>
<summary>25/12/2022</summary>
<p>
<li>Initial Official Build</li>
</p>
</details>

# Screenshots: 
  ![Desktop View](1.png){: w="200" h="400" }{: .normal }
  ![Desktop View](2.png){: w="200" h="400" }{: .normal }
  ![Desktop View](3.png){: w="200" h="400" }{: .normal }
  ![Desktop View](4.png){: w="200" h="400" }{: .normal }
  ![Desktop View](5.png){: w="200" h="400" }{: .normal }
  ![Desktop View](6.png){: w="200" h="400" }{: .normal }
  ![Desktop View](7.png){: w="200" h="400" }{: .normal }
  ![Desktop View](9.png){: w="200" h="400" }{: .normal }
  ![Desktop View](10.png){: w="200" h="400" }{: .normal }
  ![Desktop View](11.png){: w="200" h="400" }{: .normal }
  ![Desktop View](12.png){: w="200" h="400" }{: .normal }
  ![Desktop View](13.png){: w="200" h="400" }{: .normal }
  ![Desktop View](14.png){: w="200" h="400" }{: .normal }
  ![Desktop View](15.png){: w="200" h="400" }{: .normal }
  ![Desktop View](16.png){: w="200" h="400" }{: .normal }
  ![Desktop View](17.png){: w="200" h="400" }{: .normal }
  ![Desktop View](18.png){: w="200" h="400" }{: .normal }
  ![Desktop View](19.png){: w="200" h="400" }{: .normal }
  ![Desktop View](20.png){: w="200" h="400" }{: .normal }
  ![Desktop View](21.png){: w="200" h="400" }{: .normal }
  ![Desktop View](22.png){: w="200" h="400" }{: .normal }

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
**Vanilla** - [Download](https://crdroid.net/RM6785/9) 
