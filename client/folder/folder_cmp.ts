import {
  Component,
  OnInit
} from 'angular2/core';

@Component({
  selector: 'folder-cmp',
  properties: ['folderName'],
  templateUrl: 'client/folder/folder.html',
  styleUrls: ['client/folder/folder.css']
})
export class FolderCmp implements OnInit {
  closed: boolean = true;

  ngOnInit() {
    console.log('folder init');
  }

  openFolder() {
    this.closed = false;
  }

  closeFolder() {
    this.closed = true;
  }
}
