import { createApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createCustomElement } from '@angular/elements';
import { InputComponent } from './app/ui/input/input.component';
import { ButtonComponent } from './app/ui/button/button.component';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // (async () => {
  //   const app = await createApplication({
  //     providers:[]
  //   });

  //   const inputElement = createCustomElement(ButtonComponent,{
  //     injector : app.injector,
  //   });
    
  //   customElements.define('dbs-click', inputElement)

  //   const ButtonElement= createCustomElement(InputComponent,{
  //     injector : app.injector,
  //   });
    
  //   customElements.define('dbs-text', ButtonElement)

  // })()
