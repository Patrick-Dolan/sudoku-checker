// a way to get all of our values will be something like:
// let cells = document.getElementByClassName(' a class name that is common to all cells ');
// should give us a long array with all values
// that we can then break apart into rows with a prototype.addRows

export function Sudoku() {
  this.rows = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0 ,0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6], 
    [0, 6, 0, 0, 0, 0, 2, 8, 0], 
    [0 ,0, 0, 4, 1, 9, 0, 0, 5], 
    [0, 0, 0, 0, 8, 0, 0, 7, 9] 
  ];
  this.columns = [];
  this.grids = [];
}

Sudoku.prototype.addColumns = function() {
  for (var i = 0; i <= 8; i++) {
    let temp = [];
    for (var j = 0; j <= 8; j++) {
      temp.push(this.rows[j][i]);
    }
    this.columns.push(temp);
  }
};

Sudoku.prototype.addGrids = function() {
    let firstRows = [this.rows[0], this.rows[1], this.rows[2]];  // let firstRows = [this.rows[0], this.rows[1], this.rows[2]];
  // let firstRows = [this.rows[0], this.rows[1], this.rows[2]];]];
  let temp = [];

  firstRows.fswo
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      temp.push(this.rows[i][j]);
    }
  }
  this.grids.push(temp);
};

// let grid1 = [
//   row1[0], row1[1], row1[2],
//   row2[0], row2[1], row2[2],
//   row3[0], row3[1], row3[2]
// ];
// ];

// Wajma function for grids
// function 3x3 (row, col, data)
// let row = math.floor (row/3)*3 ; 
// let col = math.floor (col/3)*3;
// for (var i = 0; i <3, i ++){ 
//   for (var j=0; j<3; j++){
//     then if and then statements ..
//   }
// }