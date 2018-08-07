let express = require('express');
let app = express();

let listenPort = 3000;

app.get('/', (req, res) => {
    res.send('Kasia jest fajna i w ogóle!');
});

app.get('/bye', (req, res) => {
    res.send('Kasia jest fajna i w ogóle ale teraz mówi papa :(');
});

app.get('*', (req, res) => {
    res.send('Nie ma takiego routa jak ' +req.path.toString() + ' :O')
})

app.listen(listenPort, () => {
    console.log('Server running on port ' + listenPort)
});