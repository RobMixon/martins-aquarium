


const locationList = (locationCollection) => {

    for(const currentLocationObject of locationCollection) {
        const locationHTML = locationConverter(currentLocationObject)
        const locationArticleElement = document.querySelector(".locationList")
        locationArticleElement.innerHTML += locationHTML
    }
}