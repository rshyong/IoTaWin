// IMPORT ALL NECESSARY PACKAGES
const express = require('express'),
	  app = express();

app.use(express.static(__dirname));


// SET A DYNAMIC PORT
// process.env.PORT lets HEROKU set port
const PORT = process.env.PORT || 1337;


// MAKE APP LISTEN ON THAT PORT
app.listen(PORT, function() {
	console.log(`App is running on http://localhost:${ PORT }`);
})
