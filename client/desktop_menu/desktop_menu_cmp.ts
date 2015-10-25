/// <reference path="../../typings/tsd.d.ts" />

import {
  Component,
  Inject,
  OnInit
} from 'angular2/angular2';

import {WizardShortcutToggler} from 'client/wizard_shortcut/wizard_shortcut_cmp.js';
import {TerminalToggler} from 'client/terminal/terminal_cmp.js';
import {BrowserToggler} from 'client/browser/browser_cmp.js';

@Component({
  selector: 'desktop-menu-cmp',
  templateUrl: 'client/desktop_menu/desktop_menu.html',
  styleUrls: ['client/desktop_menu/desktop_menu.css']
})
export class DesktopMenuCmp implements OnInit {
  constructor(@Inject(WizardShortcutToggler) public wizardShortcutToggler: WizardShortcutToggler,
              @Inject(TerminalToggler) public terminalToggler: TerminalToggler,
              @Inject(BrowserToggler) public browserToggler: BrowserToggler) {

  }

  onInit() {
      console.log('desktop-menu init');
  }

  showWizardHandler() {
    this.wizardShortcutToggler.show();
    this.terminalToggler.hide();
  }

  showTerminalHandler() {
    this.terminalToggler.show();
    this.wizardShortcutToggler.hide();
  }

  showBrowserHandler() {
    this.browserToggler.show();
    this.wizardShortcutToggler.hide();
  }
}
