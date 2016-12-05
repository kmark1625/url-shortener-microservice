var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/url-shortener';

function MongoService() { }

/*
 * Takes in an Url Object (with a short_url and long_url) and inserts it into
 * the mongodb database.
 */
MongoService.prototype.saveShortenedUrl = function(urlObject) {
    MongoClient.connect(url, function(err, db) {
        if (err) { return console.dir(err); }

        var collection = db.collection('urlShortener');
        collection.insert([urlObject], function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log('Inserted url!');
            }
        });
        db.close();
    });
}

MongoService.prototype.getLongUrl = function(shortUrl) {
    return MongoClient.connect(url).then(function(db) {
        var collection = db.collection('urlShortener');
        return collection.findOne({"short_url": shortUrl});
    }).then(function(result) {
        return result.original_url;
    });
}

module.exports = MongoService;
