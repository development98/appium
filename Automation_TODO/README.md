# WebdriverIO Automation Project – ToDo Web App

This project automates functional test cases for the **ToDo Web Application** using **WebdriverIO (WDIO)**, **Mocha**, and **Allure Reporting**.
 
## Prerequisites

Ensure the following tools are installed before running the automation suite:

### 1. Node.js & NPM
Download and install from the official site:  
🔗 [https://nodejs.org/](https://nodejs.org/)

After installation, verify using:
node -v
npm -v


2. Google Chrome
Ensure the Google Chrome browser is installed.
🔗 https://www.google.com/chrome/

 Getting Started
 Follow these steps to set up and run the test suite:

 1. Extract Project Files
    Unzip or clone the project folder into your desired location.

2. Install Dependencies
   Install all required Node packages using:
   npm install 

   **If you face issues, use**
   npm install --force


 **Running the Tests**
   You can run the test suite using either of the following commands:

   Option 1: Using npx 
   npx wdio

   Option 2: Using npm script
   npm run wdio


//For allure report creation

# Step 1: Remove old results & report
Remove-Item -Recurse -Force allure-results, allure-report

# Step 2: Run test cases via WebdriverIO
npx wdio run wdio.conf.js

# Step 3: Generate environment.properties file
node generateEnv.cjs

# Step 4: Generate generateExecutor.properties file
node generateExecutor.cjs

# Step 5: Generate fresh Allure report
npx allure generate allure-results --clean -o allure-report

# Step 6: Copy history for trend data
Copy-Item -Recurse -Force .\allure-report\history\ .\allure-results\history\

# Step 7: Open the report in browser
npx allure open allure-report

# Step 8: Sometimes it will happen TREND section will show any data so just repeat the step 5,6,7 one more time (optional)


3. ### Parallel Execution### 

    Edit the specs section in wdio.config.js to switch between:

    specs: [
        //serial
        ['./test/specs/**/TodoList.js',
        ],

        //parallel
        //  './test/specs/**/TodoList.js',
    ],

    spec section need to uncomment this line  //  './test/specs/**/TodoList.js',
 

 4. ###  Switch Browsers ###
    In wdio.config.js, update the capabilities section:

    capabilities: [{
        browserName: 'chrome' // Change to 'firefox', 'edge', etc.
    }],

5. ### Headless Mode ###
    In wdio.config.js, update the capabilities section:

    'goog:chromeOptions': {
            args: ['--headless=new']
        },
   