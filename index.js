const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Nodejs Server Running!"
    })
})

app.get('/ping', (req, res) => {
    res.status(200).json({
        "ping": "pong"
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})