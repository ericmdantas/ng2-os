/// <reference path="../../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/angular2';

@Component({
  selector: 'terminal-cmp'
})
export class TerminalCmp implements OnInit {
  onInit() {
    console.log('terminal-cmp init');
  }
}
