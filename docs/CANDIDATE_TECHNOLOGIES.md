<!--
Copyright (c) 2023 The Gamepad Navigator Authors
See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-lab/gamepad-navigator/raw/master/AUTHORS.md.

Licensed under the BSD 3-Clause License. You may not use this file except in
compliance with this License.

You may obtain a copy of the BSD 3-Clause License at
https://github.com/fluid-lab/gamepad-navigator/blob/master/LICENSE
-->

# Candidate Technologies for the Gamepad Navigator

## Table of Contents

1. [Introduction](#introduction)
2. [Factors to be Considered](#factors-to-be-considered)
3. [Candidate Technologies](#candidate-technologies)
4. [Analysis](#analysis)
   - [Custom Browser Extension / Add-on](#custom-browser-extension--add-on)
   - [Electron.js Desktop App](#electronjs-desktop-app)
   - [Espruino Pico](#espruino-pico)
   - [Secondary Extensions / Add-ons](#secondary-extensions--add-ons)
   - [Bookmarklets](#bookmarklets)
5. [Conclusion](#conclusion)

## Introduction

This document contains the list of technologies, frameworks, and approaches that can be used to implement **Gamepad
Navigator**.

## Factors to be Considered

Each of the available technologies has its advantages and disadvantages, and there's a general tendency to prefer the
one with more benefits. But the right approach is to choose the technology according to our requirements and the scope
of the project.

So, the factors that should be considered for selecting the candidate technology are:

1. The Fluid Community's adaptability and familiarity with the technology.
2. Fulfillment of the project's requirements:
   - Accept and read inputs from the gamepad.
   - Compatible across multiple platforms and devices.
3. Stability and long-term support for the technology.
4. Usefulness in implementing navigation features.

## Candidate Technologies

Before searching for a technology, I framed multiple approaches using which project requirements can be fulfilled. With
those approaches in mind, I searched and looked through various technologies. Below is the list of the shortlisted ones:

1. Custom Browser Extension / Add-on
   - [Chrome Extension](https://developer.chrome.com/extensions)
   - [Firefox Add-on](https://extensionworkshop.com/)
   - [Safari Extension](https://tinyurl.com/y9yof7wr)
2. Electron.js Desktop App with the following Node.js packages:
   - [Node Key Sender](https://tinyurl.com/y9zaextg) or [Robot.js](https://www.npmjs.com/package/robotjs)
   - [Gamepad](https://www.npmjs.com/package/gamepad) (Alternative to Gamepad API for Node.js)
3. [Espruino Pico](https://www.espruino.com/Pico)
4. Secondary Extensions to inject Scripts
   - [Tampermonkey](https://tinyurl.com/lucpy9z) (For Safari and Chromium-based browsers)
   - [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (for Firefox)
5. [Bookmarklets](https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks)

## Analysis

### Custom Browser Extension / Add-on

This option would involve creating our browser extension (or add-on) that will enable the users to navigate using the
gamepad.

#### Advantages

- Stable and long-term support.
- Based on JavaScript and can support Infusion.
- Provides various Chrome APIs which would be useful in implementing certain navigation effects/features.
- Lightweight and easy for users to set-up (and install).
- Requires no separate execution of scripts by the user.
- Can run on both Desktop and Mobile.<br>
  (In the case of mobiles, only a few browsers can run it)

#### Disadvantages

- Cross-browser restrictions, i.e., a Chrome-based extension can't run on Firefox or vice-versa.

Most browsers (Chrome, Microsoft Edge, Opera, etc.) are based on Chromium and can thus run Chrome Extension. The
Chromium-based browsers for mobile such as [Kiwi](https://tinyurl.com/y9ucoq6l) also support and allow users to install
and run Chrome Extensions (unlike Google Chrome for mobile).

Although a Firefox add-on would offer the same support and features, it will only be limited to Firefox. Talking about
Safari add-ons, it would be accessible only to Apple users, as Safari runs only on macOS and iOS.

A Chrome extension would be accessible to a wide range of users, and so I believe that a Chrome Extension would be
better than a Firefox or Safari add-on if we choose to proceed with this option. The Chrome Extension can be ported to
Firefox and Safari later in the future.

### Electron.js Desktop App

This would involve making a desktop app that can work at the OS level.

#### Advantages

- Stable and long-term support.
- OS-level execution of actions.
- Simulate keyboard as well as mouse events.
- Based on JavaScript and can support Infusion.
- Easy for users to set-up (and install).
- Requires no separate execution of scripts by the user.

#### Disadvantages

- No support for devices other than a desktop or a PC.
- ([Node Key Sender](https://tinyurl.com/y9zaextg)) Requires a separate Java Environment in the OS to work.
- ([Robot.js](https://www.npmjs.com/package/robotjs)) No stable release yet.
- Large size (> 100mb) and resource hogging.

This solution would offer more control to the users in terms of navigation. The significant limitation would be that it
won't work on mobile and will consume a high amount of resources. Also, a few solutions already exist which offer the
users to navigate at OS-level using a gamepad.

### Espruino Pico

This is a bit of a different approach. As of now, we want to have browser navigation using a gamepad. But we can
achieve similar results using an Internet of Things (IoT) board. Espruino Pico is one such IoT board that can be used
both as a keyboard and a mouse.

#### Advantages

- Based on JavaScript.
- OS-level execution of actions.
- Simulate keyboard as well as mouse events (*[Read more](https://www.espruino.com/USB)*).
- Requires no separate execution of scripts by the user.
- Low cost (under $50).

#### Disadvantages

- Requires a lot of technical setup and integration by the user.
- Cannot use Infusion as its minified package's size (around **860 kB**) is more than the storage capacity of Espruino
  Pico (**384 kB**).<br>
  (*More information regarding the specifications of Espruino Pico can be found [here](https://tinyurl.com/y8ejo2hc)*)
- Might require additional hardware (buttons, switches, pins, etc.) to work.
- Can be easily damaged or destroyed (bricked) by the user.
- Requires knowledge from the user to debug or fix, if damaged (bricked).
- Less flexible in terms of reconfiguration.

Although this is a low-cost solution, it seems inconvenient to me, both as a developer and a user. This would require
too much of technical setup and integration and a decent knowledge of IoT Boards. Users might feel overwhelmed.

### Secondary Extensions / Add-ons

There are some extensions or add-ons that can inject our code (scripts) into the webpages. Some of the popular ones are
[Tampermonkey](https://tinyurl.com/lucpy9z) (for Safari and Chromium-based browsers) and
[Greasemonkey](https://tinyurl.com/4hx95zb) (for Firefox).

#### Advantages

- Based on JavaScript and can support Infusion.
- Can run on both Desktop and Mobile (supported for a few browsers only).

#### Disadvantages

- Requires setting-up and loading the scripts separately by the user.
- Limitations in regards to a few navigation features or effects.
- More dependent on technology.
- Sometimes load potentially unwanted programs (PUPs) and malware in the background.
- Contains some potential bugs that can hamper the user experience.
- Less flexible in terms of reconfiguration.

### Bookmarklets

A bookmarklet is a bookmark tab that injects script into the current webpage when pressed. The bookmark tab must be
linked to the script that we want to insert, and the script must be hosted on the web.

#### Advantages

- Based on JavaScript and can support Infusion.
- Requires no additional software/hardware to install and set-up.
- Can run on both Desktop and Mobile.
- Supported by all the browsers.

#### Disadvantages

- Requires the user to set-up the bookmarklet manually.
- Needs to be executed manually every time the webpage is updated, reloaded, or a new tab or browser window is opened.
- Limitations in regards to a few navigation features or effects.
- Less flexible in terms of reconfiguration.

## Summary

With the points as mentioned above, a Chrome Extension or an Electron App seems appropriate for the project. Espruino
Pico is also a potential candidate, but the former two seem to be a better option.

Both Electron.js and Chrome Extension have similar usage patterns and workflow. However, the Robot.js package (to be
used with Electron App) is yet to release its stable version and has some limitations in regards to keyboard and mouse
actions (depending upon the OS). Also, to generate an executable Electron App for different operating systems, the
build process needs to be carried out from all those operating systems. It would require access to those operating
systems and might also need some additional C/C++ libraries for Robot.js to build and work.

Although an Electron App offers more control to the users, the Chrome Extension is a winning candidate because of the
above limitations (for Electron App) and the Chrome Extension's ease of installation/setup, usage, and configuration.
Another edge the Chrome Extension has over the Electron App is that the former can run on mobile.

## Conclusion

I propose to proceed with a Chrome Extension for the project.
