/* 
    Responsible for generating a list of fish HTML
    representations, and putting it in the browser

const fishList = (fishCollection) => {

    for (const currentFishObject of fishCollection) {

        const fishHTML = fishConverter(currentFishObject)       
    

    const fishArticleElement = document.querySelector(".fishList")
    fishArticleElement.innerHTML += fishHTML

    }

}*/

/*
const showHolyFish = () => {
    const fishObjectsArray = holyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const fishList = (fishCollection) => {
    showHolyFish(fishCollection)
} */


const showHolyFish = (fishCollection) => {
    document.querySelector(".fishList").innerHTML = ""
    for (const fishObject of fishCollection) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const sortFish = (fishCollection) => {
    let fish3 = mostHolyFish(fishCollection);
    let fish5 = soldierFish(fishCollection);
    let fish7 = unworthyFish(fishCollection);
    let orderedFish = [...fish3,...fish5, ...fish7];
    let clearFishList = "";

let targetSelector = document.getElementById("holiness__selector")
    switch (targetSelector.value) {
        case "all":
            showHolyFish(orderedFish)
            break;
        case "holy":
            showHolyFish(fish3)
            break;
        case "soldier":
            showHolyFish(fish5)
            break;
        case "unworthy":
            showHolyFish(fish7)
            break;
        case "none":
            showHolyFish(clearFishList)
            break;
            default:
            break;
    }
}

const fishList = (fishCollection) => {
    sortFish(fishCollection)
}

const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".fishList").classList.toggle("hidden")
})
