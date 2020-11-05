const Search = require('./search');
var ObjectID = require('mongodb').ObjectID

async function options(client){
    const prompt = require('prompt-sync')({sigint: true});
    var bool = false;

    while(!bool){
      let answer = prompt("Enter function operation: ");
      input = Number(answer);

      if(input === 1){
        await submitData(client, prompt);
      }
      else if(input === 2){
        await selectData(client, prompt);
      }
      else if(input === 3){
        await viewData(client);
      }
      else if(input === 4){
        await updateData(client, prompt);
      }
      else if(input === 5){
        await deleteData(client, prompt);
      }
      else if(input === 6){
        console.log(new Intl.DateTimeFormat('en-US').format(Date.now()));
      }
      else
        bool = true;
    }
}

async function submitData(client, prompt){
    let newListing = {name: prompt("name: "), date: new Intl.DateTimeFormat('en-US').format(Date.now()), summary: prompt("summary: ")};
    const result = await client.db("FAIR").collection("Data").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function selectData(client, prompt){
  await Search.filterSearch(client, prompt);
}

async function viewData(client){
    var array = await client.db("FAIR").collection("Data").find().toArray();
    for(i = 0; i < array.length; i++){
      console.log();
      console.log(`${i + 1}`);
      console.log(array[i]);
    }
}

async function updateData(client, prompt) {
    let idUpdate = prompt("Enter the ID of the document you want to update: ");
    updateID = ObjectID(idUpdate);
    result = await client.db("FAIR").collection("Data").updateOne({ _id: updateID }, { $set: {name: prompt("name: "), date: prompt("date: "), summary: prompt("summary: ")} });

    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function deleteData(client, prompt){
    let idDelete = prompt("Enter the ID of the document you want deleted: ")
    deleteID = ObjectID(idDelete);
    result = await client.db("FAIR").collection("Data").deleteOne({_id: deleteID});
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

module.exports.options = options;
module.exports.viewData = viewData;
