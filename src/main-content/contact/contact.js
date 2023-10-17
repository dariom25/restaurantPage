import cosmo from "./img/cosmo.png";

const mainContent = document.createElement("div");
mainContent.setAttribute("id", "main-content");

function createWrapperDiv() {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.setAttribute("class", "wrapper");

    return wrapperDiv;
}

function createInformation(title, infos) {
    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "contact-title");
    titleDiv.textContent = title;

    const informationDiv = document.createElement("div");
    informationDiv.setAttribute("class", "contact-information");
    informationDiv.innerHTML = infos;

    const wrapperDiv = createWrapperDiv();
    wrapperDiv.appendChild(titleDiv);
    wrapperDiv.appendChild(informationDiv);

    return wrapperDiv;
}

export function displayContactDetails() {
    const titles = ["Contact Details:", "About Cosmo Culinary:"]
    const informations = [
        "Cosmo Culinary <br> 8901 Solar System <br> Elysium Space Station <br> cosmo@culinary.space <br> +5565 56748646746",
        "Cosmo Culinary is a renowned chef and restaurateur who used to be passionate about creating unique and innovative dinig experiences. He has travelled all over the Solar System just to realize he likes to create simple and down to Earth (pun intended) dishes best."
        ]
    
    //eigenes module für main-content?
    const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");

    for (let i = 0; i < titles.length; i++ ) {
        const element = createInformation(titles[i], informations[i]);
        mainContent.appendChild(element);
    }

    return mainContent;
}