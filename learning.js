const http = require("http"); // http varible with require function that has global module inside.
/* function rqListener(req, res) {} // function has two arguments here one for request and resond for response.

const server= http.createServer(rqListener); //   variable with method name createserver.
*/
// above one is one way to create a server
const server = http.createServer((req, res) => {
  console.log(req.url,req.method,req.);
  process.exit();
}); // storing the server.

server.listen(3000);
