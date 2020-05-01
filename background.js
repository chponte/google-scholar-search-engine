browser.contextMenus.create({
    id: "search-with-google-scholar",
    title: "Search in Google Scholar",
    icons: {
        "16": "icons/16.png",
        "24": "icons/24.png",
        "32": "icons/32.png",
        "48": "icons/48.png",
    },
    contexts: ["selection"],
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "search-with-google-scholar":
            browser.tabs.create({ url: "https://scholar.google.com/scholar?q=" + info.selectionText });
            break;
    }
})