import {
  Component,
  Inject,
  OnInit
} from 'angular2/core';

import {DesktopMenuCmp} from 'client/desktop_menu/desktop_menu_cmp.js';
import {WizardShortcutCmp, WizardShortcutToggler} from 'client/wizard_shortcut/wizard_shortcut_cmp.js';
import {TerminalCmp, TerminalToggler} from 'client/terminal/terminal_cmp.js';
import {FolderListCmp} from 'client/folder/folder_list_cmp.js';
import {IconCmp} from 'client/icon/icon_cmp.js';
import {BrowserCmp, BrowserToggler} from 'client/browser/browser_cmp.js';

@Component({
  selector: 'desktop-cmp',
  templateUrl: 'client/desktop/desktop.html',
  styleUrls: ['client/desktop/desktop.css'],
  directives: [DesktopMenuCmp, WizardShortcutCmp, TerminalCmp,
               FolderListCmp, IconCmp, BrowserCmp]
})
export class DesktopCmp implements OnInit {
  constructor(@Inject(WizardShortcutToggler) private _wizardShortcutToggler: WizardShortcutToggler,
              @Inject(TerminalToggler) private _terminalToggler: TerminalToggler,
              @Inject(BrowserToggler) private _browserToggler: BrowserToggler) {

  }

  ngOnInit() {
    console.log('desktop init');
  }

  showWizardHandler() {
    this._wizardShortcutToggler.show();
  }

  showTerminalHandler() {
    this._terminalToggler.show();
  }

  showBrowserHandler() {
    this._browserToggler.show();
  }
}
