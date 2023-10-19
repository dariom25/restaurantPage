export function removeContent() {
    const contentDiv = document.querySelector("#content");
    for (let i = 0; i < contentDiv.childNodes.length; i++) {
        parent.removeChild(parent.childNodes[i]);
    }
}