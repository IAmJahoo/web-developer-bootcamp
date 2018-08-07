let express = require('express');
let app = express();

let listenPort = 3000;
let animalsObject = {
    'pig' : 'quick',
    'cow' : 'moo',
    'cat' : 'meaow',
    'dog' : 'woof woof',
    'duck': 'quack quack',
};

app.get('/', (req, res) => {
    res.send('Welcome in express farm');
});

app.get('/speak/:animal', (req, res) => {
    let animalSelection = req.params.animal;
    if (Object.keys(animalsObject).includes(animalSelection)) {
        res.send(animalsObject[animalSelection]);
    } else {
        res.send('Nie ma takiego zwierza na tej farmie')
    }
});

app.get('/repeat/:sequence/:howMany', (req, res) =>{
    let wordToDisplay = req.params.sequence;
    let howManyDisplay = req.params.howMany;
    let sequenceToDisplay ='';
    for (howManyDisplay; howManyDisplay>=1; howManyDisplay--){
        sequenceToDisplay += wordToDisplay + ' ';
    }
    res.send(sequenceToDisplay);

});

app.listen(listenPort, () => {
    console.log('Server running on port ' + listenPort)
});