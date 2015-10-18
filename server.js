var express = require('express');
var app = express();


app.use('/js', express.static(__dirname + '/js'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/partials', express.static(__dirname + '/partials'));
app.use(require('prerender-node'));


app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});
app.get('/', function (req, res) {
    res.sendFile('./index.html');
});

app.listen(3006, function () {
	"listening on port 3006"
});