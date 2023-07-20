document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const newGridBtn = document.getElementById("newGrid-btn");
  const gridSizeText = container.querySelector("h3");
  const currentGrid = document.getElementById("grid");

  function createGridElem(newSquareDimension) {
    const gridElem = document.createElement("div");

    gridElem.classList.add("grid-elem");
    gridElem.style.width = `${newSquareDimension}px`;
    gridElem.style.height = `${newSquareDimension}px`;

    gridElem.addEventListener("mouseenter", () => {
      gridElem.classList.add("active");
    });

    gridElem.addEventListener("mouseleave", () => {
      setTimeout(() => {
        gridElem.classList.remove("active");
      }, 100);
    });

    return gridElem;
  }

  function generateGrid(size) {
    const newSquareDimension = 560 / size;

    currentGrid.innerHTML = "";

    gridSizeText.textContent = `The Grid size is: ${size}x${size}`;

    for (let i = 1; i <= size * size; i++) {
      const gridElem = createGridElem(newSquareDimension);
      currentGrid.appendChild(gridElem);
    }
  }

  generateGrid(16);

  newGridBtn.addEventListener("click", () => {
    const newGridSize = Number(prompt("Enter new grid size here up to 100!"));

    if (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
      alert("Please, enter a valid number from 1 to 100");
      return;
    }

    generateGrid(newGridSize);
  });
});
