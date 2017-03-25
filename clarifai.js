// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
'Ueito5TYj_AFMvqFzPWjKsO1h6gnORiDazJvYKQ2',
'EUgACZM749b_qMvcfh6lnVl6qF0rku9ZdRdhFxOf'
);

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
function(response) {
    console.log(response);
},
function(err) {
    console.error(err);
}
);