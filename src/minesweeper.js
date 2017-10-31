class Game {
  constructor(numberOfRows, numberofColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberofColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('GAME OVER');
      this._board.print();
    }
    else if (!this._board.hasSafeTiles()) {
      console.log('You WON. CONGRATULATIONS!');
    }
    else {
      console.log('Current Board:');
      this._board.print();
    }
  }
}

class Board {
  constructor(numberOfRows, numberofColumns, numberOfBombs){
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberofColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberofColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberofColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {
    if(this._playerBoard[rowIndex][columnIndex] !== ' '){
      console.log('This tile has already been flipped!');
    }
    else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    }
    else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
                              [-1, -1], [ -1, 0], [-1, 1],
                                [0, -1], [0, 1],
                              [1, -1], [1, 0], [1, 1]
                            ];
    const numberOfRows = this._bombBoard.length;
    const numberofColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex <= numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex <= numberofColumns) {
        if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
  }

  hasSafeTiles(){
    return (this._numberOfTiles !== this.numberOfBombs);
  }

  print() {
    console.log(this._playerBoard.map(row => {
      return row.join(' | ');
    }).join('\n'));
    /*console.log(this._bombBoard.map(row => {
      return row.join(' | ');
    }).join('\n'));*/
  }

  static generatePlayerBoard(numberOfRows, numberofColumns) {
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

  static generateBombBoard(numberOfRows, numberofColumns, numberOfBombs) {
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
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }

    return board;
  }

}

const g = new Game(3,3,3);
g.playMove(0,0);
