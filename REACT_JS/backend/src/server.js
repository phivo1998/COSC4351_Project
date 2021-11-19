import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

const withDB = async (operations) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true});
        const db = client.db('restaurant');

        await operations(db);

        client.close();
    } catch (error) {
        res.status(500).json({message: 'Error connecting to db', error});
    }
}

app.post('/api/restaurant', async (req, res) => {
    withDB(async (db) => {
        const body = req.body;
        const userInfo = await db.collection('authentication').findOne({ username: body.username});
        if(body.username == userInfo.username && body.password == userInfo.password) {
            res.status(200).json(userInfo);
        }
        
    })
})

app.get('/hello', (req, res) => res.send('Hello!'));
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));

app.listen(8000, () => console.log('Listening on port 8000'));
