---
title: "ProjectElixir ROM [Android12L] For Realme 6, 6i, 6s and Realme 7, Narzo 20 Pro, Narzo 30 4G (G90T Series) (RM6785) [OFFICIAL]"
date: 2022-03-16 12:30:00 +/-0800
categories: [ROMs]
tags: [ProjectElixir, RMX2001]
img_path: /assets/img/screenshots/Elixir/

image:
  path: ProjectElixir.jpg
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

**  17-04-2022** 
- April ASB (android-12.1.0_r4)
- Elixir source upstream
- Added support for pickup gestures (Settings->Display->Lockscreen->Ambient Display)
- Fixed IMS crash while sending SMS over some carriers
- Based on Android-12L
- Offline charging support
- Include face unlock
- SELinux Enforcing
- Added charging ripple animation back
- Unblocked vibration, alarm icon from collapsed status bar
- Misc improvement
- Added RealmeSettings


<details>
<summary>16-03-2022</summary>
<p><ul>
<li>February Security Patch</li>
<li>Passes SafetyNet out-of-the-box</li>
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
<summary>12-01-2022</summary>
<p><ul>
<li>January ASB (android-12.0.0_r26)</li>
<li>Switched to RUI2 firmware</li>
<li>Passes SafetyNet out-of-the-box</li>
<li>Improved Gaming performance</li>
<li>Unlimited Google Photos storage</li>
<li>NFC works now</li>
<li>Added LiveDisplay (Display settings)</li>
<li>Fixed VOOC charging delay</li>
<li>Fixed minimum brightness</li>
<li>Upstreamed kernel to 4.14.261</li>
<li>Added F2FS support</li>
</ul></p>
</details>

# Screenshots 
  ![Desktop View](1.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](2.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](3.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](5.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](6.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](7.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](8.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](9.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](10.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](11.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](13.jpg){: w="200" h="400" }{: .normal }
  ![Desktop View](14.jpg){: w="200" h="400" }{: .normal }

# Known issues

- IPv6 Tethering (workaround: Enable tethering through [this app](https://play.google.com/store/apps/details?id=be.mygod.vpnhotspot&hl=en_IN&gl=US) or Change APN protocol to IPv4 🏃‍♂️
- Native video calling (ViLTE) and Voice over WiFi (VoWiFi)

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
**GApps Variant** - [Download](https://projectelixiros.com/download) 