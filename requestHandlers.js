fs = require('fs')

function start(response, postData) {
  console.log("Request handler 'start' was called.");
  fs.readFile('./cornHole.html', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(data);
    response.end();
  });
}

function upload(response, postData) {
  console.log("rh upload was called");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You sent "+postData);
  response.end();

}

exports.start = start;
exports.upload = upload;
