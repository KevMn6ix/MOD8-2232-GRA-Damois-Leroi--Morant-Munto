let id = 0;
const placeList = [
  {Id: ++id, Type: "restaurants", Title: "Brutopia", Address: "888 rjij", Rating: 4, HygieneRating: 5, AmbianceRating: 3, PriceRating: 5, Picture: "https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg"},
  {Id: ++id, Type: "activities",Title: "cheval blanc", Address: "56656 fd", Rating: 3, HygieneRating: 3, AmbianceRating: 4, PriceRating: 2},
  {Id: ++id, Type: "travel",Title: "nyx", Address: "86 sfd", Rating: 3, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2},
  {Id: ++id, Type: "restaurants",Title: "bnyx", Address: "86 sfd", Rating: 3, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2, Picture:"https://cdn4.buysellads.net/uu/1/134955/1685040267-designdotdev5.jpg"}
]

let idRating = 0
const PlaceRating = [
    {Id: ++idRating, IdPlace: 2, HygieneRating: 3, AmbianceRating: 4, PriceRating: 2, CommentRate:"Nice place."},
    {Id: ++idRating, IdPlace: 1, HygieneRating: 5, AmbianceRating: 3, PriceRating: 5, CommentRate:"I like to go there."},
    {Id: ++idRating, IdPlace: 4, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2, CommentRate:"They cook my favorite food."},
    {Id: ++idRating, IdPlace: 3, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2, CommentRate:"I went there while visiting."}
]


function findPlaces() {
    return placeList
}

function findPlace(id) {
    for (let place of placeList) {
        if (place.Id == id) {
            return place
        }
        
    }
    return null
}

function sumAmbiance(listOfRatings) {
    let res = 0;
    for (let rating of listOfRatings) {
        res += rating.AmbianceRating;
    }
    return res;
} 

function sumHygiene(listOfRatings) {
    let res = 0;
    for (let rating of listOfRatings) {
        res += rating.HygieneRating;
    }
    return res;
}
function sumPrice(listOfRatings) {
    let res = 0;
    for (let rating of listOfRatings) {
        res += rating.PriceRating;
    }
    return res;
}


function actualiseRating(id) {
    const place = findPlace(id);
    place.AmbianceRating = Math.round(sumAmbiance(findRatingsAbout(id))/(findRatingsAbout(id).length))
    place.PriceRating = Math.round(sumPrice(findRatingsAbout(id))/(findRatingsAbout(id).length))
    place.AmbianceRating = Math.round(sumHygiene(findRatingsAbout(id))/(findRatingsAbout(id).length))
    place.Rating = Math.round((place.AmbianceRating + place.HygieneRating + place.PriceRating)/3);
}

function addRating(idPlace, hygieneRating, ambianceRating, priceRating, commentRate) {
    /*
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^")
    console.log(idPlace)
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
    */
    PlaceRating.push({Id: idRating++, IdPLace: placeList[idPlace - 1].Id, HygieneRating: hygieneRating, AmbianceRating: ambianceRating, PriceRating: priceRating, CommentRate: commentRate})
    /*
    console.log("#################")
    console.log(PlaceRating[idRating - 1].IdPlace)
    console.log("##############################")
    */
    actualiseRating(idPlace)
}


function findRatings() {
    return PlaceRating
}

function findRating(id) {
    for (let rating of PlaceRating) {
        if (rating.Id == id) {
            return rating
        }
        
    }
    return null
}

function findRatingsAbout(id) {
    /*console.log(PlaceRating)*/
    return PlaceRating.filter((rating) => {  return rating.IdPlace === id});
}



function addPlace(title, address, type, picture) {
    placeList.push({Id: id++, Type: type, Title: title, Address: address, Rating: 0, HygieneRating: 0, AmbianceRating: 0, PriceRating: 0, Picture: picture})
}


export default function UsePlaceService () { 
    return {
    findPlaces,
    findPlace,
    addPlace,
    findRatings,
    findRating,
    addRating,
    findRatingsAbout
}}