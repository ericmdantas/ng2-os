/// <reference path="../../typings/tsd.d.ts" />

import {Component, Inject, OnInit} from 'angular2/angular2';

@Component({
  selector: 'browser-cmp',
  templateUrl: 'client/browser/browser.html',
  styleUrls: ['client/browser/browser.css']
})
export class BrowserCmp implements OnInit {
  constructor() {

  }

  onInit() {
    console.log('browser-cmp init');
  }
}
