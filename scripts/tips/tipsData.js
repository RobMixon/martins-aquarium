/*
const tipCollection = [
    {
        tip: "Feed fish daily"
    },
    {
        tip: "Dont tap on glass"
    },
    {
        tip: "Do not take fish out of water"
    },
    {
        tip: "Handle with care"
    }
    
    ]
*/

let tipCollection = []

const getTipData = () => {
    return fetch("http://localhost:8088/tips").then (
        (response) => {
            return response.json()
        }
    )
    .then (
        (arrayOfTips) => {
            tipCollection = arrayOfTips
        }
    )
}