---
title: "PixelPlusUI v5.1 ROM [Android13] Realme 6, 6i, 6s and Realme 7, Narzo 20 Pro, Narzo 30 4G (G90T Series) (RM6785) [OFFICIAL]"
date: 2023-01-25 20:33:00 +0530
categories: [ROMs]
pin : false
tags: [PixelPlusUI, PPUI, RM6785]
img_path: /assets/img/screenshots/ppui_5.0

image:
  path: PPUI_A13_01.jpg
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

# Changelog

*26/11/2022*
- Initial stable release
- November ASB (android-13.0.0_r14)
- PixelPlusUI source upstream
- Fixed video playback crash
- Disabled boosts on power saving mode
- Increased Voice Call volume steps to 15
- Re-adjusted status bar paddings
- Switched to pixel power-libperfmgr HAL
- Enabled AUX camera support on aperture camera app
- Fixed buzzed brightness slider
- Upstreamed kernel to 4.14.297

<details>
<summary>2nd Nov, 2022</summary>
<p><ul>
<li>Initial Android 13 built.</li>
</ul></p>
</details>

# Screenshots: 
  ![Desktop View](01.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](02.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](03.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](04.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](05.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](06.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](07.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](09.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](10.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](11.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](12.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](13.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](14.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](15.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](16.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](17.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](18.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](19.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](20.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](21.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](22.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](23.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](24.jpg){: w="200" h="400" }{: .normal }

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
