# To-Do Mobile App Automation Project

This project contains automated test cases for the To-Do List Mobile App using WebdriverIO, Appium, and Allure for reporting. The project supports Android device/emulator testing with Allure report generation.

Prerequisites

Ensure the following software and environment setup exists on your system:

| Tool / Requirement     | Details |
|------------------------|---------|
| Node.js            | Version 16 or above |
| Java JDK           | Version 8 or above |
| JAVA_HOME          | Must be set to JDK path (not `/bin`) <br>Example: `C:\Program Files\Java\jdk1.8.0_202` |
| Appium Server      | Installed and running locally |
| Android Device     | Emulator or USB-connected device with developer mode enabled |
| Allure CLI         | Install using: `npm install -g allure-commandline` |


Make sure Appium is running and an emulator/device is available.

1. Open terminal or PowerShell inside the extracted project folder.

2. Run tests using:

npx wdio wdio.conf.js

//for allure report creation

Remove-Item -Recurse -Force allure-results, allure-report //if present
npx wdio run wdio.conf.js
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report#   a p p i u m  
 #   a p p i u m  
 