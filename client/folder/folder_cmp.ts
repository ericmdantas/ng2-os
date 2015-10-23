/// <reference path="../../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/angular2';

@Component({
  selector: 'folder-cmp',
  templateUrl: 'client/folder/folder.html',
  styleUrls: ['client/folder/folder.css']
})
export class FolderCmp implements OnInit {
  onInit() {
    console.log('folder init');
  }
}
