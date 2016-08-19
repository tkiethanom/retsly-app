var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/js', express.static( __dirname + '/build/js'));

app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/build/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


