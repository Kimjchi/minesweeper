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

var generateBombBoard = function generateBombBoard(numberOfRows, numberofColumns, numberOfBombs) {};