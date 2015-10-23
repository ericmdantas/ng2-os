/// <reference path="../../typings/tsd.d.ts" />

import {
  Component,
  Inject,
  OnInit
} from 'angular2/angular2';

import {DesktopMenuCmp} from 'client/desktop_menu/desktop_menu_cmp.js';
import {WizardShortcutCmp, WizardShortcutToggler} from 'client/wizard_shortcut/wizard_shortcut_cmp.js';

@Component({
  selector: 'desktop-cmp',
  templateUrl: 'client/desktop/desktop.html',
  styleUrls: ['client/desktop/desktop.css'],
  directives: [DesktopMenuCmp, WizardShortcutCmp]
})
export class DesktopCmp implements OnInit {
  constructor(@Inject(WizardShortcutToggler) private _wizardShortcutToggler: WizardShortcutToggler) {

  }

  onInit() {
    console.log('desktop init');
  }

  showWizardHandler() {
    this._wizardShortcutToggler.show();
  }
}
