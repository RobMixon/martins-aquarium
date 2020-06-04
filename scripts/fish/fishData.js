/*
const fishCollection = [
    {
        species: "Fish Fish",
        length: 2,
        location: "coral off of Australia",
        picture: "./images/c3npbx.jpg",
        food: "aussie fries",
        name: "Bert"
    },
    {
        species: "Other Fish",
        length: 12,
        location: "The bar on the beach",
        picture: "./images/file-20191030-154716-1wc4d64.jpg",
        food: "Jack Daniels and salted nuts",
        name: "Stan the Man"
    },
    {
        species: "Lion Fish",
        length: 14,
        location: "coral reef off of Barbadose",
        picture: "./images/fish-hero.adapt.1900.1.jpg",
        food: "other fish",
        name: "Drew"
    },
    {
        species: "Goldfish",
        length: 150,
        location: "Pet store Aquarium",
        picture: "./images/goldfish.jpeg",
        food: "Whatevs",
        name: "Goldy"
    },
    {
        species: "Parrot Fish",
        length: 10,
        location: "Sea of Google",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg",
        food: "Popcorn",
        name: "Angus"
    },
    {
        species: "Cool Dorry Fish",
        length: 11,
        location: "Coast of Malta",
        picture: "./images/images.jpeg",
        food: "Donuts",
        name: "Bob"
    },
    {
        species: "Fancy Fish",
        length: 8,
        location: "Coast of Malta",
        picture: "./images/iStock-1160758684_NONTANUN-CHAIPRAKON-1-602x301.jpg",
        food: "Popcorn",
        name: "Fancy"
    },
    {
        species: "Skirt Fish",
        length: 27,
        location: "Salsa place",
        picture: "./images/RY2EpSo74hvYXyAVpTN2Gg-1200-80.jpg",
        food: "Tacos",
        name: "Raul"
    },
    {
        species: "Spotted Fish",
        length: 4,
        location: "The pet store aquarium",
        picture: "./images/photo-1576806021995-9f68eb39f10b.jpeg",
        food: "Fish food",
        name: "Coral"
    },
]
*/

let fishCollection = []

const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfFish) => {
            fishCollection = arrayOfFish
        }
    )
}

const holyFish = () => {
    const mostHolyFish = []
    const soldierFish = []
    const unworthyFish = []
    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            mostHolyFish.push(fish)
        }
        else if (fish.length % 5 === 0) {
            soldierFish.push(fish)
        } 
        else {
            unworthyFish.push(fish)
        }
    } 
    let newArray = [...mostHolyFish, ...soldierFish , ...unworthyFish]
    return newArray
} 

const mostHolyFish = () => {
    const result = [];
    for(const obj of fishCollection){
        if(obj.length % 3 === 0) {
            result.push(obj)
        }
    }
    return result
}

const soldierFish = () => {
    const result= []
    for(const obj of fishCollection) {
        if(obj.length % 5 === 0 && obj.length % 3 !== 0) {
            result.push(obj)
        }
    }
    return result
}

const unworthyFish = () => {
    const result= []
    for(const obj of fishCollection) {
        if(obj.length % 3 !== 0 && obj.length % 5 !== 0) {
            result.push(obj)
        }
    }
    return result
}
