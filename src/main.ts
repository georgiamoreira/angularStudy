import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LikeComponent } from '../src/app/like.component';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  let component = new LikeComponent(10, true);
  component.onClick();
  console.log(`likesCount: ${component.likesCount}, isSlected: ${component.isSelected}`);
