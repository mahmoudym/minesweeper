import { Component, OnInit } from '@angular/core';
import {MinesweepService} from './../services/minesweep.service';

@Component({
  selector: 'app-minebuttons',
  templateUrl: './minebuttons.component.html',
  styleUrls: ['./minebuttons.component.css']
})
export class MinebuttonsComponent implements OnInit {
  private tiles:Array<any>;
  private width:number =0;
  private length:number = 0;
  private bombs:number =0;
  private counter:number =0;
  start = false;
  constructor(private minesweepService:MinesweepService) { }

  ngOnInit() {
  this.start = true;
    this.minesweepService.start.subscribe(
    data => (this.tiles = data.map,
    this.bombs = data.bombs,
    this.length = data.length,
    this.width = data.width)

    )
  }
  click(i,j,element){
    console.log(this.tiles[i][j]);
    element.textContent = this.tiles[i][j];
    element.disabled = true;
    if(this.tiles[i][j]==="bomb"){
      console.log("you lose");
    }else if(((this.length * this.width)- this.bombs - this.counter)==0){
      console.log("you win");
    }else{
      this.counter++;
    }
  }

}
