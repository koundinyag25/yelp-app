var express = require('express');
var router = express.Router();
var Yelp = require('yelp');

var yelp = new Yelp({
    consumer_key: '4MTOtO_XRolDh7P0DqEuuw',
    consumer_secret: 'vlNjHwU1EXqrD6xErl3yBLBI-8E',
    token: 'ZJetB7roWNWlxlLMrzxPfyFvvpRELNrU',
    token_secret: '78ckbiHK39XWUD7yab2TgJLzvv0',
});



router.get('/business', (req, res, next) => {
    var query = req.query;
    console.log(query);
    yelp.search({
            term: query.term,
            location: query.location,
            category_filter: 'movietheaters'
        })
        .then((data) => {
            res.send(data);
        })
        .catch(console.error);

});



module.exports = router;
