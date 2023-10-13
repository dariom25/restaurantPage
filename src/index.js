import "./header/header-style.css";
import "./body/body-style.css";
import "./sidebar/sidebar-style.css";
import "./main-content/main-content-style.css";
import "./footer/footer-style.css"
import { header } from "./header/header.js";
import { sidebar } from "./sidebar/sidebar.js";

const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(sidebar());