const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  pool.query(`INSERT INTO "favorites" ("url","title") 
              VALUES ($1,$2);`, [
    req.body.url,       //$1
    req.body.title,     //$2
  ]).then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log("ERROR in POST favorite",error);
    res.sendStatus(500)
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
