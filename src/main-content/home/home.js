function createDivAndSetClass(className) {
    const element = document.createElement("div");
    element.setAttribute("class", className);

    return element;
}

export function createHomeContent() {
    const homeContainer = createDivAndSetClass("home-container");

    //review
    const reviewContainer = createDivAndSetClass("review-container");
    const review = createDivAndSetClass("review");
    review.textContent = "Cosmic Culinary Creations is a truly out-of-this-world dining experience. Located on the luxurious space station, Elysium, this restaurant is owned and operated by the world-renowned chef, Cosmos Culinary. Cosmos is a master of fusion cuisine, and his dishes are a feast for the senses. I had the pleasure of dining at Cosmic Culinary Creations recently, and I was blown away by the experience. The food was delicious, the drinks were refreshing, and the service was excellent. I highly recommend this restaurant to anyone looking for a truly unique dining experience.";
    reviewContainer.appendChild(review);
    
    const reviewer = createDivAndSetClass("reviewer");
    reviewer.innerHTML = "Corola Carlson <br>- Restaurant Critic";
    reviewContainer.appendChild(reviewer);
    homeContainer.appendChild(reviewContainer);

    //Opening Hours
    const hoursContainer = createDivAndSetClass("hours-container");
    const hoursTitle = createDivAndSetClass("hours-title");
    hoursTitle.textContent = "Hours:"
    hoursContainer.appendChild(hoursTitle);

    const hours = createDivAndSetClass("opening-hours");
    hours.innerHTML = "Monday: 12:00 AM to 2:00 PM and 6:00 PM to 8:00 PM <br> Tuesday: 12:00 AM to 2:00 PM and 6:00 PM to 8:00 PM <br> Wednesday: 12:00 AM to 2:00 PM and 6:00 PM to 8:00 PM <br> Thursday: 12:00 AM to 2:00 PM and 6:00 PM to 8:00 PM <br> Friday: 12:00 AM to 2:00 PM and 6:00 PM to 10:00 PM <br>Saturday: 12:00 AM to 2:00 PM and 6:00 PM to 10:00 PM <br> Sunday: Closed";
    hoursContainer.appendChild(hours);
    homeContainer.appendChild(hoursContainer);

    //address
    const addressContainer = createDivAndSetClass("address-container");
    const addressTitle = createDivAndSetClass("address-title");
    addressTitle.textContent = "Address:"
    addressContainer.appendChild(addressTitle);
    
    const address = createDivAndSetClass("address");
    address.innerHTML = "Cosmo Culinary <br> 8901 Solar System <br> Elysium Space Station <br> cosmo@culinary.space <br> +5565 56748646746";
    addressContainer.appendChild(address);
    homeContainer.appendChild(addressContainer);

    const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");
    mainContent.appendChild(homeContainer);

    return mainContent;
}