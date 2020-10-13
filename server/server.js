const LEF = [
    [3, 4, 5, 5, 5],
    [2, 3, 4, 4, 4],
    [1, 2, 3, 3, 3],
    [1, 1, 2, 2, 2],
    [1, 1, 1, 1, 1]
  ];
const vuln = [
    [5, 5, 5, 4, 3],
    [5, 5, 4, 3, 2],
    [5, 4, 3, 2, 1],
    [4, 3, 2, 1, 1],
    [3, 2, 1, 1, 1]
  ];
const SLEF = [
    [3, 4, 5, 5, 5],
    [2, 3, 4, 5, 5],
    [1, 2, 3, 4, 5],
    [1, 1, 2, 3, 4],
    [1, 1, 1, 2, 3]
  ];
const primaryRisk = [
    [3, 4, 5, 5, 5],
    [2, 3, 4, 5, 5],
    [1, 2, 3, 4, 5],
    [1, 1, 2, 3, 4],
    [1, 1, 1, 2, 3]
  ];
const secondaryRisk = [
    [3, 4, 5, 5, 5],
    [2, 3, 4, 5, 5],
    [1, 2, 3, 4, 5],
    [1, 1, 2, 3, 4],
    [1, 1, 1, 2, 3]
  ];
const overallRisk = [
    [5, 5, 5, 5, 5],
    [4, 4, 4, 4, 5],
    [3, 3, 3, 4, 5],
    [2, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
  ];
//missing the Threat Event Frequency matrix, need from industry partner.

var PAD = [0, 0];           //Probability of Action Deterrence
var CFA = [0, 0];           //Contact Frequency Avoidance
var RSV = [0, 0];           //Resistance Strength Vulnerability
var SLMR = [0, 0];          //Secondary Loss Magnitude Responsive
var TC = 0;                 //Threat Capability
var SLP = 0;                //Secondary Loss Probability

const {MongoClient} = require('mongodb');

async function main(){
  const url = "mongodb+srv://opportun16:nZJxFmLrhK5sWuZ@cluster0.qtrsx.mongodb.net/Cluster0?retryWrites=true&w=majority";
  
  const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

  try{
    await client.connect();
    //await addDatabase(client);
    await listDatabases(client);
  }
  catch(e){
    console.error(e);
  }
  finally{
    await client.close();
  }
}

main().catch(console.error);

// async function addDatabase(db){
//   var FAIRdb = db.db("FAIR tool");
//   var myobj = {name:"John", date:"04-10-1999"};
//   FAIRdb.collection("data").insertOne(myobj, function(err,res){
//     if(err) throw err;
//     console.log("1 document added");
//     db.close();
//   });
// }

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases");
  databasesList.databases.forEach(db => console.log(` -${db.name}`));
}