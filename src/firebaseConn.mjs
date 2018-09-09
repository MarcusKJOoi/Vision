// import * as admin from 'firebase-admin';
import firebase from 'firebase';
import $ from 'jquery';

// var admin = require('firebase-admin');
// var serviceAccount = require("/Users/zainshroff/Desktop/apps/vision-database-privatekey/vision-215704-firebase-adminsdk-04l3y-7430ae452b.json");
var config = {
  apiKey: "AIzaSyDURexKEhuTujRxljZMAtgn92YvraiMpdU",
  authDomain: "vision-215704.firebaseapp.com",
  databaseURL: "https://vision-215704.firebaseio.com/",
  storageBucket: "gs://vision-215704.appspot.com",
};

// console.log(firebase.initializeApp(config));
firebase.initializeApp(config);
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://vision-215704.firebaseio.com"
// });

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
    // console.log("The key is: "+ data.key + " and the value is " + data.val())
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