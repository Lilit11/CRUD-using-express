const express = require('express')
const app = express()
const fs = require('fs')

const port = 3001
const body_parser = require('body-parser')
app.use(body_parser.text())

app.use((req, res, next) => {
    const start = Date.now()
    console.log(`${req.method} request recevied`)


    res.on('finish', () => {
        const duration = Date.now() - start
        console.log(`time taken to response ${duration}ms`);
    });
    next();

})

app.get('/', (req, res) => {
    res.status(200).send("Showing Homepage")
})
app.get('/about', (req, res) => {
    res.status(200).send("Showing About page")
})

app.get('/data', (req, res) => {

    fs.readFile('data.txt', 'ascii', (err, data) => {
        if (err) {
            res.status(400).send("cannot read file")
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/data', (req, res) => {


    fs.writeFile('data.txt', req.body, 'ascii', (err) => {

        if (err) {
            res.status(400).send("cannot write to file")
        } else {
            res.status(200).send("succesfully written")
        }
    })

})




app.listen(port, () => {
    console.log("Server is running on port:" + port)
})