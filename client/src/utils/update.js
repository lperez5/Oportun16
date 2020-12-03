import axios from 'axios'

export function update(payload){
    axios({
        url: 'api/update',
        method: 'PUT',
        data: payload
    })
        .then(() => {
            console.log('Data updated');
        })
        .catch(() => {
            console.log('Data not updated');
        })
}