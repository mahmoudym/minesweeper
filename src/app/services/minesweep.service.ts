import { Injectable } from '@angular/core';
import { Http, Headers,URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MinesweepService {
  public start = new Subject<any>();
  constructor(private http:Http) {}

  sendData(data:any){
  let urlSearchParams = new URLSearchParams();
  urlSearchParams.append('length', data.length);
  urlSearchParams.append('width', data.width);
  urlSearchParams.append('bombs', data.bombs);
  let body = urlSearchParams.toString();
  let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  return this.http.post('http://localhost:8000/params', body , {headers:headers}).map(res => res.json()).subscribe(
    data => this.start.next(data)
  );
  }
/*
  onLose(){
  return this.http.get('http://localhost:8000/lose').map(res => res.json()).subscribe(
   data => console.log(data);
  )
  }
  onWin(){
  return this.http.get('http://localhost:8000/win').map(res => res.json()).subscribe(
   data => console.log(data);
  )
  }
  */

}
