document.addEventListener("DOMContentLoaded", () => {
  function generateGrid(size) {
    const container = document.createElement("div");
    container.setAttribute("id","container");
    for (let i = 1; i <= size; i++) {
      const gridElem = document.createElement("div");
      gridElem.classList.add("grid-elem");
      container.appendChild(gridElem);
    }
    document.body.appendChild(container);
  }
 
  generateGrid(16);
});
