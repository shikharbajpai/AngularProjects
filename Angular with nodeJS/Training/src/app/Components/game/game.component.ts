import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  deviation: number;
  original: number;
  guess: number;
  guessCount;
  disabled = false;
  gusses = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame() {
    this.guessCount = 0;
    this.original = Math.floor(Math.random() * 100 + 1);
    console.log(this.original);
    this.guess = null;
    this.deviation = null;
    this.gusses = [];
    this.disabled = false;
  }

  verifyGuess(value) {
    this.guess = value;
    this.gusses.push(this.guess);
    this.deviation = this.original - this.guess;
    this.guessCount++;
    this.setGameOver();
    if (this.guessCount === 10) {
      this.disabled = true;
    }
  }

  setGameOver() {
    if (this.guess == this.original) {
      this.disabled = true;
    }

  }
}
