//fetching data crickbuzz
const fetch = require('node-fetch');


const url = 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fbb5b19ccfmsh977338aa7a90dbbp155526jsn0062c48de7c6',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('error:' + err));