const express = require('express');
const router = express.Router();
const axios =  require('axios');

router.post('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body.search}&limit=10&offset=0&rating=g&lang=en`)
    .then((response) => {
    console.log('in post', response.data.data);
    res.send(response.data.data);
}).catch((error) => {
    console.log(error);
    res.sendStatus(500)
});
})

module.exports = router;

