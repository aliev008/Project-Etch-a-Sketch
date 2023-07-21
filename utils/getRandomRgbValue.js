import { getRandomNumber } from "./getRandomNumber.js";

export function getRandomRgbValue() {
  return `rgb(${getRandomNumber(256)},${getRandomNumber(256)},${getRandomNumber(
    256
  )})`;
}
