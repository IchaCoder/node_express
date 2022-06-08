const path = require("path");

const filePath = path.join("/content", "user");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "user");
console.log(absolute);
