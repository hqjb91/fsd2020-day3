//Load node fetch and with query
const fetch = require('node-fetch');
const withquery = require('with-query').default;
const API_KEY = require('./keys');

const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city, apikey) => {
    const url = withquery(ENDPOINT, {
        q: 'Singapore',
        appid: apikey
    });

    const result = await fetch(url);
    try 
    {
        const data = await result.json();
    } catch(e) {
        console.error('ERROR', e);
        return Promise.reject(e);
    }

    return data; //same as return Promise.resolve(data)

};

getWeather('Singapore', API_KEY).then( weather => console.log(weather));