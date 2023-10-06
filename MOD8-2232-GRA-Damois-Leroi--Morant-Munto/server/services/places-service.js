let id = 0;
const placeList = [
  {Id: ++id, Type: "restaurants", Title: "Brutopia", Address: "888 rjij", Rating: 2, HygieneRating: 5, AmbianceRating: 3, PriceRating: 5, Picture: "https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg"},
  {Id: ++id, Type: "activities",Title: "cheval blanc", Address: "56656 fd", Rating: 3, HygieneRating: 3, AmbianceRating: 4, PriceRating: 2},
  {Id: ++id, Type: "travel",Title: "nyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2},
  {Id: ++id, Type: "restaurants",Title: "bnyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2, Picture:"https://cdn4.buysellads.net/uu/1/134955/1685040267-designdotdev5.jpg"}
]

function findPlaces() {
    return placeList
}

function findPlace(id) {
    for (let place of placeList) {
        if (place.id == id) {
            return place
        }
        
    }
    return null
}

function addPlace(title, address, type, picture) {
    placeList.push({Id: id++, Type: type, Title: title, Address: address, Rating: 0, HygieneRating: 0, AmbianceRating: 0, PriceRating: 0, Picture: picture})
}

export default function UsePlaceService () { 
    return {
    findPlaces,
    findPlace,
    addPlace
}}