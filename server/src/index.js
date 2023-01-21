const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({data: "hi"})
})

app.listen(3001, ()=> {
console.log('server running in port 3000')
})