const http = require("http"); // http varible with require function that has global module inside.
function rqListener(req, res) {} // function has two arguments here one for request and resond for response.
http.createServer(rqListener); //   variable with method name createserver.
