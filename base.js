// const Firebase = require('firebase');
// const FirebaseRef = new Firebase("https://iotawin-9b07a.firebaseio.com/");

const fs = require('fs');

var config = {
	apiKey: "YOUR_API_KEY",
	authDomain: "iotawin-9b07a.firebaseapp.com",
	databaseURL: "https://iotawin-9b07a.firebaseio.com",
	storageBucket: "iotawin-9b07a.appspot.com",
	messagingSenderId: "YOUR_MSG_ID"
};

const storageRef = firebase.storage().ref();
const pathToFileDirectory = '/var/lib/motion/';

function uploadPic() {
	fs.readdir(pathToFileDirectory, (err, theFilesArray) => {
		if (err) throw err;
		return theFilesArray[0];
	})
	.then(file => {
		fs.readFile(file, () => storageRef.put(file))
		.then(() => fs.unlink(pathToFileDirectory + file))
	})
}


setInterval(uploadPic, 1000);

export default firebase.initializeApp(config);