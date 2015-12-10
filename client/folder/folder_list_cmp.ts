import {
  Component,
  OnInit
} from 'angular2/core';

import {FolderCmp} from 'client/folder/folder_cmp.js';

@Component({
  selector: 'folder-list-cmp',
  template: `
    <folder-cmp [folderName]=" 'folder_1' "></folder-cmp>
    <folder-cmp [folderName]=" 'folder_2' "></folder-cmp>
    <folder-cmp [folderName]=" 'folder_3' "></folder-cmp>
  `,
  directives: [FolderCmp]
})
export class FolderListCmp implements OnInit {
  constructor() {

  }

  ngOnInit() {
    console.log('folder-list-cmp init');
  }
}
