import { displayDishes } from "./main-content/dishes/dishes.js";
import { displayContactDetails } from "./main-content/contact/contact.js";
import { createHomeContent } from "./main-content/home/home.js";

function removeContent() {
    const mainContentDiv = document.querySelector("#main-content");
    while (mainContentDiv.firstChild) {
        mainContentDiv.removeChild(mainContentDiv.firstChild);
      }
}

function changeBtnColor(btnName) {
    const btn = document.querySelector(btnName);
    const computedStyle = getComputedStyle(btn);
    const btnColor = computedStyle.getPropertyValue("background-color");

    if (btnColor === "rgb(0, 0, 0)") {
        console.log("black");
    } else if (btnColor === "rgb(255, 255, 255)") {
        console.log("white");
    }
}

export function loadHomeContent() {
    removeContent();
    createHomeContent();
    changeBtnColor(".home-button")
}

export function loadContactContent() {
    removeContent();
    displayContactDetails();
}

export function loadMenuContent() {
    removeContent();
    displayDishes();
}