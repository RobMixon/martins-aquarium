/* 
    Responsible for generating a list of fish HTML
    representations, and putting it in the browser
*/
<<<<<<< HEAD
/* const fishList = () => {
=======
const fishList = (fishCollection) => {
>>>>>>> 2721858d61a03746a9d869644325b8c19a5c8a82

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

