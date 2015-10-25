/// <reference path="../../typings/tsd.d.ts" />

import {
  Component,
  Inject,
  OnInit
} from 'angular2/angular2';

import {DesktopMenuCmp} from 'client/desktop_menu/desktop_menu_cmp.js';
import {WizardShortcutCmp, WizardShortcutToggler} from 'client/wizard_shortcut/wizard_shortcut_cmp.js';
import {TerminalCmp, TerminalToggler} from 'client/terminal/terminal_cmp.js';

@Component({
  selector: 'desktop-cmp',
  templateUrl: 'client/desktop/desktop.html',
  styleUrls: ['client/desktop/desktop.css'],
  directives: [DesktopMenuCmp, WizardShortcutCmp, TerminalCmp]
})
export class DesktopCmp implements OnInit {
  constructor(@Inject(WizardShortcutToggler) private _wizardShortcutToggler: WizardShortcutToggler,
              @Inject(TerminalToggler) private _terminalToggler: TerminalToggler) {

  }

  onInit() {
    console.log('desktop init');
  }

  showWizardHandler() {
    this._wizardShortcutToggler.show();
  }

  showTerminalHandler() {
    this._terminalToggler.show();
  }
}
