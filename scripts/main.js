

getFishData().then(
    () => {
        sortFish(fishCollection)
    }
)

getLocationData().then(
    () => {
        locationList(locationCollection)
    }
)


getQuoteData().then(
    () => {
        quoteList(quoteCollection)
    }
)

getTipData().then(
    () => {
        tipList(tipCollection)
    }
)
