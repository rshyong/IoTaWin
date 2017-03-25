// instantiate a new Clarifai app passing in your clientId and clientSecret
let Clarifai = require('clarifai');

var app = new Clarifai.App(
'Ueito5TYj_AFMvqFzPWjKsO1h6gnORiDazJvYKQ2',
'EUgACZM749b_qMvcfh6lnVl6qF0rku9ZdRdhFxOf'
);

// predict the contents of an image by passing in a url
// app.models.predict(Clarifai.GENERAL_MODEL, 'http://pngimg.com/uploads/beer/beer_PNG2390.png').then(
// function(response) {
//     console.log(response.outputs[0].data);
// },
// function(err) {
//     console.error(err);
// }
// );

app.inputs.create({
    url: "https://i.imgur.com/13q6O02.jpg",
    concepts: [
        {
        id: "bad",
        value: true
        }
    ]
    },
    {
    url: "https://i.imgur.com/V575J1P.jpg",
    concepts: [
        {
        id: "bad",
        value: true
        }
    ]
    },
    {
    url: "https://i.imgur.com/uyYKKQK.jpg",
    concepts: [
        {
        id: "bad",
        value: true
        }
    ]
    },
    {
    url: "https://i.imgur.com/V575J1P.jpg",
    concepts: [
        {
        id: "bad",
        value: true
        }
    ]
    },
    {
    url: "https://i.imgur.com/Q9u8tx8.jpg",
    concepts: [
        {
        id: "good",
        value: true
        }
    ]
    }).then(
    function(response) {
        console.log(response);
    },
    function(err) {
        console.log(err);
    }
);

app.models.create(
    "good",
    [
        { "id": "good" }
    ]
    ).then(
    function(response) {
        console.log(response);
    },
    function(err) {
        console.log(err);
    }
);
