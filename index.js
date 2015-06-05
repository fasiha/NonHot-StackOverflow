// Import the page-mod API
var pageMod = require("sdk/page-mod");
 
// Create a page mod
pageMod.PageMod({
  include: ["*.stackoverflow.com", "*.stackexchange.com"],
  contentScriptFile: "./client-script.js"
});

