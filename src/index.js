import "./header/header-style.css";
import "./body/body-style.css";
import "./sidebar/sidebar-style.css";
import "./main-content/main-content-style.css";
import "./footer/footer-style.css";
import "./main-content/dishes/dishes-style.css";
import { header } from "./header/header.js";
import { sidebar } from "./sidebar/sidebar.js";
import { footer } from "./footer/footer";
import { displayDishes } from "./main-content/dishes/dishes.js";
import Icon from "./main-content/dishes/img/rice.png"

const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(sidebar());
content.appendChild(footer());
content.appendChild(displayDishes());