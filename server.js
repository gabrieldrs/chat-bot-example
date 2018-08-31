var http = require('http');
var https = require('https');
var fs = require('fs');

const workspaceID = '<paste-your-workspace-id-here>';
const username = '<paste-your-watson-assistant-username-here>';
const password = '<paste-your-watson-assistante-password-here>';

const ASSISTANT_HOST = 'gateway.watsonplatform.net';
const ASSISTANT_PATH = `/conversation/api/v1/workspaces/${workspaceID}/message?version=2018-02-16`;
const ASSISTANT_AUTH = new Buffer.from(username + ":" + password).toString('base64')

http.createServer(function (req, res) {
    if (req.url === "/message") return handleWatsonMessage(req, res);
    else return handleRequest(req,res);
}).listen(8080, () => console.log("Server listening on http://localhost:8080"));

function handleRequest(req, res) {
    fs.lstat( __dirname+req.url, (err, stats) => {
        if (err) {
            res.statusCode = 404
            return res.end()
        }
        let responseBody = "";
        if (stats.isFile()) responseBody = fs.readFileSync(__dirname + req.url);
        else responseBody = fs.readFileSync(__dirname + "/index.html");
        res.write(responseBody);
        res.end();
    });
}

function handleWatsonMessage(req, res) {
    if (req.method === "POST") {
        let body = "";
        req.on('readable', function() {
            let readPart = req.read();
            if (readPart !== null)
                body += readPart;
        });
        req.on('end', function() {
            sendMessageToWatson(body, function(watsonResponse) {
                res.write(watsonResponse);
                res.end();
            });
        });
    }
}

function sendMessageToWatson(message, cb) {
    var options = {
        "method": "POST",
        "host": ASSISTANT_HOST,
        "path": ASSISTANT_PATH,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Basic " + ASSISTANT_AUTH
        }
    };

    var req = https.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
        
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            cb(body.toString());
        });

    });

    req.write(message);
    req.end();
}