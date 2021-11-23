import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const withDB = async (operations) => {
    try {
        const uri = "mongodb+srv://dev:dev@devcluster.6bqdl.mongodb.net/test?retryWrites=true&w=majority";
        const client = await MongoClient.connect(uri, { useNewUrlParser: true});
        const db = client.db('test');

        await operations(db);

        client.close();
    } catch (error) {
        // res.status(500).json({message: 'Error connecting to db', error});
    }
}

app.post('/api/restaurant', async (req, res) => {
    withDB(async (db) => {
        const body = req.body;
        const userInfo = await db.collection('users').findOne({ username: body.username});
        console.log(userInfo);
        if(userInfo == null || body.password != userInfo.password) {
            res.status(500).json({ message: 'error' })
        } else if(body.username == userInfo.username && body.password == userInfo.password){
            res.status(200).json(userInfo);
        }
        
    })
})

// app.get('/hello', (req, res) => res.send('Hello!'));
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));

app.listen(8000, () => console.log('Listening on port 8000'));
