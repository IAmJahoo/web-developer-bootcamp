let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Kasia jest fajna i w ogóle!');
});

app.listen(17000);