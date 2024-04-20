const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// LudDrAtLe0xdZXzZ
// niazahmedan

const uri =
  "mongodb+srv://niazahmedan:LudDrAtLe0xdZXzZ@cluster0.2evw8as.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    // read user
    app.get('/users', async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    


    // create new user
    app.post(`/users`, async (req, res) => {
      const user = req.body;
      console.log("New user", user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // delete user
    app.delete('/users/:id',async (req,res)=>{
      const id = req.params.id;
      console.log('delete user form database',id);

      const query = {_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("simple curd application");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
