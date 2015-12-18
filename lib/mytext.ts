/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View} from "angular2/angular2";

@Component({selector: 'mytext'})
@View({
    template:`
		    <label for="search-string">Search for an artist</label>    
        <input #searchvalue (keyup)="searchArtist($event, searchvalue.value)"/>
    ` 
})
export class Mytext {
  timeoutId: number;
  constructor(){
    this.timeoutId=0;
  }
  searchArtist($event, value){
    this.timeoutId=10;
  }
}
