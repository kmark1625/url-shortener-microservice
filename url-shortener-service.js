function UrlShortenerService() { }

UrlShortenerService.prototype.shorten = function(url) {
    if (isValidUrl(url)) {
        var shortUrl = "https://localhost:3000/" + 1
        return {"original_url": url, "short_url": shortUrl};
    } else {
        var response = {"error": "Wrong url format, make sure you have a valid protocol and real site."};
    } 

    return response;
}

function isValidUrl(url) {
    return url.match(/^https?:\/\//);
}

module.exports = UrlShortenerService;
