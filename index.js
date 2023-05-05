const coffeeMenu = require('./coffee_data');

//Print an array of all the drinks on th menu
console.log(coffeeMenu.sort());

//Print an array of driks that cost 5 and under
const drinkCost = (price) => {
    return price <= 5;
};
const price = coffeeMenu.price;
const result = price.filter(drinkCost);
console.log(result);
//Print an array of drinks that are priced at an even number

//Print the total if you were to order one of every drink

//Print an array with all the drinks that seasoal

//Print all the seasonal drinks with the words "with imported beans"
//after the item names. For example: "affogato with imported beans"