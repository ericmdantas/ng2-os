/// <reference path="../../typings/tsd.d.ts" />

export type BrowserFavStore = {
  name: string;
  bkg: string;
}

export class BrowserFavouritesStore {
  sites: BrowserFavStore[] = [
    {name: 'google', bkg: 'something.jpg'}
  ]

  constructor() {
    for (let i = 0; i < 101; i++) {
      this.sites.push(this.sites[0])
    }
  }
}
