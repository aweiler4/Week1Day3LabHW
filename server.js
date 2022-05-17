const express = require('express');
const app = express();

app.get('/greeting', (req, res) => {
    res.send(`What's up? It's so great to see you!`)
})














app.listen(3000, function() {
    console.log('listening on port 3000...')
})