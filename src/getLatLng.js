const googleMapsClient = require('@google/maps').createClient({
    key: "AIzaSyCOTCo9ek5D5h2D4IUxnb9ZVkoK6-QP0-g",
    Promise: Promise
});

function getLatLng(address) {
    let
        lat = 0,
        lng = 0;
    googleMapsClient.geocode({address: address})
    .asPromise()
    .then((response) => {
        lat = response.results[0].geometry.location[0];
        lng = response.results[0].geometry.location[1];
    }).catch((err) => {
        console.log(err);
    });
    return { lat, lng} ;
}

export default getLatLng;