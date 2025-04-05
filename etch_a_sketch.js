const gridWrapper = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
    let gridBox = document.createElement("div");
    gridBox.setAttribute("class", "grid-box");
    // gridBox.setAttribute("id", `box-${i + 1}`);
    gridWrapper.appendChild(gridBox);
}

const gridList = document.querySelectorAll(".grid-box");

gridList.forEach((gridBox) => {
    gridBox.addEventListener('mouseover', () => {
        gridBox.style.backgroundColor = 'black'
    });
});