import axios from 'axios';

export function submit(treeData, nameEntered, categoryEntered, notesEntered){
    const payload = {
        name: nameEntered,
        category: categoryEntered,
        data: treeData,
        notes: notesEntered
    };
    console.log(payload.name);

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