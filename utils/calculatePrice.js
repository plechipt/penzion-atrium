import { prices } from "./prices";

export const calculatePrice = (stayType, numberOfPeople, roomCategory) => {
  // Validate input parameters
  if (!(stayType in prices) || !(roomCategory in prices[stayType])) {
    console.log("Invalid stay type or room category");
  }

  const priceMatrix = prices[stayType][roomCategory];
  console.log(priceMatrix.length);

  // Validate the number of people
  if (numberOfPeople < 1 || numberOfPeople > priceMatrix.length) {
    console.log(`Invalid number of people for ${stayType} stay`);
  }

  // Calculate the price based on the number of people
  const price = priceMatrix[numberOfPeople - 1];

  return price;
};

// Example usage:
//const price = calculatePrice("long", 3, "TOURIST");
//console.log(`The price is ${price} Kč`);
