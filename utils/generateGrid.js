import { createGridElem } from "./createGridElem.js";

export function generateGrid(size, currentGrid, gridSizeText, state) {
  const newSquareDimension = 556 / size;

  currentGrid.innerHTML = "";

  gridSizeText.textContent = `The Grid size is: ${size}x${size}`;

  for (let i = 1; i <= size * size; i++) {
    const gridElem = createGridElem(newSquareDimension, state);
    currentGrid.appendChild(gridElem);
  }
}
