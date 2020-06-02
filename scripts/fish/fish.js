/*
    This function will convert a single fish object to an 
    HTML representation and return it
*/

const fishConverter = (fishObject) => {

    const fishHTMLRepresentation = `
    <section class="fish">
        <div class="flip">
            <div class="flip__card">
                <div class="flip__card_inner">
                    <div class="flip__card_front">
                        <img class="fish__picture" 
                        src="${fishObject.picture}"
                        alt="${fishObject.name} the ${fishObject.species}" />
                    </div>
                    <div class="flip__card_back">
                            <h3> Species: ${fishObject.species}</h3>
                            <p> Length: ${fishObject.length}</p>
                            <p> Name: ${fishObject.name}</p>
                            <p> Location: ${fishObject.location}</p>
                            <p> Food: ${fishObject.food}</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section> `

    return fishHTMLRepresentation 
}