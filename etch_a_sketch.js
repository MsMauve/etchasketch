const gridWrapper = document.querySelector("#grid-container");
const userBtn = document.querySelector("#grid-btn");
let gridList = [];

function randomNumber(max=255) {
    return Math.floor((Math.random() *  max) + 1);
}

function makeRandomColor() {
    return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
}
function enableBoxDraw(nodeList) {
    nodeList.forEach((element) => {
        element.addEventListener('mouseover', () => {
            let randomColor = makeRandomColor()
            element.style.backgroundColor = randomColor
        });
    });
};

function setGrid(gridSize=16) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let gridBox = document.createElement("div");
        gridBox.setAttribute("class", "grid-box");
        gridBox.setAttribute("style", `border: 2px solid black; width: ${100/gridSize}%; height: ${100/gridSize}%`);
        gridWrapper.appendChild(gridBox);
        gridList = document.querySelectorAll(".grid-box");
        enableBoxDraw(gridList);
    }
}

setGrid();

userBtn.addEventListener('click', () => {
    gridSize = Number(prompt("What length & width would you like your grid to be?"))
    if (gridSize <= 100) {
        gridWrapper.innerHTML = '';
        setGrid(gridSize);

    } else {
        alert("The max is 100; think a bit smaller please.");
    }
});
