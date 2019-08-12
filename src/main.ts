import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.

  if (environment.production) {
    enableProdMode();
  } 

  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

}).catch(err => console.error(err));
