function openTab(evt, tabId) {
    var i, wikiTabContent, wikiTabberButtons;

    wikiTabContent = document.getElementsByClassName("wiki-tab-content");
    for (i = 0; i < wikiTabContent.length; i++) {
        wikiTabContent[i].style.display = "none";
    }

    wikiTabberButtons = document.getElementsByClassName("wiki-tabber-button");
    for (i = 0; i < wikiTabberButtons.length; i++) {
        wikiTabberButtons[i].className = wikiTabberButtons[i].className.replace(" active", "");
    }

    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", () => {
    var activeTabs = document.getElementsByClassName("default-open");
    for (let i = 0; i < activeTabs.length; i++) {
        activeTabs[i].click();
    }
});