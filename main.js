chrome.webRequest.onBeforeRequest.addListener(
    function(wikiOriginalLink) {
         var newUrl = wikiOriginalLink.url.replace("wikipedia.org", "1wikipedia.org");
         return {redirectUrl: newUrl};
    },{urls: [ "*://*.wikipedia.org/*"], types: ["main_frame", "sub_frame", "other"]}, ["blocking"]
);