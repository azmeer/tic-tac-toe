const readline = require('readline');

/*

  Tic-Tac-Toe

  Render a board
  prompt user for a move
  Check move/game status
  
*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.player = 'X';
    this.render = this.render.bind(this);
    this.move = this.move.bind(this);
    this.reset = this.reset.bind(this);
    this.allEqual = this.allEqual.bind(this);
    this.nextPlayer = this.nextPlayer.bind(this);
    this.checkRow = this.checkRow.bind(this);
    this.checkCol = this.checkCol.bind(this);
    this.checkDiag = this.checkDiag.bind(this);
    this.enterMove = this.enterMove.bind(this);
    this.promptUser = this.promptUser.bind(this);
  }
  render() {
    return this.board.map(row => row.join(' | ')).join('\n__|___|___\n') + '\n  |   |  \n';
  }

  move(location) {
    if (this.board[location[0]][location[1]] === ' ') {
      return this.board[location[0]][location[1]] = this.player;
    } else {
      return null;
    }
  }

  reset() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.player = 'X';
  }
  
  allEqual(array) {
    let equal = true;
    array.reduce((lastVal, val) => {
      equal = equal && (val === lastVal);
      return val;
    }, this.player);
    return equal;
  }

  nextPlayer() {
    this.player = (this.player === 'X') ? 'O' : 'X';
  }

  checkRow(row) {
    return this.allEqual(this.board[row]);
  }

  checkCol(col) {
    return this.allEqual(this.board.map(row => row[col]));
  }

  checkDiag(dir) {
    return true;
  }

  enterMove(move) {
    console.log('got move: ', move);
    if (false) {
      console.log(`Player ${this.player} wins!`);
      this.reset();
    } else {
      this.nextPlayer();
    }
    this.promptUser();
  }
  
  promptUser() {
    rl.question(`Player ${this.player} Please enter a move (x,y):`, this.enterMove);
  }
  
  play() {
    this.promptUser();
  }
}


const game = new Game;
console.log(game.render());
game.move('X', [0, 0]);
console.log(game.render());
game.move('O', [1, 1]);
console.log(game.render());
console.log(game.allEqual(['a','a','a']));
console.log(game.allEqual(['b','a','a']));
console.log(game.allEqual(['b','b','b']));
game.play();
