import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FooterComponent } from './components/footer/footer.component';
import { Btn1Component } from './components/buttons/btn1/btn1.component';
import { Btn2Component } from './components/buttons/btn2/btn2.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent, 
    FooterComponent,
    Btn1Component,
    Btn2Component,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
