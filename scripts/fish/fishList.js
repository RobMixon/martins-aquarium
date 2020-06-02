/* 
    Responsible for generating a list of fish HTML
    representations, and putting it in the browser
*/
const fishList = () => {

    for (const currentFishObject of fishCollection) {

        const fishHTML = fishConverter(currentFishObject)       
    

    const fishArticleElement = document.querySelector(".fishList")
    fishArticleElement.innerHTML += fishHTML

    }

}