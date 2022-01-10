/*const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Transformed string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best", upperFirstWord);

transformer("Javascript is the best", oneWord);

*/

const greet = function (greeting) {
  return function (name) {
    console.log(` ${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

// using arrow function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hi")("Jonas");

const airIndia = {
  airline: "AirIndia",
  lataCode: "AI",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.lataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.lataCode}${flightNum}`, name });
  },
};

airIndia.book(238, "Jonas Schmedtmann");
airIndia.book(635, "John Smith");
const eurowings = {
  airline: "Eurowings",
  lataCode: "EW",
  bookings: [],
};
const book = airIndia.book;
book.call(eurowings, 23, "sarah williams");
console.log(eurowings);
book.call(airIndia, 235, "Mary Cooper");
console.log(airIndia);
