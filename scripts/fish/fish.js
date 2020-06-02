/*
    This function will convert a single fish object to an 
    HTML representation and return it
*/

const fishConverter = (fishObject) => {

    const fishHTMLRepresentation = ` {
    <section class="fish">
        <div class="">
            <img class="fish__picture" src="${fishObject.fish__picture}"
                alt="${fishObject.name} the ${fishObject.species}"
        </div>
        <div class="fish__details">
            <ul>
                <li> Species: ${fishObejct.species}</li>
                <li> Length: ${fishObejct.length}</li>
                <li> Name: ${fishObejct.name}</li>
                <li> Location: ${fishObejct.location}</li>
                <li> Food: ${fishObejct.food}</li>
            </ul>
        </div>
    </section> }`

    return fishHTMLRepresentation `
}