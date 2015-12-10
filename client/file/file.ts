import {
  Component,
  OnInit
} from 'angular2/core';

@Component({
  selector: 'file-cmp'
})
export class FileCmp implements OnInit {
  ngOnInit() {
    console.log('file-cmp init');
  }
}
