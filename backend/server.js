const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const { PORT, mongoUri } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const memeRoutes = require('./routes/api/meme')
const path = require('path')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())


const PORT = process.env.PORT || 5000

mongoose
    .connect('mongodb://65.0.12.217:27017/memes_collections', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/meme', memeRoutes)


app.listen(PORT, () => console.log(`App Listening at http://localhost:${PORT}`))
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/dist'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    // })
// }

