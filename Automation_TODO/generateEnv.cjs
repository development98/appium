const fs = require('fs');

const envContent = `Test Type=UI Testing
Framework=WebdriverIO + Mocha
Executed By=Sapan Jain
Execution Date=${new Date().toLocaleDateString()}
`;

fs.writeFileSync('allure-results/environment.properties', envContent);
console.log('✅ environment.properties generated successfully');
