import { generateGrid } from "./utils/generateGrid.js";
import { modeBtnHandler } from "./utils/modeBtnHandler.js";
import { newGridBtnHandler } from "./utils/newGridBtnHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const newGridBtn = document.querySelector(".newGrid-btn");
  const modeButtons = document.querySelectorAll(".btn[data-mode]");
  const gridSizeText = container.querySelector("h3");
  const currentGrid = document.getElementById("grid");

  const state = {
    mode: "default",
    color: "#000000",
  };

  generateGrid(16, currentGrid, gridSizeText, state);

  modeButtons.forEach((button) => {
    button.addEventListener("click", ({ target }) =>
      modeBtnHandler(state, target)
    );
  });

  newGridBtn.addEventListener("click", ({ target }) =>
    newGridBtnHandler(currentGrid, gridSizeText, state, target)
  );
});
