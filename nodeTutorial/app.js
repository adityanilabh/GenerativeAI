// process.exitcode() is used to exit nodejs environment.
// repl is read-eval-print-loop is an compile environment that takes single expression as user input and returns the result back to the console after execution. example is we type node in terminal and then we got the node environment.
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Namaste!");
});
app.listen(3000, () => console.log("server ready"));
