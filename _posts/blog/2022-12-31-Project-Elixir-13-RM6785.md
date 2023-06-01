---
title: "ProjectElixir ROM [Android13] For Realme 6, 6i, 6s and Realme 7, Narzo 20 Pro, Narzo 30 4G (RM6785) [OFFICIAL]"
date: 2022-12-31 13:26:00 +/-0530
categories: [ROMs]
pin : false
tags: [ProjectElixir, RM6785]
img_path: /assets/img/screenshots/Elixir3.7/

image:
  path: ProjectElixir_v3.7.jpg 
  width: 1000   # in pixels
  height: 400   # in pixels
  alt: Project Elixir
---

*Project Elixir* is another aftermarket AOSP ROM which basically offers minimal UI enhancement & close to Stock Android ROM with great performance, security and stability. Most of the OEMs' these days will provide slow and untimely updates, but we don't do that here. We closely follow Google to bring the latest updates to our users, and even prolong support for devices that have been declared obsolete by OEMs. Our ROMs' source code is open-source, secure, stable, and outstanding. Your experience while using Project Elixir will be butter smooth without compromising the quality of the Android experience. In short, it's perfectly balanced between Great Performance, Security, stability, minimal UI & awesome features including pixel goodies. So do not hesitate anymore, join us now and start enjoying the beauty of stock Android. Build and enjoy Project Elixir on your respective devices!

# Features

- Enforcing SELinux
- AES-256-XTS File Based Encryption (FBE)
- Passes SafetyNet out-of-the-box
- F2FS support on userdata partition
- Signature spoofing support (for microG)
- Face Unlock and App Lock
- Google Sans as a default font
- Unlimited Google Photos backup storage
- Quick tap gestures (Settings->System->Gestures)
- Vibrator intensity controller (Sound settings)
- Monet settings (Display settings)
- Double tap to wake toggle (Display settings)
- Offscreen touch gestures (Settings->System->Gestures->Touchscreen gestures)
- Smart Space (shows weather, alarm info on lockscreen and ambient display)
- Ringtone, Notification, Alarm, UI sounds from Goolag Pixel

# Changelog

## 22nd April 2023
- Update Pixel props
- SystemUI: Rework dismiss all view in QS
- Source Upstream
- April Security Patch 
- Improved auto brightness
- Upstreamed kernel to 4.14.311
- Fixed rounded corners radius on lockscreen
- Fixed issue where battery settings shows "Connected" instead of "Not charging"

<details>
<summary>**14-01-2023**</summary>
<p>
<li>- January ASB (android-13.0.0_r20)</li>
<li>- ProjectElixir source upstream</li>
<li>- Upstreamed kernel to 4.14.302</li>
</p>
</details>

<details>
<summary>31st Dec 2022</summary>
<p>
<li>Initial official Release</li>
</p>
</details>


# Screenshots 

  ![Desktop View](01.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](02.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](03.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](04.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](05.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](06.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](07.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](08.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](09.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](10.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](11.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](13.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](14.jpg){: w="200" h="400" }{: .normal }


# Known issues

- Native video calling (ViLTE) and Voice over WiFi (VoWiFi)
- USB Audio

# Reporting Bugs

- Don’t report bugs if you have any custom kernel or module installed
- If you have magisk installed, uninstall it and see if issue persists
- Navigate to Developer options in Settings and Generate a full bugreport from there
- Grab a bugreport right after the problem has occurred
- Remember to provide as much info as possible. The more info you provide, the more likely that the bug will be solved. Please also do not report known issues. Any bug not reported in the bug report format below may be ignored
- Create new issue in bug report format linked below and attach bugreport zip you generated from Developer options [on github repo](https://github.com/iamthecloverly/android_device_realme_RM6785) or Report it on [telegram group](https://t.me/SriBalajiHub)


# Instructions

If you are coming from RealmeUI-1.0 or RealmeUI-2.0 or any custom ROM

- Boot into custom recovery
- Format data
- Flash latest build
- Flash Any Stable Recovery
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
**GApps Variant** - [Download](https://projectelixiros.com/download) 