const queen = document.querySelector('.chessPiece');
const square = document.querySelectorAll('.square');
const infoDisplay = document.querySelector('#info');

queen.addEventListener('drag', dragging);
queen.addEventListener('dragstart', dragStart);

square.forEach(square => {
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragenter', dragEnter);
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('drop', dragDrop);
    square.addEventListener('dragend', dragEnd);
  
}) 

let beingDragged;

function dragging()
{
    infoDisplay.textContent = 'You are dragging the ' + beingDragged.id
}

function dragStart(e)
{
    beingDragged = e.target;
    console.log(beingDragged);
}

function dragOver(e)
{
    e.preventDefault();
}

function dragEnter(e)
{
 e.target.classList.add('highlight')
}

function dragLeave(e)
{
    e.target.classList.remove('highlight');
}

function dragDrop(e)
{
    e.target.append(beingDragged);
    console.log(e.target);
    e.target.classList.remove('highlight');
}

function dragEnd(e)
{
    e.target.classList.add('target');
    setTimeout(() => e.target.classList.remove('target'), 100); 
    const display = infoDisplay.textContent = 'dragged succesfull';
    setTimeout(() => e.target.classList.remove(display), 100); 

        
}

