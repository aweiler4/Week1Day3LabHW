const express = require('express');
const app = express();

app.get('/greeting', (req, res) => {
    res.send(`What's up? It's so great to see you!`)
})
app.get('/greeting/:name', (req, res) => {
    res.send(`Wow! Hello there, ${req.params.name}!`)
})















app.listen(3000, function() {
    console.log('listening on port 3000...')
})