import { generateGrid } from "./utils/generateGrid.js";
import { newGridBtnHandler } from "./utils/newGridBtnHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const newGridBtn = document.querySelector(".newGrid-btn");
  const gridSizeText = container.querySelector("h3");
  const currentGrid = document.getElementById("grid");

  const state = {
    mode: "rgb",
    color: "#000000",
  };

  generateGrid(16, currentGrid, gridSizeText, state);

  newGridBtn.addEventListener("click", () =>
    newGridBtnHandler(currentGrid, gridSizeText, state)
  );
});
