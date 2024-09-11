import {MongoClient} from "mongodb";

// Replace the following with values for your environment.
const username = encodeURIComponent("root");
const password = encodeURIComponent("root");
const clusterUrl = "127.0.0.1:27017";

const authMechanism = "DEFAULT";

// Replace the following with your MongoDB deployment's connection string.
const uri =
  `mongodb://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`;

// Create a new MongoClient


// Function to connect to the server
async function run() {
  const client = await new MongoClient(uri);
  try {
    // Establish and verify connection
    
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    const myDB = client.db("ExerciseDB");
    const myColl = myDB.collection("exercise");
    const cursor = myColl.find({});
    for await (const doc of cursor) {
        // console.dir(doc);
        console.log("---------------------------------------------------------------------")
      }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);


export async function readData(databaseName, collectionName, query){
  const client = await new MongoClient(uri);
  if(!client){
    return ; 
  }

  try {
    // Establish and verify connection
    
    const myDB = client.db(databaseName);
    const myColl = myDB.collection(collectionName);
    // const cursor = await myColl.find(query);
    const cursor = await myColl.find(query).toArray();
    // console.log(query);
    // console.log(cursor);
    return cursor;
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function readSpecificData(databaseName, collectionName, query,options){
  const client = await new MongoClient(uri);
  if(!client){
    return ; 
  }

  try {
    // Establish and verify connection
    
    const myDB = client.db(databaseName);
    const myColl = myDB.collection(collectionName);

    const cursor = await myColl.find(query,options).toArray();
  
    return cursor;
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function insertOneData(databaseName, collectionName, query){
  const client = await new MongoClient(uri);
  if(!client){
    return ; 
  }

  try {
    // Establish and verify connection
    
    const myDB = client.db(databaseName);
    const myColl = myDB.collection(collectionName);

    const cursor = await myColl.insertOne(query);
  
    return cursor;
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}