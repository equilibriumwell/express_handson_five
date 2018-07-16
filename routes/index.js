var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const models = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

/* GET home page. */
router.post('/playlists', (req, res) => {
  models.playlists
    .findOrCreate({
      where: {
        Name: req.body.name,
        DateFormed: req.body.dateFormed
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/playlists');
      } else {
        res.send('This playlist already exists!');
      }
    });
});

router.get('/playlists', function(req, res, next) {
  models.playlists.findAll({}).then(playlistsFound => {
    res.render('playlists', {
      playlists: playlistsFound
    });
  });
});

module.exports = router;
