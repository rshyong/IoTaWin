import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducer';

let Clarifai = require('clarifai');
let firebase = require("firebase");

var app = new Clarifai.App(
'D1XTyOGA2C_AybXawDJA-AQOTuTyrwHb-ItNe8cR',
'P90PSl_Dp8fER4NtNO9o9L5rsUopICaWW25F6q3v'
);


var config = {
    apiKey: "AIzaSyCBka1RjGIlUxcaI-zQbBYb_XyLV7N_Tf8",
    authDomain: "iotawin-9b07a.firebaseapp.com",
    databaseURL: "https://iotawin-9b07a.firebaseio.com",
    storageBucket: "iotawin-9b07a.appspot.com",
};
firebase.initializeApp(config);

//console.log(firebase);
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

// var imageRef = storageRef.child('2.jpg');

// app.inputs.delete("c3e4f0a272614fde99dec8ba3db0ab5e").then(() => {
//   console.log('deleted');
//   app.inputs.list().then(result => console.log(result));
// })
//console.log(imageRef);

// imageRef.getDownloadURL().then(url => {
// // predict the contents of an image by passing in a url
//   app.models.predict('shelf', url).then(
//       function(response) {
//           console.log(response.outputs[0].data);
//       },
//       function(err) {
//           console.error(err);
//       }
//   );


// app.inputs.create({
//         url: url,
//         concepts: [
//           {
//             id: "virtue",
//             value: true
//           },
//           {
//             id: "hoegaarden",
//             value: false
//           },
//           {
//             id: "shock top",
//             value: true
//           },
//           {
//             id: "stella artois",
//             value: true
//           },
//           {
//             id: "apocalypse ipa",
//             value: false
//           },
//           {
//             id: "elysian",
//             value: true
//           },
//           {
//             id: "budweiser",
//             value: false
//           },
//           {
//             id: "budlight",
//             value: false
//           },
//           {
//             id: "compliant",
//             value: false
//           },
//           {
//             id: "organized",
//             value: true
//           },
//           {
//             id: "empty",
//             value: true
//           }
//         ]
//     }).then(
//     function(response) {
//         console.log("worked");
//     },
//     function(err) {
//         console.log(err);
//     }
// );


// });



// app.models.create(
//     "shelf",
//     [
//       {
//         id: "virtue"
//       },
//       {
//         id: "hoegaarden"
//       },
//       {
//         id: "shock top"
//       },
//       {
//         id: "stella artois"
//       },
//       {
//         id: "apocalypse ipa"
//       },
//       {
//         id: "elysian"
//       },
//       {
//         id: "compliant"
//       },
//       {
//         id: "organized"
//       },
//       {
//         id: "empty"
//       }
//     ]
//     ).then(
//     function(response) {
//         console.log(response);
//     },
//     function(err) {
//         console.log(err);
//     }
// );

// app.models.train("shelf").then(
//     function(response) {
//         console.log(response);
//     },
//     function(err) {
//         console.log(err);
//     }
// );





// Create a reference from a Google Cloud Storage URI
//var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg')

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
// var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/1.jpg');
// console.log(httpsReference);

export default createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })
  )
);
