import { getRandomNumber } from "./getRandomNumber.js";

export function getRandomRgbValue() {
  return `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(
    255
  )})`;
}
