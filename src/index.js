import "./header/header-style.css";
import "./body/body-style.css";
import "./sidebar/sidebar-style.css";
import "./main-content/main-content-style.css";
import "./footer/footer-style.css";
import "./main-content/dishes/dishes-style.css";
import "./main-content/contact/contact-style.css";
import "./main-content/home/home-style.css";
import { header } from "./header/header.js";
import { sidebar } from "./sidebar/sidebar.js";
import { footer } from "./footer/footer";
import { createMainContentDiv } from "./main-content/mainContent.js";
import { createHomeContent } from "./main-content/home/home.js";
import { loadHomeContent, loadContactContent, loadMenuContent } from "./manageContent.js";

const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(sidebar());
content.appendChild(footer());
content.appendChild(createMainContentDiv());
createHomeContent();

const home = document.querySelector(".home-button");
home.addEventListener("click", loadHomeContent);

const menu = document.querySelector(".menu-button");
menu.addEventListener("click", loadMenuContent);

const contact = document.querySelector(".contact-button");
contact.addEventListener("click", loadContactContent);


