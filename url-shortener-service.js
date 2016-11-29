function UrlShortenerService() { }

UrlShortenerService.prototype.shorten = function(url) {
    if (!isValidUrl(url)) {
        var response = {"error": "Wrong url format, make sure you have a valid protocol and real site."};
    } 

    return response;
}

function isValidUrl(url) {
    return url.match(/^https?:\/\//);
}

module.exports = UrlShortenerService;
