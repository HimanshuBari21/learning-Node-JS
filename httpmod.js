const http = require("http");

const port = 3000;

const [himanshu,jash] = ["/himanshu","/jash"]

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url == "/") {
        res.end("<h1>Welcome to IT Department</h1>")
    } 
    else if (req.url == "/himanshu") {
        res.end("<h1>Himanshu Yuvraj Bari</h1>")
    }
    else if (req.url == "/jash") {
        res.end("<h1>Jash Santoshkumar Patel</h1>")
    }
    else {
        res.end("<h1>choose from <a href=" + himanshu + " >Himanshu</a> or <a href=" + jash + ">Jash</a> </h1>")
    }
})

server.listen(port, () => { console.log("server is running" + port) });