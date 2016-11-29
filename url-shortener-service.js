function UrlShortenerService() { }

UrlShortenerService.prototype.shorten = function(url) {
    if (isValid(url)) {
        // TODO
        return {};
    } else {
        var response = {"error": "Wrong url format, make sure you have a valid protocol and real site."};
    } 

    return response;
}

function isValidUrl(url) {
    return url.match(/^https?:\/\//);
}

module.exports = UrlShortenerService;
