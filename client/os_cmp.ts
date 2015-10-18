/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/angular2';
import {LoginCmp} from 'client/login/login_cmp.js';

@Component({
  selector: 'os-cmp',
  templateUrl: 'client/os.html',
  styleUrls: ['client/os.css'],
  directives: [LoginCmp]
})
export class OsCmp {
  name: string = 'os-cmp'
}
