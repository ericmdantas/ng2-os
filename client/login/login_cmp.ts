import {
  Component,
  EventEmitter,
  Inject,
  OnInit
} from 'angular2/core';

import {
  FormBuilder,
  Validators,
  ControlGroup,
  Control
} from 'angular2/common';

import {Router} from 'angular2/router';
import {User} from 'client/user/user.js';

@Component({
  selector: 'login-cmp',
  providers: [User],
  templateUrl: 'client/login/login.html',
  styleUrls: ['client/login/login.css'],
  outputs: ['loginOk']
})
export class LoginCmp implements OnInit {
    loginOk: EventEmitter<any> = new EventEmitter();
    loginForm: ControlGroup;

    constructor(@Inject(FormBuilder) public fb: FormBuilder,
                @Inject(User) public user: User,
                @Inject(Router) private _router: Router) {

      this.loginForm = fb.group({
        "user": [this.user.name, Validators.required]
      });
    }

    ngOnInit() {
      console.log('login-cmp ok');
    }

    login(user: string) {
      this._router.navigateByUrl('/desktop');
    }

    escHandler() {
      (<Control>this.loginForm.controls["user"]).updateValue("");
    }
}
