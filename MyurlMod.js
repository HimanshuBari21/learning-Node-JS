const url = require("url");

const myURL = new URL("http://ekisandarshan.in")

myURL.pathname = "/home"

console.log(myURL);
console.log(myURL.href);