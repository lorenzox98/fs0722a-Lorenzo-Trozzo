import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SecondoComponentComponent } from './secondo-component/secondo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SecondoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
