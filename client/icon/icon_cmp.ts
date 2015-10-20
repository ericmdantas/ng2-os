/// <reference path="../../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/angular2';

@Component({
  selector: 'icon-cmp'
})
export class IconCmp implements OnInit {
  onInit() {
    console.log('icon-cmp init');
  }
}
