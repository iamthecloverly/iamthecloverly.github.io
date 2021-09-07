---
layout: post
title: "How to use Migrate on any CUSTOM ROMs"
description: "Instructions on how to use migrate."
categories: [migrate , ROM ,backup]
tags: [ROM, migrate , backup]
redirect_from:
  - /2021/08/29/
---

# Migrate is a new app to help you switch custom ROMs
Switching to a custom ROM, or switching between two custom ROMs, is definitely something that’s not for the faint of heart. Things can go wrong in the process, or you might skip a step or two, causing you to lose all of your important data in the process. Luckily, there are apps that aim to help you through this process, like Titanium Backup, but they’re not completely straightforward. If you want something that completely guides you through the process, then Migrate is the app for you.

Just like other backup apps, Migrate backs up your app data, APK files, permissions, call logs, messages, and more, but the app also goes to great lengths to ensure a friendly experience throughout the whole switching process.


## Download
Download any of the latest migrate from these links:
 * Stable GPE [Google Playstore Edition](https://play.google.com/store/apps/details?id=balti.migrate&hl=en_IN&referrer=utm_source%3Dgoogle%26utm_medium%3Dorganic%26utm_term%3Dmigrate+google+play+store&pcampaignid=APPU_1_Al-2Xt-qFP2V4-EP-IGdmAs)
 * Beta NG [Non Google Playstore Edition](https://t.me/migrateAppChannel/16)

## Backup
 - Open migrate, take backup of all user apps. Don't take backup of system apps, it can cause bootloop.
 - Take backup of user apps, data & permissions.
 - In next step take backup of call logs, msg, contacts, default keyboard etc. don't mess with what you don't understand.
 - **Backup will be saved in internal storage in migrate folder.**

## Restore
 - To restore this backup - First install ROM than GApps (if needed) than Magisk latest than flash backup zips created in migrate folder in sequence. Don't break this sequence. 
 - When phone boots up, a notification will appear saying "migrate package flashed", click on it to complete restore, if this notification doesn't appear or you by mistake removed this notification, than you can just click on "migrate helper" app (installed when you flashed TWRP migrate package) and complete the restore process.
 - After restore process completes, uninstall or disable migrate helper app. 
 
## Step by Step Screenshots
<details>
<div id="images">
  <img class="screenshot" src="https://user-images.githubusercontent.com/86469621/131248619-a68235d5-c41e-43b8-82ae-e9c3f67e002b.png">
  <img class="screenshot" src="https://user-images.githubusercontent.com/86469621/131248630-8474e935-d39d-4fee-840b-8f4cfb084f4e.png">
  <img class="screenshot" src="https://user-images.githubusercontent.com/86469621/131248633-dd80935b-ab0e-46c2-8e1c-de8b693f3a51.png">
  <img class="screenshot" src="https://user-images.githubusercontent.com/86469621/131248633-dd80935b-ab0e-46c2-8e1c-de8b693f3a51.png">
  <img class="screenshot" src="https://telegra.ph/file/807292298df7a1be9d675.jpg">
  <img class="screenshot" src="https://user-images.githubusercontent.com/86469621/131248638-6bd0b6a6-9029-4430-90b5-f3014c22cba5.png">
  <img class="screenshot" src="https://user-images.githubusercontent.com/86469621/131248642-a2c59d70-33db-4902-a384-891913fd7d74.png">
  <img class="screenshot" src="https://user-images.githubusercontent.com/86469621/131248645-528d2743-2636-4b82-a893-57a0c500ea6b.png">
</div>
</details>

# FAQ:
 -If you are facing issues while flashing, refer to this video: https://youtu.be/0Cp6TNayXnM
 -Full manual extract guide: https://forum.xda-developers.com/showpost.php?p=82198185&postcount=1269

**How is this app different from Titanium backup?**
>This app is a ROM migration tool. It not only backs up app and data, but also contacts, SMS, call logs etc. Moreover, the restoration process also involves flashing via >TWRP. Titanium backup is an excellent app. Migrate just views the restoration process differently.

**Do I need to download the Migrate app to restore the apps?**
>No. Only your ROM needs to be rooted. The restoration process is handled by a helper app, which deletes itself after restoring everything.

**Is it necessary to use Magisk?**
>The app works best with Magisk. Other options like Lineage OS su addon causes weird errors like incomplete file copy, etc.

**All apps are restored from recovery?**
>No. That is not possible. Because Recovery is a completely different environment from Android. Think of it as installing a Windows game from a Linux distro. Instead >from recovery, an app is injected into system which takes up the restore process when android boots up. Most things are automated, so you need not worry much.

**A quick word on SD card support...
SD card support in v2.0 requires a Magisk module "ExSDCard Access Enabler", made by developer Romain. According to him, this module requires FUSE support on ROMs. FUSE is supported on some ROMs as a legacy feature as Android has moved away from FUSE to SDCARDFS. As such, the current implementation may or may not work based on your device and ROM.
If it does not work for you, please wait until either the module developer rewrites the module :p or I find a different implementation :) Thanks for your patience.**
