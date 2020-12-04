import axios from 'axios';

export function submit(payload){

  return new Promise((resolve, reject)=>{
    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
    .then((res) => {
      console.log('Data has been sent');
      resolve(res.data.id);
      })
    .catch(() => {
      console.log('Data has not been sent')
    });;
  })
};
