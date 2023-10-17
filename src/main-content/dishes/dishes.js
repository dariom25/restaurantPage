import ramen from "./img/ramen.png";
import rice from "./img/rice.png";
import burger from "./img/burger.png";
import gnocchi from "./img/gnocchi.png";
import tea from "./img/tea.png";
import lemonade from "./img/lemonade.png";

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
    const titles = ["Asteroid Fried Rice", "Galactic Gnocchi", "Rocketry Ramen", "Voyager Veggie Burger", "Interstellar Iced Tea", "Lunar Lemonade"];
    const paths = [
        rice,
        gnocchi,
        ramen,
        burger,
        tea,
        lemonade
    ];
    const prices = ["19.99$$", "19.99$$", "19.99$$", "19.99$$", "4.99$$", "3.99$$"];
    const descriptions = [
        "Fried rice with a variety of vegetables, shrimp, and chicken, seasoned with soy sauce, ginger and garlic. Veggie options available with tofu.",
        "Gnocchi in a creamy tomato sauce topped with grilled shrimp and spinach.",
        "A Japanese noodle soup with a variety of vegetables, pork and a savory broth.",
        "A black bean and quinoa burger topped with avocado, sprouts and a sweet and sour, served on a toasted bun with a side of fries.",
        "A refreshing and flavorful iced tea made with a blend of black tea, hibiscus tea and lemon verbena, served with a slice of grapefruit",
        "A classic lemonade made with fresh lemons, sugar and warter, garnished with a sprig of mint"
    ];
    const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");

    const menuTitle = document.createElement("div");
    menuTitle.textContent = "Menu";
    menuTitle.setAttribute("class", "menu");
    mainContent.appendChild(menuTitle);

    for (let i = 0; i < titles.length; i++ ) {
        const element = dish(titles[i], paths[i], prices[i], descriptions[i]);
        mainContent.appendChild(element);
        console.log("Test")
    }
    
    return mainContent;
}   