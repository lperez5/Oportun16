const algo = require('./algo');
const {MongoClient, DBRef} = require('mongodb');
// const {ObjectId} = require('mongodb');

//get from frontend inputs
var PAD = [0, 0];                                    //Probability of Action Deterrence
var CFA = [0, 0];                                    //Contact Frequency Avoidance
var RSV = [0, 0];                                    //Resistance Strength Vulnerability
var PLMR = [0,0];                                    //Primary Loss Magnitude Responsive
var SLMR = [0, 0];                                   //Secondary Loss Magnitude Responsive
var TC = 0;                                          //Threat Capability
var SLP = 0;                                         //Secondary Loss Probability

var PADout = 1;
var CFAout = 2;
//var TEFout = M_TEF[CFAout,PADout];                 //maybe reverse order of inputs in array?
var RSVout = 3;                                      //this needs to be changed to the output of RSV matrix
//var VULNout = M_VULN[TC, RSVout];
//var LEFout = algo.M_PLEF[TEFout, VULNout];
var PLMRout = 4;                                     //this needs to be changed to the output of PLMR matrix
//var primaryRiskout = M_primaryRisk[PLMRout,LEFout];



async function main(){

  const url = "mongodb+srv://opportun16:nZJxFmLrhK5sWuZ@cluster0.qtrsx.mongodb.net/Cluster0?retryWrites=true&w=majority";

  const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  const prompt = require('prompt-sync')({sigint: true});

  try{
    await client.connect();

    //await functionNumber(client, prompt);
    var bool = false;
    while(!bool){
      let answer = prompt("Enter function operation: ");
      input = Number(answer);
    
      if(input === 1){
        await submitData(client, prompt);
      }
      else if(input === 2){
        await findOneListingByName(client, prompt);
      }
      else if(input === 3){
        await listDatabases(client);
      }
      else if(input === 4){
        await deleteData(client, prompt);
      }
      else if(input === 5){
        await update(client, prompt);
      }
      else
        bool = true;
    }

  }
  catch(e){
    console.error(e);
  }
  finally{
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases");
  databasesList.databases.forEach(db => console.log(` -${db.name}`));
}

async function submitData(client, prompt){ 
  let newListing = {name: prompt("name: "), date: prompt("date: "), summary: prompt("summary: ")};
  const result = await client.db("FAIR").collection("Data").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function findOneListingByName(client, prompt){
  let nameList = prompt("Enter name of document: ");
  result = await client.db("FAIR").collection("Data").findOne({name: nameList});

  if (result){
    console.log('Found a listing in the collection')
    console.log(result);
  }
  else{
    console.log("No results");
  }
}

async function deleteData(client, prompt){
  let idOfListing = prompt("Enter the id of the document you want deleted: ")

  result = await client.db("FAIR").collection("Data").deleteOne({_id: idOfListing});
  console.log('${result.deletedCount} document(s) was/were deleted.')
}

async function update(client, prompt) {
  let section_Update = prompt("Enter name of listing: ");

  result = await client.db("FAIR").collection("Data").updateOne({ name: section_Update }, { $set: {name: "John"} });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}