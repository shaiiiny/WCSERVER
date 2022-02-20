/* Activity Name: secondexpress.js
Author Name: Santos, Jessica Shaine F.
Section and Code: WD-202 / 2083 
*/

const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', function (request, response) {
  console.log('Running...');
  response.send('Welcome! This is a new content. :P');
});
const server = app.listen(2020, 'localhost', function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s",host, port);
});