const fs = require("fs");

fs.readFile("index.txt", "utf8", (err, data) => {
    console.log(err, data);
})

const a = fs.readFileSync("index.html","latin1");
console.log(a);

fs.writeFile("index.html", "<html>\n\t<body>\n\t\t</p>Use caution when making use of Experimental features, particularly within modules. Users may not be aware that experimental features are being used. Bugs or behavior changes may surprise users when Experimental API modifications occur. To avoid surprises, use of an Experimental feature may need a command-line flag. Experimental features may also emit a warning.</p>\n\t</body>\n<html>", () => {
    console.log("Data Inserted in index.html")
});
