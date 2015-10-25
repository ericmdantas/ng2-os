/// <reference path="../../typings/tsd.d.ts" />

import {
  Component,
  Inject,
  OnInit
} from 'angular2/angular2';

export class BrowserToggler {
  visible: boolean = false;

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}

@Component({
  selector: 'browser-cmp',
  templateUrl: 'client/browser/browser.html',
  styleUrls: ['client/browser/browser.css']
})
export class BrowserCmp implements OnInit {
  constructor(@Inject(BrowserToggler) private browserToggler: BrowserToggler) {

  }

  onInit() {
    console.log('browser-cmp init');
  }
}
