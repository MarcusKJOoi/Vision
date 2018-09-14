import firebase from 'firebase';
import $ from 'jquery';

var config = {
  apiKey: "AIzaSyDURexKEhuTujRxljZMAtgn92YvraiMpdU",
  authDomain: "vision-215704.firebaseapp.com",
  databaseURL: "https://vision-215704.firebaseio.com/",
  storageBucket: "vision-215704.appspot.com",
};

// console.log(firebase.initializeApp(config));
firebase.initializeApp(config);

const db = firebase.database();
// let ref = db.ref("/crimes");
// ref.once(value, key, (snapshot) => {
//   console.log(snapshot.val());
// });

// console.log(admin);
// console.log(db);
// var ref = db.ref("/crimes");
// ref.once("3000", (snapshot) => {
//   console.log(snapshot.val())
// })

let crime_array = [];
// This script is for returning and rendering the data
let data_crime = db.ref("/crimes");
data_crime.orderByKey().endAt("3101").on("value", function(snapshot) {
  snapshot.forEach(function(data){
    let postcode = data.key;
    let crimeStat = data.val();
    console.log("The key is: "+ data.key + " and the value is " + data.val())
    try {
      $.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + postcode + "+Melbourne&key=AIzaSyCOTCo9ek5D5h2D4IUxnb9ZVkoK6-QP0-g",
      function(response) {
        // console.log(response);
        if(response.status === 'OK') {
          crime_array.push({location: response.results[0].geometry.location, crimeStat: crimeStat});
        }
      })
    }
    catch(err) {
      console.log(err);
    }
  })
  // console.log(crime_array);
});

// let data_school = db.ref("/school");
// data_school.orderByKey().on("value", function(snapshot) {
//   snapshot.forEach(function(data){
//     console.log(data.key, data.val())
//   })
// });

export default crime_array;