chrome.webRequest.onBeforeRequest.addListener(
    function(wikiOriginalLink) {
         var newUrl = wikiOriginalLink.url.replace("wikipedia.org", "0wikipedia.org");
         return {redirectUrl: newUrl};
    },{ urls: [ "*://*.wikipedia.org/*"],}, ["blocking"]
);