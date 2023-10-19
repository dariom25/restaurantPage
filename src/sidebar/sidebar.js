function sidebarTab(description, className) {
    const element = document.createElement("button");
    element.textContent = description;
    element.classList.add("tab", className);

    return element
}

export function sidebar() {
    const sidebarDiv = document.createElement("div");
    sidebarDiv.setAttribute("id", "sidebar")
    const tabs = ["Home", "Menu", "Contact"];
    const classNames = ["home-button", "menu-button", "contact-button"];

    for (let i = 0; i < tabs.length; i++) {
        const element = sidebarTab(tabs[i], classNames[i]);
        sidebarDiv.appendChild(element);
    }

    return sidebarDiv
}