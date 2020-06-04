
/*
const quoteCollection = [
    {
        quote: "Forage brooklyn prism shaman readymade hammock selvage hot chicken - steve"
    },
    {
        quote: "Martin is the best fisherman  - Martin "
    },
    {
        quote: "Martin is the coolest person - Martin "
    }
]
*/

let quoteCollection = []

const getQuoteData = () => {
    return fetch("http://localhost:8088/quote").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfQuote) => {
            quoteCollection = arrayOfQuote
        }
    )
    }