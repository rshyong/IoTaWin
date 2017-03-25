// instantiate a new Clarifai app passing in your clientId and clientSecret
let Clarifai = require('clarifai');

var app = new Clarifai.App(
'Ueito5TYj_AFMvqFzPWjKsO1h6gnORiDazJvYKQ2',
'EUgACZM749b_qMvcfh6lnVl6qF0rku9ZdRdhFxOf'
);

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'http://pngimg.com/uploads/beer/beer_PNG2390.png').then(
function(response) {
    console.log(response.outputs[0].data);
},
function(err) {
    console.error(err);
}
);