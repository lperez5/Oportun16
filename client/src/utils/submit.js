import axios from 'axios';

export function submit(treeData){
    const payload = {
        name: "Luis",
        category: "Availability",
        data: treeData
      }
      console.log(treeData);

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