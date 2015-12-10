import {
  Component,
  Inject,
  OnInit
} from 'angular2/core';

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
  directives: [FavDirective]
})
export class BrowserCmp implements OnInit {
  constructor(@Inject(BrowserToggler) public browserToggler: BrowserToggler,
              @Inject(BrowserFavouritesStore) public browserFavouritesStore: BrowserFavouritesStore) {

  }

  ngOnInit() {
    console.log('browser-cmp init');
  }
}
