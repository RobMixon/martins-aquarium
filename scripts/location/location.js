

const locationConverter = (locationObject) => {

    const locationHTMLRepresentation = `
    <section class="location">
        <div class="flip">
            <div class="flip__card">
                <div class="flip__card_inner">
                    <div class="flip__card_front">
                        <img class="location__picture" 
                        src="${locationObject.picture}" 
                        alt="${locationObject.location}"/>
                    </div>
                    <div class="flip__card_back">
                        <h3>${locationObject.location}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
    return locationHTMLRepresentation
}