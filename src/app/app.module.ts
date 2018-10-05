import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';//Grab heroes.component.html

//Default initializers
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [ //Apply class tools that are imported
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
