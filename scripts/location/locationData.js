/*
const locationCollection = [
{
    picture: "./images/aquarium.jpeg",
    location:"Aquarium"
},
{
    picture: "./images/tropical island 1.webp",
    location: "Coral in Mexico"
},
{
    picture: "./images/tropical island 2.jpg",
    location: "Coral in Barbadose"
},
{
    picture: "./images/island 3.jpg",
    location: "Coral in Malta"
}
]
*/
let locationCollection = []

const getLocationData = () => {
    return fetch("http://localhost:8088/locations").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfLocation) => {
            locationCollection = arrayOfLocation
        }
    )
}
