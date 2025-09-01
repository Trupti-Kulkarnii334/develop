import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app/app';
import { provideZoneChangeDetection } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    provideZoneChangeDetection(),
    provideAnimations()
  ]
}).catch(err => console.error(err));
