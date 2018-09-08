// import * as admin from 'firebase-admin';
import firebase from 'firebase';

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


// This script is for returning and rendering the data
let data_crime = db.ref("/crimes");
data_crime.orderByKey().on("value", function(snapshot) {
  snapshot.forEach(function(data){
    let postcode = data.key
    let crimeStat = data.val();
    
    
    console.log("The key is: "+ data.key + " and the value is " + data.val())
  })
});
// let data_school = db.ref("/school");
// data_school.orderByKey().on("value", function(snapshot) {
//   snapshot.forEach(function(data){
//     console.log(data.key, data.val())
//   })
// });
