/// <reference path="typings/angular2/angular2.d.ts" />
import {
  Component,
  NgFor,
  View,
  bootstrap,
} from "angular2/angular2";

//import { Mytext } from './lib/mytext';

@Component({
  selector: 'hello-world'
})
@View({
  directives: [NgFor],
  template: `
  <ul>
  <li *ng-for="#name of names">Hello {{name}}</li>
  </ul>
  `
})
class Hello {
  names: Array<string>;
  
  constructor(){
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }
}

bootstrap(Hello);