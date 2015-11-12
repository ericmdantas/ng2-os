/// <reference path="../../typings/tsd.d.ts" />

import {
  Component,
  Inject,
  NgFor,
  OnInit
} from 'angular2/angular2';

import {BrowserFavouritesStore} from 'client/browser/browser_fav_store.js';
import {FavDirective} from 'client/browser/browser_favourite_directive.js';

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
  styleUrls: ['client/browser/browser.css'],
  providers: [BrowserFavouritesStore],
  directives: [NgFor, FavDirective]
})
export class BrowserCmp implements OnInit {
  constructor(@Inject(BrowserToggler) public browserToggler: BrowserToggler,
              @Inject(BrowserFavouritesStore) public browserFavouritesStore: BrowserFavouritesStore) {

  }

  onInit() {
    console.log('browser-cmp init');
  }
}
