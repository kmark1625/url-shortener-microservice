var MongoService = require('./mongo-service');
var mongoService = new MongoService();

function UrlShortenerService() { }

UrlShortenerService.prototype.shorten = function(url) {
    if (isValidUrl(url)) {
        var alphaNumString = randomAlphaNumericString(8);
        var shortUrl = "localhost:3000/" + alphaNumString;
        var result = {"original_url": url, "short_url": shortUrl};
        var urlObject = {"original_url": url, "short_url": alphaNumString};
        mongoService.saveShortenedUrl(urlObject);
        return result;
    } else {
        var response = {"error": "Wrong url format, make sure you have a valid protocol and real site."};
    } 

    return response;
}

UrlShortenerService.prototype.getLongUrl = function(shortUrl) {
    return mongoService.getLongUrl(shortUrl);
}

function isValidUrl(url) {
    return url.match(/^https?:\/\//);
}

/*
 * Generates a random string of random alpha characters of given length.
 */ 
function randomAlphaNumericString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

module.exports = UrlShortenerService;
