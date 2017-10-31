const generatePlayerBoard = (numberOfRows, numberofColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberofColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberofColumns, numberOfBombs) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberofColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    //for now, it's possible that bombs are placed on top of each others
    let randomRowIndex = Math.floor(Math.random()*numberOfRows);
    let randomColumnIndex = Math.floor(Math.random()*numberofColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }

  return board;
};
