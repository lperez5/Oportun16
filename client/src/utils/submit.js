import axios from 'axios';

export function submit(payload){

    axios({
        url: '/api/save',
        method: 'POST',
        data: payload
    })
        .then(() => {
          console.log('Data has been sent');
        })
        .catch(() => {
          console.log('Data has not been sent')
        });;
};