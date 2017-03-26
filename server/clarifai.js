// instantiate a new Clarifai app passing in your clientId and clientSecret

module.exports = () => {
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

  firebase.database().ref().orderByChild('didCheck').equalTo(false).on('child_added', function(child){
    const data = child.val();

    //predict the contents of an image by passing in a url
    app.models.predict('shelf', `https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/${data.name}?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba`).then(
      function(response) {
          const concepts = response.outputs[0].data;
          const conceptsObj = {};
          concepts.concepts.forEach(concept => {
            conceptsObj[concept.name] = concept.value
          });

          data.concepts = conceptsObj;
          data.didCheck = true;
          firebase.database().ref(child.key).set(data)
          .then(() => console.log('Synchronization succeeded'))
          .catch(err => console.log(err));
      },
      function(err) {
          console.error(err);
      }
    );
  })

}