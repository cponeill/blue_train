var express = require("express");
var fs = require("fs");
app.use(express.logger());

app.get('/', function(request, response) {
   response.send(index.html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
   console.log("Listening on " + port);
});
