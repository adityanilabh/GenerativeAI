"use strict"; /*
/*const bookings = [];
const createBooking = function (
  flightNum,
  numPassegers = 1,
  price = 199 * numPassegers
) {
  /* numPassegers = numPassegers || 1;
  price = price || 199;   es 5 assignment*/ /*
  const booking = {
    flightNum,
    numPassegers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("HT134", 2, 334);
createBooking("hs123", undefined, 1000);
*/

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 23204243434,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  /* if (passenger.passport === 23204243434) {
    alert("Checked in");
  } else {
    alert("Wrong passport");
  }*/
};
checkIn(flight, jonas);

const people = {
  name: "nilabh",
  age: 21,
  enroll: 18104074,
};
const changeAge = (peoples) => {
  peoples.name = "satyam";
  peoples.age = 25;
  peoples.enroll = 599999;
};
changeAge(people);
console.log(people);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
console.log(jonas);
