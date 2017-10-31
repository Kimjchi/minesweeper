'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberofColumns) {
  var board = [];
  for (var i = 0; i < numberOfRows; i++) {
    var row = [];
    for (var j = 0; j < numberofColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberofColumns, numberOfBombs) {
  var board = [];
  for (var i = 0; i < numberOfRows; i++) {
    var row = [];
    for (var j = 0; j < numberofColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }

  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    //for now, it's possible that bombs are placed on top of each others
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberofColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }

  return board;
};