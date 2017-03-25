// instantiate a new Clarifai app passing in your clientId and clientSecret
let Clarifai = require('clarifai');

var app = new Clarifai.App(
'D1XTyOGA2C_AybXawDJA-AQOTuTyrwHb-ItNe8cR',
'P90PSl_Dp8fER4NtNO9o9L5rsUopICaWW25F6q3v'
);


// app.inputs.create({
//         url: "https://i.imgur.com/13q6O02.jpg",
//         concepts: [
//             {
//             id: "bad",
//             value: true
//             }
//         ]
//     },
//     {
//         url: "https://i.imgur.com/V575J1P.jpg",
//         concepts: [
//             {
//             id: "bad",
//             value: true
//             }
//         ]
//     },
//     {
//         url: "https://i.imgur.com/uyYKKQK.jpg",
//         concepts: [
//             {
//             id: "bad",
//             value: true
//             }
//         ]
//     },
//     {
//         url: "https://i.imgur.com/NSmIbl1.jpg",
//         concepts: [
//             {
//             id: "bad",
//             value: true
//             }
//         ]
//     },
//     {
//         url: "https://i.imgur.com/6k8jJMD.jpg",
//         concepts: [
//             {
//             id: "bad",
//             value: true
//             }
//         ]
//     },
//     {
//         url: "https://i.imgur.com/fgzU45c.jpg",
//         concepts: [
//             {
//             id: "bad",
//             value: true
//             }
//         ]
//     },
//     {
//         url: "https://i.imgur.com/Pt4604g.jpg",
//         concepts: [
//             {
//             id: "bad",
//             value: true
//             }
//         ]
//     },
//     {
//         url: "https://i.imgur.com/VEguOBs.jpg",
//         concepts: [
//             {
//             id: "bad",
//             value: true
//             }
//         ]
//     },
//     {
//         url: "https://i.imgur.com/5qrMswf.jpg",
//         concepts: [
//             {
//             id: "bad",
//             value: true
//             }
//         ]
//     },
//     {
//         url: "https://i.imgur.com/V575J1P.jpg",
//         concepts: [
//             {
//             id: "good",
//             value: true
//             }
//         ]
//     }).then(
//     function(response) {
//         console.log(response);
//     },
//     function(err) {
//         console.log(err);
//     }
// );

// //   app.inputs.search({ concept: {id: 'bad'} }).then(
// //     function(response) {
// //         console.log(response);
// //     },
// //     function(err) {
// //       console.log(err);
// //     }
// //   );

// app.models.create(
//     "fridge",
//     [
//         { "id": "bad" }
//     ]
//     ).then(
//     function(response) {
//         console.log(response);
//     },
//     function(err) {
//         console.log(err);
//     }
// );

// app.models.train("fridge").then(
//     function(response) {
//         console.log(response);
//     },
//     function(err) {
//         console.log(err);
//     }
// );

// predict the contents of an image by passing in a url
app.models.predict('bad', 'https://i.imgur.com/Q9u8tx8.jpg').then(
    function(response) {
        console.log(response.outputs[0].data);
    },
    function(err) {
        console.error(err);
    }
);
