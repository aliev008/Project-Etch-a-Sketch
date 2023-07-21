import { getRandomRgbValue } from "./getRandomRgbValue.js";

export function createGridElem(newSquareDimension, state) {
  const gridElem = document.createElement("div");
  const { mode, color} = state;
  console.log(color);

  gridElem.classList.add("grid-elem");
  gridElem.style.width = `${newSquareDimension}px`;
  gridElem.style.height = `${newSquareDimension}px`;

  if (mode === "default") {
    gridElem.addEventListener("mouseenter", () => {
      gridElem.classList.add("active");
    });

    gridElem.addEventListener("mouseleave", () => {
      setTimeout(() => {
        // gridElem.classList.remove("active");
      }, 100);
    });
  }

  if (mode === "rgb") {
    gridElem.addEventListener("mouseenter", () => {
      gridElem.style.backgroundColor = getRandomRgbValue();
    });

    gridElem.addEventListener("mouseleave", () => {
      setTimeout(() => {
        // gridElem.classList.remove("active");
      }, 100);
    });
  }

  if (mode === "darkening") {
    gridElem.style.opacity = 0;
    gridElem.style.backgroundColor = color;
    let opacity = 0;
    gridElem.addEventListener("mouseenter", () => {
      opacity += 0.1;
      gridElem.style.opacity = opacity;
    });

    gridElem.addEventListener("mouseleave", () => {
      setTimeout(() => {
        // gridElem.classList.remove("active");
      }, 100);
    });
  }

  return gridElem;
}
