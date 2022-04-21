import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { AgeComponent } from './age/age.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    AgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
