import axios from 'axios'

export function deleteEntry(id){
    axios({
        url: 'api/delete',
        method: 'DELETE',
        data: id
    })
        .then(()=>{
            console.log('Data deleted')
        })
        .catch(()=>{
            console.log('Data not deleted')
        });
};