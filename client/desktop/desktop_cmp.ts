/// <reference path="../../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/angular2';

@Component({
  selector: 'desktop-cmp',
  templateUrl: 'client/desktop/desktop.html',
  styleUrls: ['client/desktop/desktop.css']
})
export class DesktopCmp implements OnInit {
  constructor() {

  }

  onInit() {
    console.log('desktop init');
  }
}
