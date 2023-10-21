import { displayDishes } from "./main-content/dishes/dishes.js";
import { displayContactDetails } from "./main-content/contact/contact.js";
import { createHomeContent } from "./main-content/home/home.js";

function removeContent() {
    const mainContentDiv = document.querySelector("#main-content");
    while (mainContentDiv.firstChild) {
        mainContentDiv.removeChild(mainContentDiv.firstChild);
      }
}

function changeColor(backgroundColor, fontColor, element) {
    element.style.backgroundColor = backgroundColor;
    element.style.color = fontColor;
}

function changeBtnColor(btnName) {
    //set the color of the other buttons back to black
    const btns = document.querySelectorAll(".tab");
    btns.forEach((btn) => {
        const computedStyle = getComputedStyle(btn);
        const btnColor = computedStyle.getPropertyValue("background-color");

         if (btnColor === "rgb(255, 255, 255)") {
            changeColor("black", "white", btn);
        }
    });
    
    //change color of specific button to white
    const btn = document.querySelector(btnName);
    changeColor("white", "black", btn);
}

export function loadHomeContent() {
    removeContent();
    createHomeContent();
    changeBtnColor(".home-button");
}

export function loadContactContent() {
    removeContent();
    displayContactDetails();
    changeBtnColor(".contact-button");

}

export function loadMenuContent() {
    removeContent();
    displayDishes();
    changeBtnColor(".menu-button");

}