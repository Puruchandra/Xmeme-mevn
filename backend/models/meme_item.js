const { Schema, model } = require('mongoose')

const MemeItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
    // ,
    // date: {
    //     type: Date,
    //     default: Date.now,
    // },

})

const MemeItem = model('memeItemSchema', MemeItemSchema)

module.exports = MemeItem