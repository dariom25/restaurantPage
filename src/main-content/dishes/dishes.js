import image from "./img/ramen.png"

function dish(title, path, price, description) {
    const dishContainer = document.createElement("div");
    dishContainer.setAttribute("class", "dish");

    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "title");
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

export function displayDishes() {
    const titles = ["Asteroid Fried Rice", "Galactic Gnocchi", "Universal Umami Ramen"];
    const paths = [
        image,
        image,
        image,
        image
    ];
    const prices = ["19.99$$", "19.99$$", "19.99$$", "19.99$$"];
    const descriptions = [
        "Fried rice with a variety of vegetables, shrimp, and chicken, seasoned with soy sauce, ginger and garlic. Veggie options available with tofu.",
        "Gnochchi in a creamy tomato sauce topped with grilled shrimp and spinach.",
        "A Japanese noodle soup with a variety of vegetables, pork and a savory broth.",
        "A black bean and quinoa burger topped with avocado, sprouts and a sweet and sour, served on a toasted bun with a side of fries."
    ];
    const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");

    for (let i = 0; i < titles.length; i++ ) {
        const element = dish(titles[i], paths[i], prices[i], descriptions[i]);
        mainContent.appendChild(element);
        console.log("Test")
    }
    
    return mainContent;
}   