import axios from 'axios';

export function submit(treeData, nameEntered, categoryEntered, notesEntered, assetEntered, threatEntered, lossEntered){
    const payload = {
        name: nameEntered,
        category: categoryEntered,
        data: treeData,
        notes: notesEntered,
        asset: assetEntered,
        threat: threatEntered,
        loss: lossEntered
    };
    console.log(payload.notes);

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