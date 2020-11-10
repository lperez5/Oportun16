const Database = require('./Database');

async function filterSearch(client, prompt){
    let searchName = prompt("Enter name: ");
    let searchDate = prompt("Enter Date(mm/d/yyyy): ");

    if(searchName != "" && searchDate != ""){
        await searchNameDate(client, searchName,searchDate);
    }
    else if(searchName != ""){
        await searchbyName(client, searchName);
    }
    else if(searchDate != ""){
        await searchbyDate(client,searchDate);
    }
    else{
        await Database.viewData(client);
    }
}

async function searchNameDate(client, searchName, searchDate){
    const results = await client.db("FAIR").collection("Data").find({name: { $eq: searchName },date: { $eq: searchDate}}).toArray();

        if (results.length > 0) {
            console.log(`Found result(s) with name and date: ${searchName}`);
            results.forEach((result, i) => {

                console.log();
                console.log(`${i + 1}`);
                console.log(result);
            });
        } else {
            console.log(`No result found`);
        }
}

async function searchbyName(client, searchName){
    const results = await client.db("FAIR").collection("Data").find({name: { $eq: searchName }}).toArray();

        if (results.length > 0) {
            console.log(`Found result(s) with name: ${searchName}`);
            results.forEach((result, i) => {

                console.log();
                console.log(`${i + 1}`);
                console.log(result);
            });
        } else {
            console.log(`No result found`);
        }
}

async function searchbyDate(client, searchDate){
    const results = await client.db("FAIR").collection("Data").find({date: { $eq: searchDate }}).toArray();
        if (results.length > 0) {
            console.log(`Found result(s) with date: ${searchDate}`);
            results.forEach((result, i) => {
    
                console.log();
                console.log(`${i + 1}`);
                console.log(result);
            });
        } else {
            console.log(`No result found`);
        }
}

module.exports.filterSearch = filterSearch;