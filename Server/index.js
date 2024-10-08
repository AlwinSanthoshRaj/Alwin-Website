const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log } = require('console');
const uri = "mongodb+srv://alwinsanthoshraj123:Alwin@cluster0.wdqmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const port = process.env.PORT || 3000;
const app = express();
let client;
let clientPromise;
app.use(cors({}));
if (!client) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}
app.use(bodyParser.json());
app.get('/', async (req, res) => {
    res.status(200).send("The server is running perfectly");
  });
  
app.post('/insertUser', async (req, res) => {
    const { user, pass } = req.query;
    try {
        const connection = await clientPromise;
        const db = connection.db("Alwin");
        const collection = db.collection("Users");
        console.log(user, pass);
        const result = await collection.insertOne({ user, pass });
        res.status(200).json({ user, pass, message: "User inserted successfully", result });
      } catch (error) {
        console.error("Error inserting user data:", error);
        res.status(500).json({ error: "Error inserting user data" });
      }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});