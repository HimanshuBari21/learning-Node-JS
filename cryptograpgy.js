// Checking if Crypto support is available
// try {
//     crypto = require('crypto');
//   } catch (err) {
//     console.log('crypto support is disabled!');
//   }

const crypto = require('crypto');

// creating a msg to hash it

const msg = "The Secret code for Entry is 224466";

// hashing it with sha256

const hash = crypto.createHmac( 'sha512', msg).update("I hate Russians").digest("hex");

console.log(hash + "\n");

// hashing it with md5

const hash2 = crypto.createHmac("md5", msg).update("lasan").digest("hex");

console.log(hash2);