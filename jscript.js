
// //Function to prompt first and last name and return lastname,firstname with first letter capital


let fName = prompt("Enter the first name: ");
//making sure user entered the first name
while (fName === null || fName.trim() === "") {
    fName = prompt("Invalid name input:");
}

let lName = prompt("Enter the last name: ");
//making sure user entered the last name
while (lName === null || lName.trim() === "") {2
    lName = prompt("Invalid name input:");
}



//Create a function to return full name after joining lastname and firstname
let fullName = 'null';
function formatFullName(fName, lName) {
    fullName = capitalizeFirstLetter(lName) + ', ' + capitalizeFirstLetter(fName);
    return fullName;

}

//Create a function that takes a string argument and returns the string with the first letter capitalized only
let name = 'null'
function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}


//calling/invoking  function with 2 parameters
console.log(`Full name of the user is : ${formatFullName(fName, lName)}`);


///************************************** */
///Create a function to calculate the total cost of items with arg price, quantity and tax
//*************************************** */

let price = prompt("Enter the price of the item: ");
while (price === null || price.trim() === "" || isNaN(Number(price))) {
    console.log("--- 1 ---");
    price = prompt("Invalid price. Please enter a valid price:");
}

let quantity = prompt("Enter the quantity of the item: ");
while (quantity === null || quantity.trim() === "" || isNaN(Number(quantity))) {
    console.log("--- 2 ---");
    quantity = prompt("Invalid quantity. Please enter a valid number:");
}
let tax = prompt("Enter the tax on item: ");
while (tax === null || tax.trim() === "" || isNaN(Number(tax))) {
    console.log("--- 3 ---");
    tax = prompt("Invalid tax. Please enter a valid number:");
}

let totalCost = 0;
function calculateTotalCost(price, quantity, tax) {

    console.log(`three parameters are as follows: ${price} ${quantity} ${tax} `);
    totalCost = (price * quantity) * (1 + Number(tax));
    return totalCost;
}

console.log(`Total price of item after tax is: ${calculateTotalCost(price, quantity, tax)}`);



////********************************************** */
//Write a function called checkEligibility that takes two parameters: age and isEmployed. 
// The function should check if a person is eligible for a program


let age = prompt("Enter the age of the person: ");
while (age === null || age.trim() === "" || isNaN(Number(age))) {
    age = prompt("Invalid age. Please enter a valid number:");
}

let isEmployed = prompt("Enter the employment status of the person(Y/N): ");
while (isEmployed !== ('Y') && isEmployed !== ('N') && isEmployed !== ('y') && isEmployed !== ('n')) {
    isEmployed = prompt("Invalid status. Please enter Y or N :");
}


function checkEligibility(age, isEmployed) {
    if ((age > 18) && ((isEmployed == 'Y') || (isEmployed == 'y'))) {
        console.log("Customer is eligible");

    }
    else if ((age > 18) && ((isEmployed == 'N') || (isEmployed == 'n'))) {
        console.log("Customer is conditionally eligible");

    }
    else if (age <= 18)
    console.log("Customer is not eligible");
5
}

checkEligibility(age, isEmployed);

////////////**************************************************** */
///////////////write a function to include discount option in total amout function
let pprice = prompt("Enter the price of the item: ");
while (pprice === null || pprice.trim() === "" || isNaN(Number(pprice))) {
    console.log("--- 1 ---");
    pprice = prompt("Invalid price. Please enter a valid price:");
}

let qquantity = prompt("Enter the quantity of the item: ");
while (qquantity === null || qquantity.trim() === "" || isNaN(Number(qquantity))) {
    console.log("--- 2 ---");
    qquantity = prompt("Invalid quantity. Please enter a valid number:");
}
let ttax = prompt("Enter the tax on item: ");
while (ttax === null || ttax.trim() === "" || isNaN(Number(ttax))) {
    console.log("--- 3 ---");
    ttax = prompt("Invalid tax. Please enter a valid number:");
}

let discount = prompt("Enter the discount if available on item: ");
while (discount === null || discount.trim() === "" || isNaN(Number(discount))) {
    discount = prompt("Invalid discount. Please enter a valid number or 0:");
}

let ttotalCost = 0;
function calculateTotalCostDiscount(pprice, qquantity, ttax, discount) {
    if(discount==0){

        console.log(`Four parameters(price,quantity,tax,discount) are as follows: ${pprice} ${qquantity} ${ttax} ${discount} `);
        ttotalCost = (pprice * qquantity) * (1 + Number(ttax));
        return ttotalCost;
    }
    else{
        console.log(`Four parameters(price,quantity,tax,discount) are as follows: ${pprice} ${qquantity} ${ttax} ${discount} `);
        ttotalCost = ((pprice * qquantity)-Number(discount)) * (1 + Number(ttax));
        return ttotalCost;

    }
}

console.log(`Total price of item after tax is: ${calculateTotalCostDiscount(pprice, qquantity, ttax, discount)}`);

