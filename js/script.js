const gridMap = document.querySelector('.grid');
let cellSize;
let cellHeight;
let cellWidth;
let cellFactor;
let gridWidth = 600; //width and height are same. Width used interchangeably

function createGrid(size){
    getWidth(size);
    size = size * size;
    for(let i = 0; i < size; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.width = cellWidth -1 + 'px';
        block.style.width = cellHeight -1 + 'px';
        gridMap.appendChild(block);
    }
}

function getWidth(size){ //determines width of each cell 
    let newSize = size * size;
    cellFactor = gridWidth / newSize;
    cellHeight = cellFactor * size;
    cellWidth = cellFactor * size;
}

createGrid(16);
