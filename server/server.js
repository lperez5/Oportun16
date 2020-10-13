const algo = require('./algo');
const {MongoClient, DBRef} = require('mongodb');

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

  try{
    await client.connect();
    await listDatabases(client);
    // await submitData(client,
    //   {
    //       name: "Test1 from Mat",
    //       summary: "A charming loft in Paris...",    //add db entry
    //       bedrooms: 1,
    //       bathrooms: 1
    //   }
    // );
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

async function submitData(client, newListing){
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}