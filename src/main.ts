import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TimeAppComponent } from './app/time-app/time-app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(TimeAppComponent);

  bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // ✅ Provide HttpClient here
});