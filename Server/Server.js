let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start up our server
app.listen(port, function () {
    console.log('listening on port', port);
});