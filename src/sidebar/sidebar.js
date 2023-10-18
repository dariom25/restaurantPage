function sidebarTab(description) {
    const element = document.createElement("div");
    element.textContent = description;
    element.setAttribute("class", "tab");

    return element
}

export function sidebar() {
    const sidebarDiv = document.createElement("div");
    sidebarDiv.setAttribute("id", "sidebar")
    const tabs = ["Home", "Menu", "Contact"];

    
    tabs.forEach((tab) => {
        const element = sidebarTab(tab);
        sidebarDiv.appendChild(element);
    })
    return sidebarDiv
}