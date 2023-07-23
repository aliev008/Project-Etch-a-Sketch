import { generateGrid } from "./generateGrid.js";

export function newGridBtnHandler(currentGrid, gridSizeText, state, elem) {
  const newGridSize = Number(prompt("Enter new grid size here up to 100!"));
  const selectedMode = elem.getAttribute("data-mode");
  elem.classList.add("active");

  state.mode = selectedMode;

  if (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
    alert("Please, enter a valid number from 1 to 100");
    return;
  }

  generateGrid(newGridSize, currentGrid, gridSizeText, state);
}
