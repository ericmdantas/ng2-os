/// <reference path="../../typings/tsd.d.ts" />

import {
  Component,
  OnInit
} from 'angular2/angular2';

@Component({
  selector: 'icon-cmp',
  templateUrl: 'client/icon/icon.html',
  styleUrls: ['client/icon/icon.css']
})
export class IconCmp implements OnInit {
  name: string = 'pluto.png';

  onInit() {
    console.log('icon-cmp init');
  }
}
