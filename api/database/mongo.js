
const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://swyftxUser:BlueSheep1@mycluster.zpf10.mongodb.net/MyCluster?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Function used to create a collection in mongodb instance
async function createCollection(dbName, collectionName){
  try{
    await client.db(dbName).createCollection(collectionName);
  } catch(err){
    console.log("there was an issue!");
  }
}

//Function used to get all records from a specified collection
async function getAll(dbName, collectionName){
  try{
    let data = await client.db(dbName).collection(collectionName).find({}).toArray();
    return data;
  } catch(err){
    console.log("there was an issue!");
  }
}

async function getOne(dbName, collectionName, query){
  try{
    const db = req.app.locals.db;
    let data = await db.collection(collectionName).find(query).toArray();
    return data;
  } catch(err){
    console.log("there was an issue!");
  }
}

async function insertOne(dbName, collectionName, object){
  try{
    await client.db(dbName).collection(collectionName).insertOne(object);
  } catch(err){
    console.log("there was an issue!");
  }
}



// async function startConnection(){
//   return await client.connect();
// }

// async function endConnection(){
//   await client.close();
// }

// exports.startConnection = startConnection;
// exports.endConnection = endConnection;
exports.createCollection = createCollection;
exports.getOne = getOne;
exports.getAll = getAll;
exports.insertOne = insertOne;





// client.connect(err => {
//   if (err) throw err;
//   console.log("The client has connected");
  
//   // //Create Mongo collection
//   // client.db("test").createCollection("customers", function(err, res) {
//   //   if (err) throw err;
//   //   console.log("Collection created!");
//   //   client.close();
//   // })


//   // //Add record to mongo
//   // var testCustomer = {
//   //   name: "Woolies Pty Ltd",
//   //   address: "Bulimba St",
//   //   size: 185,
//   //   test: "Extra value"
//   // };
//   // client.db("test").collection("customers").insertOne(testCustomer, function(err, res) {
//   //   if(err) throw err;
//   //   console.group("A document was inserted!");
//   //   client.close();
//   // })


//   // //Add multiple records to mongo
//   // var testCustomers = [
//   //   cust1 = {
//   //     name: "Flamingo sellers Pty Ltd",
//   //     address: "Nowhere St",
//   //     size: 20,
//   //     test: "Extra value"
//   //   },
//   //   cust2 = {
//   //     name: "Water bottle Pty Ltd",
//   //     address: "Somewhere St",
//   //     size: 15,
//   //     test: "Something random value"
//   //   }
//   // ];
//   // client.db("test").collection("customers").insertMany(testCustomers, function(err, res) {
//   //   if(err) throw err;
//   //   console.group("A document was inserted!");
//   //   client.close();
//   // })

//   let query = { name: /^C/ };
//   client.db("test").collection("customers").find(query).toArray(function(err, res) {
//     if(err) throw err;
//     console.log(res);
//     client.close();
//   })

// });
