const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites" ORDER BY "id";`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
  console.log("ERROR in getting favorites", error);
  res.sendStatus(500);
  })
});

// add a new favorite 
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "favorites" ("url","title") 
              VALUES ($1,$2);`
  pool.query(queryText, [
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
  console.log('put route category req is', req.params.favId, req.body.id);
  // req.body should contain a category_id to add to this favorite image
  const queryText = `UPDATE "favorites"
  SET "category_id" = $1
  WHERE "id" = $2;`
  pool.query(queryText, [
    req.params.favId,
    req.body.id
  ])
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
