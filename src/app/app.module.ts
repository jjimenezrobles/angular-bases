import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { counterModules } from './contador/counter.module';
import { HeroesModules } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    counterModules,
    HeroesModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
