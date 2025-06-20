const fs = require('fs');
const path = './allure-results';

if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
}

const executorData = {
    name: "Local Run",
    type: "WebdriverIO",
    buildOrder: 1,
    buildName: "ToDo Web Automation",
    executor: "sapan jain's Laptop"
};

fs.writeFileSync(`${path}/executor.json`, JSON.stringify(executorData, null, 2));
console.log("✅ executor.json created successfully");
