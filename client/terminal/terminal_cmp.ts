/// <reference path="../../typings/tsd.d.ts" />

import {Component, Inject, OnInit} from 'angular2/angular2';

export class TerminalToggler {
  visible: boolean = false;

  show():void {
    this.visible = true;
  }

  hide():void {
    this.visible = false;
  }
}

@Component({
  selector: 'terminal-cmp',
  templateUrl: 'client/terminal/terminal.html',
  styleUrls: ['client/terminal/terminal.css']
})
export class TerminalCmp implements OnInit {
  constructor(@Inject(TerminalToggler) public terminalToggler: TerminalToggler) {

  }

  onInit() {
    console.log('terminal-cmp init');
  }
}
