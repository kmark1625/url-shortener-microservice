var chai = require('chai');
var expect = chai.expect;
var UrlShortenerService = require('../url-shortener-service');

describe('UrlShortenerService', function() {
    it('shorten() should return a JSON with an error message if the url does not begin with http:// or https://', function() {
        var urlShortenerService = new UrlShortenerService();
        var expectedResult = {"error":"Wrong url format, make sure you have a valid protocol and real site."};
        expect(JSON.stringify(urlShortenerService.shorten('fakeUrl'))).to.equal(JSON.stringify(expectedResult));
    });
})
