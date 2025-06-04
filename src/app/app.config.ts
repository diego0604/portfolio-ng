import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { RippleModule } from 'primeng/ripple';

export const appConfig = {
  providers: [
    importProvidersFrom(RippleModule),
    provideAnimations()
  ]
};