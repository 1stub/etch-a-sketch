const gridMap = document.querySelector('.grid');

function createGrid(size){
    for(let i = 0; i < size; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        gridMap.appendChild(block);
    }
}
createGrid(256);
