// const Firebase = require('firebase');
// const FirebaseRef = new Firebase("https://iotawin-9b07a.firebaseio.com/");

var gcs = require('@google-cloud/storage')({
	projectId: 'iotawin-9b07a',
	keyFilename: './IoTaWin-9f28e316f6eb.json'
});

var fs = require('fs');


// var config = {
// 	apiKey: "YOUR_API_KEY",
// 	authDomain: "iotawin-9b07a.firebaseapp.com",
// 	databaseURL: "https://iotawin-9b07a.firebaseio.com",
// 	storageBucket: "iotawin-9b07a.appspot.com",
// 	messagingSenderId: "YOUR_MSG_ID"
// };

var bucket = gcs.bucket('iotawin-9b07a.appspot.com');

// const storageRef = firebase.storage().ref();
const pathToFileDirectory = '../../../../var/lib/motion/';

function uploadPic() {
	fs.readdir(pathToFileDirectory, (err, theFilesArray) => {
			if (err) throw err;
			bucket.upload(pathToFileDirectory + theFilesArray[0], function(err, file) {
					if (err) {
						console.error(err);
					} else {
						console.log("its up");
					});
			})
	}



	//setInterval(uploadPic, 1000);

	//export default firebase.initializeApp(config);