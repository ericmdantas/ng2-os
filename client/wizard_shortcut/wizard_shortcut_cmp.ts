import {
  Component,
  Inject,
  OnInit
} from 'angular2/core';

export class WizardShortcutToggler {
  visible: boolean = false;

  show():void {
    this.visible = true;
  }

  hide():void {
    this.visible = false;
  }
}

@Component({
  selector: 'wizard-shortcut-cmp',
  templateUrl: 'client/wizard_shortcut/wizard_shortcut.html',
  styleUrls: ['client/wizard_shortcut/wizard_shortcut.css']
})
export class WizardShortcutCmp implements OnInit {
  constructor(@Inject(WizardShortcutToggler) public wizardShortcutToggler: WizardShortcutToggler) {

  }

  ngOnInit() {
    console.log('wizard-shortcut-cmp init');
  }

  hideHandler() {
    this.wizardShortcutToggler.hide();
  }

  showHandler() {
    this.wizardShortcutToggler.show();
  }
}
