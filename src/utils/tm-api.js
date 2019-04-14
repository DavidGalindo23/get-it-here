// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events?';

// export function getEvents() { 
//     console.log('tm: ' + process.env.TM)
//     return fetch(`${BASE_URL}apikey=${process.env.TM}`, {mode: "cors"})
//         .then(res => res.join());
// }

import tokenService from './tokenService'

const BASE_URL = '/api/events/'

export function getEvents() {
    return fetch(BASE_URL + 'getall', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken(),
        },
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Unable to retrieve data.')
    });

}