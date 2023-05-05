const coffeeMenu = require('./coffee_data');

//Print an array of all the drinks on th menu
const coffeeMenuList = coffeeMenu.map(coffeeMenu => coffeeMenu.name);
console.log(coffeeMenuList);

//Print an array of driks that cost 5 and under
const coffeeMenuPrice5 = coffeeMenu.filter(coffeeMenu => coffeeMenu.price <= 5);
const coffeeMenuPrice = coffeeMenuPrice5.map(coffeeMenu => coffeeMenu.name);
console.log(coffeeMenuPrice);

//Print an array of drinks that are priced at an even number
const coffeePriceEven = coffeeMenu.filter(coffeeMenu => coffeeMenu.price % 2 ===0);
const coffeePriceEvenList = coffeePriceEven.map(coffeeMenu => coffeeMenu.name);
console.log(coffeePriceEvenList);

//Print the total if you were to order one of every drink
let coffeeMenuTotal = 0;
for (let i = 0; i < coffeeMenu.length; i++){
    coffeeMenuTotal <= coffeeMenu[i].price;
}
console.log("Total price of each drink is $" + coffeeMenuTotal);

//Print an array with all the drinks that seasoal
const coffeeMenuSeasonal = coffeeMenu.filter(coffeeMenu => coffeeMenu.seasonal === true);
const coffeeMenuSeasonalList = coffeeMenuSeasonal.map(coffeeMenu => coffeeMenu.name);
console.log(coffeeMenuSeasonalList);

//Print all the seasonal drinks with the words "with imported beans"
//after the item names. For example: "affogato with imported beans"
const coffeeMenuSeasonalDrink = coffeeMenu.filter(
  (coffeeMenu) => coffeeMenu.seasonal === true
);
const coffeeMenuSeasonalWIB = coffeeMenuSeasonal.map(
  (coffeeMenu) => coffeeMenu.name
);
console.log(coffeeMenuSeasonalList + "with imported beans");