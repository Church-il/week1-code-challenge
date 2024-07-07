
// Function to determin the demerit points based on the speed of a car
function checkSpeed(speed) {
  const limit = 70;
  const kmPerDemerit = 5;                                                      
  const maxDemerits = 12;

  // Check if the speed is less than the speed limit
  if (speed < limit) {
      console.log("Ok");
      return;
  }

  /*Calculate the number of demerit points by subtracting the limit from the speed.
   Then divide the result by kmPerDemerit and round down to the nearest integer. */
  let demeritPoints = Math.floor((speed - limit) / kmPerDemerit);

  // Check if the calculated demerit points exceed the maximum allowable demerit points
  if (demeritPoints > maxDemerits) {
      // If demerit points are greater than the maximum, print "License suspended"
      // This indicates that the driver's license should be suspended due to excessive speed
      console.log("License suspended");
  } else {
      // Otherwise, print the number of demerit points the driver has received
      console.log("Points: " + demeritPoints);
  }
}

// Import the readline module from Node.js to handle user input from our command line
const readline = require('readline');

// Create an interface to read input and output from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt the user for the speed of the car and process the input

/*Once the user has provided their input, the callback function is executed. Inside the callback function, the user's input is converted to a number, the checkSpeed() function is called to determine the demerit points based on the input speed, and the input stream is closed using readline.close().*/
function getUserSpeed() {
  rl.question("Enter the speed of the car: ", function(input) {
      let carSpeed = Number(input);
      checkSpeed(carSpeed);
      rl.close();
  });
}

// Calling the getUserSpeed function to prompt the user.
getUserSpeed();
