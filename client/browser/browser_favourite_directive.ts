import {
  Directive,
  Input,
  OnInit
} from 'angular2/angular2';

import {BrowserFavStore} from 'client/browser/browser_fav_store.js';

@Directive({
  selector: '[fav]',
  host: {
    '(click)': 'clickHandler()',
  }
})
export class FavDirective implements OnInit {
  @Input('el') el: BrowserFavStore;

  ngOnInit() {
    console.log('fav init');
  }

  clickHandler() {
    console.log(this.el);
  }
}
