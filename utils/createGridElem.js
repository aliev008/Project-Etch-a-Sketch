import { getRandomRgbValue } from "./getRandomRgbValue.js";

export function createGridElem(newSquareDimension, state) {
  const gridElem = document.createElement("div");
  const gridElemInner = document.createElement("div");

  // const { mode, color } = state;
  // console.log(color);

  gridElem.classList.add("grid-elem");
  gridElemInner.classList.add("grid-elem-inner");
  // gridElem.style.width = `${newSquareDimension}px`;
  // gridElem.style.height = `${newSquareDimension}px`;
  gridElem.style.width = `${newSquareDimension}px`;
  gridElem.style.height = `${newSquareDimension}px`;

  let opacity = 0;

  gridElemInner.addEventListener("mouseenter", () => {
    console.log(opacity);
    // console.log(state.mode);
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
  });

  gridElemInner.addEventListener("mouseleave", () => {
    setTimeout(() => {
      // gridElem.classList.remove("active");
    }, 100);
  });

  gridElem.appendChild(gridElemInner);

  return gridElem;
}
