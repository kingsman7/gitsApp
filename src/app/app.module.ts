import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from'@angular/common/http'

import { AppComponent } from './app.component';
//Modulos personalizados 
import { ShareModule } from './share/share.module';
import { GitsModule } from './gits/gits.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ShareModule,
    GitsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
