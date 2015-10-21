/// <reference path="typings/tsd.d.ts" />

import {
  ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';

import {bootstrap, provide} from 'angular2/angular2';
import {OsCmp} from 'client/os_cmp.js';

bootstrap(OsCmp, [ROUTER_PROVIDERS]);
