#!/usr/bin/env node
const { execSync } = require('child_process');

// The list of sites you want to monitor
const targets = ["github.com", "google.com", "netlify.com"];

console.log("\n📡 --- NETWATCH LIVE STATUS --- 📡\n");

targets.forEach(site => {
    try {
        // Run a single network ping command in the background
        execSync(`ping -c 1 ${site}`, { stdio: 'ignore' });
        console.log(`\x1b[32m[ ONLINE ]\x1b[0m ${site}`);
    } catch (error) {
        // If ping fails, catch the error and print a red alert
        console.log(`\x1b[31m[ DOWN   ]\x1b[0m ${site}`);
    }
});
console.log("\n--------------------------------\n");

