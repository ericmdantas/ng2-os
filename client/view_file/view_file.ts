/// <reference path="../../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/angular2';

@Component({
  selector: 'view-file-cmp'
})
export class ViewFileCmp implements OnInit {
  onInit() {
    console.log('view-file-cmp init');
  }
}
