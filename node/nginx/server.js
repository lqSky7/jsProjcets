const http = require("http");
const fs = require("fs");
const path = require("path");
const { isUtf8 } = require("buffer");

const port = 4001;

const server = http.createServer((req, res) => {
    const filepath = path.join(__dirname, req.url === "/" ? "index.html" : req.url); // if user just pings website without any specific path or at root handle with this case

    const extname = String(path.extname(filepath).toLowerCase()) // will be used later in the code, make sure its lowercase.

    // what type of files our server will support
    const mimeTypes = {
        '.html': "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
    } 

    const mime = mimeTypes[extname] || 'application/octet-stream';

    // upto this server is just grabbing the filenames.we havent served anything yet
    fs.readFile(filepath, (err, data) => {
        if (err){
            if(err.code==="ENOENT"){
                res.writeHead(404, {"content-type": "text/html"})
                res.end("not found fr");
            }
        }
        else{
            res.writeHead(200, { "Content-Type": mime });
            res.end(data, 'utf-8') 
                }
            });

})


server.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
})