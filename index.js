
let cells = document.querySelectorAll('.cell')
    cells = Array.from(cells)

let winningAreas =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];

let winner = () => {
    winningAreas.forEach(function(combination){
        let check = combination.every(id => cells[id].innerText.trim() == currentPlayer)
        if(check){
            alert(currentPlayer + ' has gotten a tic tac toe')
        }
    })
}



let currentPlayer = "X";
    cells.forEach(function(cell){
        cell.addEventListener('click', function(){
            if(cell.innerHTML != 'X' && cell.innerHTML != 'O')
            cell.innerHTML = currentPlayer
            winner();
            currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
        
        })
    })


let resetButton  = document.querySelector('#reset')
