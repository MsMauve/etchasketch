const gridWrapper = document.querySelector("#grid-container");

function setGrid(gridSize=16) {
    for (let i = 0; i < gridSize; i++) {
        let gridBox = document.createElement("div");
        gridBox.setAttribute("class", "grid-box");
        // gridBox.setAttribute("id", `box-${i + 1}`);
        gridWrapper.appendChild(gridBox);
    }
}

setGrid();

const gridList = document.querySelectorAll(".grid-box");

gridList.forEach((gridBox) => {
    gridBox.addEventListener('mouseover', () => {
        gridBox.style.backgroundColor = 'black'
    });
});

