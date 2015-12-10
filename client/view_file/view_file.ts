import {
  Component,
  OnInit
} from 'angular2/core';

@Component({
  selector: 'view-file-cmp'
})
export class ViewFileCmp implements OnInit {
  ngOnInit() {
    console.log('view-file-cmp init');
  }
}
