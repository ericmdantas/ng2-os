/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/angular2';

@Component({
  selector: 'os-cmp',
  templateUrl: 'client/os.html',
  styleUrls: ['client/os.css']
})
export class OsCmp {
  name: string = 'os-cmp'
}
