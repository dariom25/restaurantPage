import { displayDishes } from "./main-content/dishes/dishes.js";
import { displayContactDetails } from "./main-content/contact/contact.js";
import { createHomeContent } from "./main-content/home/home.js";

function removeContent() {
    const mainContentDiv = document.querySelector("#main-content");
    while (mainContentDiv.firstChild) {
        mainContentDiv.removeChild(mainContentDiv.firstChild);
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