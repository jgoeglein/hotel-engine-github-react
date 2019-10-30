const express = require('express');
const router = express.Router();
const cache = require('../cacheMiddleware');
const request = require('request');

router.get('/repositories', cache(60 * 60), function(req, res) {
  const options = {
    url: `https://api.github.com/search/repositories?q=${req.query.search}&sort=${req.query.sort}`,
    headers: {
      'User-Agent': 'github-repo-search-hotel-engine'
    }
  };

  // curl https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc
  request.get(options, (err, httpRes, body) => {
    if(err) {
      res.sendStatus(400, err);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(body);
  });
});

module.exports = router;
