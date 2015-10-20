/// <reference path="../../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/angular2';

@Component({
  selector: 'file-cmp'
})
export class FileCmp implements OnInit {
  onInit() {
    console.log('file-cmp init');
  }
}
