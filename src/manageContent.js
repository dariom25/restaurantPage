export function removeContent() {
    const mainContentDiv = document.querySelector("#main-content");
    for (let i = 0; i < mainContentDiv.childNodes.length; i++) {
        mainContentDiv.removeChild(mainContentDiv.childNodes[i]);
    }
}

