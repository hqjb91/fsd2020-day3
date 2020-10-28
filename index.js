//Loading libraries
const express = require('express');
const hbs = require('express-handlebars');

//Loading fortune cookie array
const fortunecookie = require('./fortune-cookie');

//Create an instance of express
const app = express();

const PORT = 3000;

//Configure the application
app.get('/', (req, res)=>{
    res.status(200);
    res.format({
        'text/html': () => {
            res.send(`<h1>${fortunecookie()}</h1>`);
        },
        'text/plain': () => {
            res.send(`${fortunecookie()} test`);
        },
        'application/json': () => {
            const text = fortunecookie();
            res.json({text,
            generatedOn: (new Date()).toString()});
        },
        'default': () => {
            res.status(406);
            res.type('text/plain');
            res.send('Not supported: ' + req.get('Accept'));
        }
    });
});

//Start the server
app.listen(PORT, () => {
    console.log('Server has started.')
});