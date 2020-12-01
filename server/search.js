const Database = require('./Database');
let namefilter = "";
let datefilter = "";
let arr;

async function filterSearch(client, prompt){
    arr = await client.db("FAIR").collection("Data").find().toArray();
    console.log(namefilter);
    console.log(datefilter);
    let result = arr;
    let Name = prompt("Name: ");
    if(Name != "" && result != namefilter){
        namefilter = Name;
        result = result.filter(o => o.name === Name);
    }
    else{
        result = result.filter(o => o.name === namefilter);
    }
    console.log(result);
    let Date = prompt("Date: ");
    if(Date != "" && Date != datefilter){
        datefilter = Date;
        result = result.filter(o => o.date === Date);
    }

    console.log(result);
}

module.exports.filterSearch = filterSearch;