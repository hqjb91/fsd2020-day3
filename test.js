//Load node fetch and with query
const fetch = require('node-fetch');
const withquery = require('with-query').default;
const API_KEY = require('./keys');

const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

const url = withquery(ENDPOINT, {
    q: 'Singapore',
    appid: API_KEY
});

fetch(url).then((result)=>result.json()).then(data => {
    console.log(data);
}).catch((error)=>{
    console.log(error);
});