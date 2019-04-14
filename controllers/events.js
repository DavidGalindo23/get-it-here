const request = require('request');

module.exports = {
    getEvents,
}


function getEvents(req, res) { 
    const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events?';
    // return fetch(`${BASE_URL}apikey=${process.env.TM}`, {mode: "cors"})
    //     .then(res => res.join());
    request({url: `${BASE_URL}apikey=${process.env.TM}`}, function(err, response, body){
        res.json(JSON.parse(body)._embedded);
    });

}
