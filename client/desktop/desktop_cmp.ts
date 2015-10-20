/// <reference path="../../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/angular2';

@Component({
  selector: 'desktop-cmp'
})
export class DesktopCmp implements OnInit {
  constructor() {
    
  }

  onInit() {
    console.log('desktop init');
  }
}
