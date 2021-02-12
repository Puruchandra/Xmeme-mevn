const express = require('express')
const mongo = require('mongodb')

const router = express.Router();



//GET 

router.get('/', async (req, res) => {
    
    try {
    const posts = await connectAndGetMemesCollection();
        console.log(posts)
        res.send({"id": 1});
    } catch (error) {
        res.sendStatus(500)
        console.log(error);
    }   
})

//POST



//UPDATE



/* 
  This method 
*/


async function connectAndGetMemesCollection() {
    const client = await mongo.MongoClient.connect('mongodb://13.127.155.18:27017/memes_collections', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log(client.db)
    return client.db('memes_collections').collections('memes')

    
}


//ec2-13-127-155-18.ap-south-1.compute.amazonaws.com
//


module.exports = router