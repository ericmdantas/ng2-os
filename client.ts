import {
  ROUTER_PROVIDERS
} from 'angular2/router';

import {bootstrap} from 'angular2/platform/browser';
import {OsCmp} from 'client/os_cmp.js';

bootstrap(OsCmp, [ROUTER_PROVIDERS]);
