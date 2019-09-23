import { Component, OnInit } from '@angular/core';
import {MinesweepService} from './../services/minesweep.service';
@Component({
  selector: 'app-minesweep',
  templateUrl: './minesweep.component.html',
  styleUrls: ['./minesweep.component.css']
})
export class MinesweepComponent implements OnInit {

  constructor(public minesweepService: MinesweepService) { }

  ngOnInit() {
  }
  onStart(data): void{
    this.minesweepService.sendData(data);

  }

}
