import { generateGrid } from "./generateGrid.js";

export function modeBtnHandler(state, elem) {
  const selectedMode = elem.getAttribute("data-mode");
  const modeButtons = document.querySelectorAll(".btn[data-mode]");
  modeButtons.forEach((button) => button.classList.remove("active"));
  elem.classList.add("active");
 
  console.log(state);
  state.mode = selectedMode;
  console.log(state);
}
