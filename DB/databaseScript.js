const { MongoClient, MongoServerError } = require("mongodb");

const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("ResumeBuilder");
    var Resumes = db.collection('Resumes');
    
    const findResult = await Resumes.find({}).toArray();
    console.log('Found documents =>', findResult);
    // the following code examples can be pasted here...
  
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());