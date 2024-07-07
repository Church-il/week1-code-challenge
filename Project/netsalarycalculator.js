//iMPORTS readline dependencies
const readline = require('readline');

// Create readline interface for nodeJS CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate net salary

/*It begins by defining arrays for PAYE rates (payeRates), NHIF deductions (nhifRates), and constants for NSSF contribution rates (nssfRateTierI and nssfRateTierII). Upon receiving inputs for basic salary and benefits, the function calculates the gross salary by summing these values. It then proceeds to invoke helper functions to determine each component of the net salary*/
function calculateNetSalary(basicSalary, benefits) {
    // Define PAYE rates based on monthly income brackets
    const payeRates = [
        { minMonthly: 0, maxMonthly: 24000, rate: 10 },
        { minMonthly: 24001, maxMonthly: 32333, rate: 25 },
        { minMonthly: 32334, maxMonthly: 500000, rate: 30 },
        { minMonthly: 500001, maxMonthly: 800000, rate: 32.5 },
        { minMonthly: 800001, maxMonthly: Infinity, rate: 35 }
    ];

    // Define NHIF deductions based on gross pay ranges
    const nhifRates = [
        { minGrossPay: 0, maxGrossPay: 5999, deduction: 150 },
        { minGrossPay: 6000, maxGrossPay: 7999, deduction: 300 },
        { minGrossPay: 8000, maxGrossPay: 11999, deduction: 400 },
        { minGrossPay: 12000, maxGrossPay: 14999, deduction: 500 },
        { minGrossPay: 15000, maxGrossPay: 19999, deduction: 600 },
        { minGrossPay: 20000, maxGrossPay: 24999, deduction: 750 },
        { minGrossPay: 25000, maxGrossPay: 29999, deduction: 850 },
        { minGrossPay: 30000, maxGrossPay: 34999, deduction: 900 },
        { minGrossPay: 35000, maxGrossPay: 39999, deduction: 950 },
        { minGrossPay: 40000, maxGrossPay: 44999, deduction: 1000 },
        { minGrossPay: 45000, maxGrossPay: 49999, deduction: 1100 },
        { minGrossPay: 50000, maxGrossPay: 59999, deduction: 1200 },
        { minGrossPay: 60000, maxGrossPay: 69999, deduction: 1300 },
        { minGrossPay: 70000, maxGrossPay: 79999, deduction: 1400 },
        { minGrossPay: 80000, maxGrossPay: 89999, deduction: 1500 },
        { minGrossPay: 90000, maxGrossPay: 99999, deduction: 1600 },
        { minGrossPay: 100000, maxGrossPay: Infinity, deduction: 1700 }
    ];


  /*Lastly, it computes the NSSF deduction using the calculateNssfDeduction function, applying the defined contribution rates (nssfRateTierI and nssfRateTierII) to calculate contributions based on the gross salary. After computing these deductions, the function determines the net salary by subtracting the total deductions (PAYE tax, NHIF deduction, and NSSF deduction) from the gross salary. The function then returns an object containing the calculated gross salary, PAYE tax, NHIF deduction, NSSF deduction, and net salary*/

    // Define NSSF contribution rates for Tier I and Tier II
    const nssfRateTierI = 6; // Contribution rate for Tier I
    const nssfRateTierII = 6; // Contribution rate for Tier II

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let paye = calculatePaye(grossSalary, payeRates);

    // Calculate NHIF deduction
    let nhifDeduction = calculateNhifDeduction(grossSalary, nhifRates);

    // Calculate NSSF deduction
    let nssfDeduction = calculateNssfDeduction(grossSalary, nssfRateTierI, nssfRateTierII);

    // Calculate net salary
    const netSalary = grossSalary - (paye + nhifDeduction + nssfDeduction);

    // Return calculated values
    return {
        grossSalary: grossSalary,
        paye: paye,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary
    };
}

/* Determines the (PAYE) tax based on the gross salary and predefined tax brackets (payeRates). It iterates through each bracket, checking if the gross salary falls within its range (<= payeRates[i].maxMonthly). If true, it calculates the taxable amount by subtracting the bracket's minimum income from the gross salary. The function then computes the tax using the bracket's rate, converting it from a percentage to a decimal. Once the correct bracket is identified, the function stops iterating (break), ensuring accurate calculation of the PAYE tax based on the salary provided. */

function calculatePaye(grossSalary, payeRates) {
    let paye = 0;
    for (let i = 0; i < payeRates.length; i++) {
        if (grossSalary <= payeRates[i].maxMonthly) {
            let taxableAmount = Math.max(0, grossSalary - payeRates[i].minMonthly);
            paye += (taxableAmount * payeRates[i].rate) / 100;
            break; // Exit loop once tax bracket is found
        } else {
            let taxableAmount = payeRates[i].maxMonthly - payeRates[i].minMonthly;
            paye += (taxableAmount * payeRates[i].rate) / 100;
        }
    }
    return paye;
}
/*This function computes the NHIF deduction based on the gross salary and a set of predefined deduction rates (nhifRates). It iterates through each rate defined in nhifRates, checking if the gross salary falls within the specified range (grossSalary >= nhifRates[i].minGrossPay && grossSalary <= nhifRates[i].maxGrossPay). When a matching range is found, it assigns the corresponding deduction amount (nhifRates[i].deduction) to nhifDeduction and exits the loop (break), ensuring that only the applicable NHIF deduction is used for the given salary. Finally, it returns the computed NHIF deduction amount. This function efficiently determines the NHIF deduction based on the provided gross salary and predefined deduction ranges. */

function calculateNhifDeduction(grossSalary, nhifRates) {
    let nhifDeduction = 0;
    for (let i = 0; i < nhifRates.length; i++) {
        if (grossSalary >= nhifRates[i].minGrossPay && grossSalary <= nhifRates[i].maxGrossPay) {
            nhifDeduction = nhifRates[i].deduction;
            break; // Exit loop once NHIF deduction is found
        }
    }
    return nhifDeduction;
}

/*Computes the NSSF deduction based on the gross salary and predefined contribution rates for Tier I and Tier II (nssfRateTierI and nssfRateTierII). It calculates Tier I deduction for the portion of the salary up to Ksh 7,000 and Tier II deduction for the amount between Ksh 7,001 and Ksh 36,000. The function returns the total deduction by summing up both tiers' contributions.*/ 

function calculateNssfDeduction(grossSalary, nssfRateTierI, nssfRateTierII) {
    let nssfDeductionTierI = Math.min(grossSalary, 7000) * (nssfRateTierI / 100);
    let nssfDeductionTierII = Math.max(0, Math.min(grossSalary - 7000, 29000)) * (nssfRateTierII / 100);
    return nssfDeductionTierI + nssfDeductionTierII;
}

// Function to prompt for basic salary and benefits, and calculate net salary

/*The promptForSalary function employs Node.js's readline module to interactively solicit user input for both the basic salary and benefits. It starts by asking the user to enter the basic salary, converting the input to a floating-point number (basicSalaryInput). It then checks if this input is valid by verifying that it is a number and greater than or equal to zero. If the input fails these checks, it displays an error message stating that the basic salary must be a positive number and closes the input stream (rl.close()).

Upon receiving valid input for the basic salary, the function proceeds to ask for the benefits in a similar manner. It validates the benefits input similarly to ensure it is also a positive number. Once both inputs are validated, the function calls the calculateNetSalary function, passing in the validated basic salary and benefits.

After computing the net salary using calculateNetSalary, promptForSalary outputs a detailed breakdown of the salary information*/

function promptForSalary() {
    rl.question("Enter basic salary: ", (basicSalaryInput) => {
        const basicSalary = parseFloat(basicSalaryInput);
        if (isNaN(basicSalary) || basicSalary < 0) {
            console.log("Invalid input. Basic salary must be a positive number.");
            rl.close();
            return;
        }

        rl.question("Enter benefits: ", (benefitsInput) => {
            const benefits = parseFloat(benefitsInput);
            if (isNaN(benefits) || benefits < 0) {
                console.log("Invalid input. Benefits must be a positive number.");
                rl.close();
                return;
            }

            // Calculate net salary
            const salaryDetails = calculateNetSalary(basicSalary, benefits);
            console.log("\nSalary Details:");
            console.log("--------------");
            console.log("Gross Salary:", salaryDetails.grossSalary);
            console.log("PAYE (Tax):", salaryDetails.paye);
            console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
            console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
            console.log("Net Salary:", salaryDetails.netSalary);

            rl.close();
        });
    });
}

// Run the script 
promptForSalary();
