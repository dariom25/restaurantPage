import { displayDishes } from "./main-content/dishes/dishes.js";
import { displayContactDetails } from "./main-content/contact/contact.js";
import { createHomeContent } from "./main-content/home/home.js";

function removeContent() {
    const mainContentDiv = document.querySelector("#main-content");
    for (let i = 0; i < mainContentDiv.childNodes.length; i++) {
        mainContentDiv.removeChild(mainContentDiv.childNodes[i]);
    }
}

export function loadHomeContent() {
    removeContent();
    createHomeContent();
}

export function loadContactContent() {
    removeContent();
    displayContactDetails();
}

export function loadMenuContent() {
    removeContent();
    displayDishes();
}