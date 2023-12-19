import { prices } from "./prices";

export const calculatePrice = (stayType, numberOfPeople, roomCategory) => {
  // Validate input parameters
  if (!(stayType in prices) || !(roomCategory in prices[stayType])) {
    throw new Error("Invalid stay type or room category");
  }

  const priceMatrix = prices[stayType][roomCategory];

  // Validate the number of people
  if (numberOfPeople < 1 || numberOfPeople > priceMatrix.length) {
    throw new Error(`Invalid number of people for ${stayType} stay`);
  }

  // Calculate the price based on the number of people
  const price = priceMatrix[numberOfPeople - 1];

  return price;
};

// Example usage:
const price = calculatePrice("long", 3, "TOURIST");
console.log(`The price is ${price} Kč`);
