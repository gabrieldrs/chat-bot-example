const express = require('express')
const request = require("request")

const app = express()


app.use(express.static('static'))

app.post('/api/message', (req, res) => {

    let url = "https://gateway.watsonplatform.net/conversation/api/v1/workspaces/8ad1eb40-2598-4b86-ac21-a4840f85d939/message?version=2018-02-16";
    let headers = {
        'Content-type': 'application/json',
        'Authorization': 'Basic NzliYmMwNDItMjA5Ni00NTYzLTk2YzEtNjE4ZTFhMWJhZmFhOlI0eVBHOHIwSmNqNQ=='
    }

    request.post(url, {headers},(err,resp,body) => {
        if (err) {
            console.log(err);
            return res.statusCode(500).send()
        }
        console.log(body);
        return res.send(body);
    })

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))