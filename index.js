/*

  Tic-Tac-Toe

  Render a board
  prompt user for a move
  Check move/game status
  
*/


class Game {
  constructor() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }
  render() {
    return this.board.map(row => row.join(' | ')).join('\n__|___|___\n') + '\n  |   |  \n';
  }
  move(player, location) {
    if (this.board[location[0]][location[1]] === ' ') {
      return this.board[location[0]][location[1]] = player;
    } else {
      return null;
    }
  }
}


const game = new Game;
console.log(game.render());
game.move('X', [0, 0]);
console.log(game.render());
game.move('O', [1, 1]);
console.log(game.render());
