/* 
    Responsible for generating a list of fish HTML
    representations, and putting it in the browser
*/
/* const fishList = () => {

    for (const currentFishObject of fishCollection) {

        const fishHTML = fishConverter(currentFishObject)       
    

    const fishArticleElement = document.querySelector(".fishList")
    fishArticleElement.innerHTML += fishHTML

    }

}*/

const showHolyFish = () => {
    const fishObjectsArray = holyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fish (fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation
    }
}

const fishList = () => {
    showHolyFish()
}

