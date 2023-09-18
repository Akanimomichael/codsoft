const fs = require("fs-extra");
const path = require("path");

// Define the source and destination directories
const srcDir = path.join(__dirname, "src");
const distDir = path.join(__dirname, "dist");

// Create the "dist" directory if it doesn't exist
fs.ensureDirSync(distDir);

// Copy HTML, JS, and CSS files to the "dist" directory
fs.copySync(path.join(srcDir, "index.html"), path.join(distDir, "index.html"));
// fs.copySync(path.join(srcDir, "main.js"), path.join(distDir, "main.js"));
fs.copySync(path.join(srcDir, "styles.css"), path.join(distDir, "styles.css"));

console.log("Build completed.");
