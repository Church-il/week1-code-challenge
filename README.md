# week1-code-challenge

**Student Grade Generator-(studentgradegenerator.js)**
This project contains a Node.js script that prompts the user to input student marks 
(between 0 and 100) and returns the corresponding grade based on the given criteria. 

The grades are determined as follows:
A: Marks greater than 79
B: Marks between 60 and 79 (inclusive)
C: Marks between 50 and 59 (inclusive)
D: Marks between 40 and 49 (inclusive)
E: Marks less than 40

Installation:
To run this project, you need to have Node.js installed on your machine. 
Follow these steps to get started:
-Clone the repository.
-Download and install Node.js from nodejs.org.

Usage:
-Navigate to the project directory
-Run the script: promptForMarks();
-Enter student marks when prompted

The script will prompt you to enter the student marks (a number between 0 and 100).
It will then display the corresponding grade based on the input marks. An interface is created 
to read input from the command line and output to the command line. The promptForMarks function is called to initiate the process.




**Speed Detector-(speedetector.js)**
This project contains a Node.js script that takes the speed of a car as input and determines the number of demerit points based on the speed. If the speed is less than 70 km/h, it prints "Ok". For every 5 km/h above the speed limit (70 km/h), it assigns one demerit point. If the driver accumulates more than 12 demerit points, it prints "License suspended".

Installation:
To run this project, you need to have Node.js installed on your machine. 
Follow these steps to get started:
-Clone the repository.
-Download and install Node.js from nodejs.org.

Usage
-Navigate to the project directory.
-Run the script: getUserSpeed();
-Enter the car's speed when prompted:

The script will prompt you to enter the car's speed (a number).
It will then display the appropriate message based on the input speed.





**Net Salary Calculator-(netsalarycalculator.js)**
This Node.js script calculates net salary based on user inputs for basic salary and benefits. It utilizes predefined tax rates (PAYE), NHIF deductions, and NSSF contributions to compute the net salary after deductions.

Installation:
To run this project, you need to have Node.js installed on your machine. 
Follow these steps to get started:
-Clone the repository.
-Install/Import readline dependencies.
-Download and install Node.js from nodejs.org.

How It Works
The script defines functions to calculate each component of the net salary:

1. calculateNetSalary
-Computes gross salary by summing basic salary and benefits.
-Calculates PAYE (Tax) based on predefined income brackets and rates.
-Determines NHIF deduction based on predefined gross pay ranges.
-Computes NSSF deduction using defined contribution rates for Tier I and Tier II.
-Calculates net salary by subtracting total deductions (PAYE, NHIF, NSSF) from gross salary.

2. calculatePaye
-Determines PAYE tax based on the gross salary and predefined tax brackets.
-Iterates through tax brackets to find the applicable rate based on the gross salary range.

3. calculateNhifDeduction
-Computes NHIF deduction based on the gross salary and predefined deduction rates.
-Matches the gross salary to the appropriate NHIF deduction amount based on defined ranges.

4. calculateNssfDeduction
-Calculates NSSF deduction based on the gross salary and predefined contribution rates for Tier I and Tier II.
-Applies Tier I rate up to a specified threshold and Tier II rate beyond that threshold.

****************************************************************************************************************************************************************************************************************************************

**Contributing**

**-Contributions are welcome!** 

**-Feel free to open issues or submit pull requests.**

















































