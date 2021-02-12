const { Router } = require('express')
const MemeItem = require('../../models/meme_item')

const router = Router()


//GET 
router.get('/', async (req, res) => {
    try {
        const resp = await MemeItem.find()
        if (!resp) throw new Error('No MemeItems')
        const sorted = resp.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//POST
router.post('/', async (req, res) => {
    const object = new MemeItem(req.body)
    console.log(object)
    try {
        const resp = await object.save()
        if (!resp) throw new Error('Something went wrong saving the meme')
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = router