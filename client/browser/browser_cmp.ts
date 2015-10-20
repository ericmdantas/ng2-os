/// <reference path="../../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/angular2';

@Component({
  selector: 'browser-cmp'
})
export class BrowserCmp implements OnInit {
  onInit() {
    console.log('browser-cmp init');
  }
}
