import { getRandomRgbValue } from "./getRandomRgbValue.js";
import { draw } from "./draw.js";

export function createGridElem(newSquareDimension, state) {
  const gridElem = document.createElement("div");
  const gridElemInner = document.createElement("div");

  gridElem.classList.add("grid-elem");
  gridElemInner.classList.add("grid-elem-inner");
  gridElem.style.width = `${newSquareDimension}px`;
  gridElem.style.height = `${newSquareDimension}px`;

  let opacity = 0.1;

  gridElemInner.addEventListener("mousedown", (event) => {
    event.preventDefault();
    if (event.buttons > 0) {
      if (state.mode === "rgb") {
        gridElemInner.style.opacity = 1;
        gridElemInner.style.backgroundColor = getRandomRgbValue();
      } else if (state.mode === "darkening") {
        gridElemInner.style.backgroundColor = state.color;

        if (opacity < 1) {
          gridElemInner.style.opacity = opacity;
          opacity += 0.1;
        }
      } else if (state.mode === "eraser") {
        gridElemInner.style.opacity = 1;
        opacity = 0;
        gridElemInner.style.backgroundColor = `rgba(0,0,0,0)`;
      } else {
        gridElemInner.style.opacity = 1;
        gridElemInner.style.backgroundColor = state.color;
      }
    }
  });

  gridElemInner.addEventListener("mouseenter", (event) => {
    event.preventDefault();
    if (event.buttons > 0) {
      if (state.mode === "rgb") {
        gridElemInner.style.opacity = 1;
        gridElemInner.style.backgroundColor = getRandomRgbValue();
      } else if (state.mode === "darkening") {
        gridElemInner.style.backgroundColor = state.color;

        if (opacity < 1) {
          gridElemInner.style.opacity = opacity;
          opacity += 0.1;
        }
        console.log(opacity);
      } else if (state.mode === "eraser") {
        gridElemInner.style.opacity = 1;
        opacity = 0;
        gridElemInner.style.backgroundColor = `rgba(0,0,0,0)`;
      } else {
        gridElemInner.style.opacity = 1;
        gridElemInner.style.backgroundColor = state.color;
      }
    }
  });

  gridElem.appendChild(gridElemInner);

  return gridElem;
}
