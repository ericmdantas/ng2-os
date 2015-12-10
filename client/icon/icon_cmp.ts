import {
  Component,
  OnInit
} from 'angular2/core';

@Component({
  selector: 'icon-cmp',
  templateUrl: 'client/icon/icon.html',
  styleUrls: ['client/icon/icon.css']
})
export class IconCmp implements OnInit {
  name: string = 'pluto.png';

  ngOnInit() {
    console.log('icon-cmp init');
  }
}
