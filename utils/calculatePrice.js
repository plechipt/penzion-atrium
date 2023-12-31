import { prices } from "./prices";

export const calculatePrice = (
  stayType,
  numberOfPeople,
  roomCategory,
  numberOfDays
) => {
  // Validate input parameters
  if (!(stayType in prices) || !(roomCategory in prices[stayType])) {
    console.log("Invalid stay type or room category");
  }

  const daysIndex = numberOfDays === "1-2" ? 0 : 1;

  if (stayType === "group") {
    let groupPrice;

    if (numberOfPeople === "10-19") {
      groupPrice = prices.group.TOURIST[numberOfPeople][daysIndex];
    } else if (numberOfPeople === "20-29") {
      groupPrice = prices.group.TOURIST[numberOfPeople][daysIndex];
    } else if (numberOfPeople === "30+") {
      groupPrice = prices.group.TOURIST[numberOfPeople][daysIndex];
    } else {
      throw new Error("Invalid number of people for group stay");
    }

    console.log(groupPrice);

    return groupPrice;
  }

  const priceMatrix = prices[stayType][roomCategory];

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
