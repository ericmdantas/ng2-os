/// <reference path="../typings/tsd.d.ts" />

import {
  Component,
  Inject,
  OnInit
} from 'angular2/angular2';

import {
  RouteConfig,
  Route,
  Router,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {LoginCmp} from 'client/login/login_cmp.js';
import {DesktopCmp} from 'client/desktop/desktop_cmp.js';
import {WizardShortcutToggler} from 'client/wizard_shortcut/wizard_shortcut_cmp.js';
import {TerminalToggler} from 'client/terminal/terminal_cmp.js';

@Component({
  selector: 'os-cmp',
  templateUrl: 'client/os.html',
  styleUrls: ['client/os.css'],
  directives: [ROUTER_DIRECTIVES, LoginCmp, DesktopCmp],
  providers: [WizardShortcutToggler, TerminalToggler]
})
@RouteConfig([
  new Route({path: '/', component: LoginCmp, as: 'LoginCmp'}),
  new Route({path: '/desktop', component: DesktopCmp, as: 'DesktopCmp'})
])
export class OsCmp implements OnInit {
  constructor(@Inject(Router) private _router: Router) {

  }

  onInit() {
    console.log('os-cmp init');
  }
}
