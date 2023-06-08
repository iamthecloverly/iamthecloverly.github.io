---
title: "Introduction to Android Kernel"
date: 2023-06-08 21:35:00 +/-0530
categories: [Android Project, Kernel, AOSP]
pin : false
tags: [Android Project, Kernel, AOSP]
img_path: /assets/img/screenshots/Kernel/

image:
  path: https://images.pling.com/img/00/00/53/93/57/1427272/509f19e4cb86ee1aeb88aae065526c3f9b02f1f7e638b08bb42ed575318be54b246c.png
  width: 1000   # in pixels
  height: 400   # in pixels
  alt: Android Kernels
---

# Introduction

The Android kernel is open-source software that runs on Android devices. The kernel is responsible for managing the hardware and software components of the device. Compiling a custom kernel from source code is a great way to optimize your device's performance, stability, and battery life. In this post, we will take you through the steps to compile the Android kernel for your device.

Newer ACKs (version 5.4 and above) are also known as GKI kernels. GKI kernels support the separation of the hardware-agnostic generic core kernel code and GKI modules from the hardware-specific vendor modules.

The GKI kernel interacts with hardware-specific vendor modules containing system on a chip (SoC) and board-specific code. The interaction between the GKI kernel and vendor modules is enabled by the Kernel Module Interface (KMI) consisting of symbol lists identifying the functions and global data required by vendor modules. Figure 1 shows the GKI kernel and vendor module architecture:

![GKI architecture](https://source.android.com/static/docs/core/architecture/images/generic-kernel-image-architecture.png)

Figure 1. GKI architecture

> Note: The GKI kernel, GKI module, and vendor module architecture is the result of a multi-year effort known as the Generic Kernel Image (GKI) project. For information about this project and its phases, refer to The Generic Kernel Image (GKI) project.
Kernel glossary 
{: .prompt-info }

# Kernel glossary
This section contains terms used throughout the kernel documentation.

## Kernel types

### Android Common Kernel (ACK)
A kernel that is downstream of a LTS kernel and includes patches of interest to the Android community that haven't been merged into Linux mainline or Long Term Supported (LTS) kernels. Newer ACKs (version 5.4 and above) are also known as GKI kernels as they support the separation of hardware agnostic Generic Kernel
code and hardware agnostic GKI modules.

### Feature Kernel
A kernel for which the platform release features are guaranteed to be implemented. For example, in Android 12, the two feature kernels were android12-5.4 and android12-5.10. Android 12 features can't be backported to 4.19 kernels; the feature set would be similar to a device that launched with 4.19 on R and upgraded to S).

### generic core kernel
The portion of the [GKI kernel](https://source.android.com/docs/core/architecture/kernel#gkik) that is common across all devices.

### Generic Kernel Image (GKI) kernel
Any newer (5.4 and above) ACK kernel (currently aarch64 only). This kernel has two parts: The core GKI kernel with code common across all devices and GKI modules developed by Google that can be dynamically loaded on devices where applicable. 

### Kernel Module Interface (KMI) kernel
See [GKI kernel](https://source.android.com/docs/core/architecture/kernel#gkik)

### Launch Kernel
A kernel that is valid for launching a device for a given Android platform release. For example, in Android 12, the valid launch kernels were 4.19, 5.4, and 5.10.

### Long Term Supported (LTS) kernel
A Linux kernel that's supported for 2 to 6 years. LTS kernels are released once per year and are the basis for each of Google’s ACKs.

## Branch types

### ACK KMI kernel branch
The branch for which GKI kernels are built. For example, android12-5.10 and android13-5.15.
### Android-mainline
The primary development branch for Android features. When a new LTS kernel is declared upstream, the corresponding new GKI kernel is branched from android-mainline. 
### Linux mainline
The primary development branch for the upstream Linux kernels, including LTS kernels.

## Other terms
### Certified boot image
The kernel delivered in binary form (boot.img) and flashed onto the device. This image is certified in the sense that it contains embedded certificates so Google can verify that the device ships with a kernel certified by Google.

### Dynamically loadable kernel module (DLKM)
A module that can be dynamically loaded during device boot depending on the needs of the device. GKI and vendor modules are both types of DLKMs. DLKMs are released in .ko form and can be drivers or can deliver other kernel functionality.

### GKI project
A Google project addressing kernel fragmentation by separating common core kernel functionality from vendor-specific SoC and board support into loadable modules.

### Generic Kernel Image (GKI)
A boot image certified by Google that contains a GKI kernel built from an ACK source tree and is suitable to be flashed to the boot partition of an Android device.

### KMI
An interface between the GKI kernel and vendor modules allowing vendor modules to be updated independently of the GKI kernel. This interface consists of kernel functions and global data that have been identified as vendor/OEM dependencies using per-partner symbol lists

### GKI modules
Kernel modules built by Google that can be dynamically loaded on devices where applicable. These modules are built as artifacts of the GKI kernel and are delivered alongside GKI as the system_dlkm_staging_archive.tar.gz archive. GKI modules are signed by Google using the kernel build time key pair and are compatible only with the GKI kernel that they're built with.

### Vendor module
A hardware-specific module developed by a partner and that contains SoC and device-specific functionality. A vendor module is a type of dynamically loadable kernel module. 

