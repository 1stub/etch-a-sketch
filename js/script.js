const gridMap = document.querySelector('.grid');
const clear = document.querySelector('#clear');
const RBG = document.querySelector('#rgb');
const black = document.querySelector('#black');
let cellColor;
let cellSize;
let cellHeight;
let cellWidth;
let cellFactor;
let gridSize;
let gridWidth = 600; //width and height are same. Width used interchangeably

//I am leaving this code very scuffed for now in order to work on other projects. Will come back

RBG.addEventListener('click', () =>{
    cellColoring(getRandomColor());
});

black.addEventListener('click', () =>{
    cellColoring('#000000');
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function createGrid(size){
    getWidth(size);
    size = size * size;
    for(let i = 0; i < size; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.width = cellWidth - 1 + 'px';
        block.style.height = cellHeight - 1 + 'px';
        gridMap.appendChild(block);
    }
}

function removeDivs(){
    gridMap.textContent='';
}

function getWidth(size){ //determines width of each cell 
    let newSize = size * size;
    cellFactor = gridWidth / newSize;
    cellHeight = cellFactor * size;
    cellWidth = cellFactor * size;
}

createGrid(16);
cellColoring('#000000');

function cellColoring(color){ //https://stackoverflow.com/questions/75142612/make-the-background-color-of-div-change-when-the-mouse-is-down-and-hovering
    const colorCell = Array.from(document.getElementsByClassName('block'));
    let flag = false;

    window.onmouseup = function(){
        flag = false;
    };

    colorCell.forEach(cell =>{
        cell.onmouseover = () => {if(flag) cell.style.backgroundColor=color;}
        cell.onmousedown = () => {cell.style.backgroundColor=color; flag=true; } //ensures moveover event changes background color also
    });
}

function rangeSlider(){
    removeDivs();
    gridSize = document.getElementById('cell-number').value;
    createGrid(gridSize);
    cellColoring(cellColor);
    document.getElementById('range-text').textContent = `${gridSize} x ${gridSize}`;
    return gridSize;
}

const slider = document.querySelector('#cell-number')
slider.addEventListener('input', rangeSlider)

clear.addEventListener('click', () =>{
    rangeSlider();
    cellColoring('#000000');
});

/*window.onload = function() {
    const colorCell = document.querySelectorAll('.block');
    let colorCellArray = Array.prototype.slice.call(colorCell);

    colorCellArray.forEach(function(elem){
        elem.addEventListener('mousedown', function() {
            this.style.backgroundColor = '#000000';
        });
    });
}*/