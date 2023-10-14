function dish(title, path, price, description) {
    const dishContainer = document.createElement("div");
    dishContainer.setAttribute("class", "dish");

    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("title");
    titleDiv.textContent = title;
    dishContainer.appendChild(titleDiv);

    const image = new Image();
    image.setAttribute("class", "image");
    image.src = path;
    image.alt = "Image";
    dishContainer.appendChild(image);

    const informations = document.createElement("div");
    informations.setAttribute("class", "information");
    
    const priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "price");
    priceDiv.textContent = price;
    informations.appendChild(priceDiv);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.setAttribute("class", "description");
    descriptionDiv.textContent = description;
    informations.appendChild(descriptionDiv);

    dishContainer.appendChild(informations);

    return dishContainer
}