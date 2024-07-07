
/*Import the readline module; basically to provide an interface 
for reading input data from the user in CLI Nodejs.*/
const readline = require('readline');

/* Forming an interface for reading input from the user in CLI Nodejs. 
Please note prompt mode is only specific to browsers and not nodeJs, thanks :) */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// On to our function to get grade based on marks!
function getGrade(marks) {

    // Check if marks are within the valid range
    if (marks < 0 || marks > 100) {
        return "Invalid marks. Please enter a value between 0 and 100.";
    }

    // Determine grade based on marks
    if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// Function to prompt user for marks and display grade
function promptForMarks() {

    /*Prompt user for input; the first argument is the prompt message, and the second argument is a callback function that will be executed once the user enters their response. The callback function receives the user's input as a string, so we convert it to a number using the Number() function. Then we call the getGrade() function to determine the grade. then, we display the grade to the user.*/
    rl.question("Please enter student marks (0-100): ", function(input) {

        // Convert input to a number
        let marks = Number(input);

        // Get grade based on marks
        let grade = getGrade(marks);

        // Display grade
        console.log("The grade is: " + grade);

        // Close the readline interface
        rl.close();

    });
}

// Prompt the user for marks
promptForMarks();






















