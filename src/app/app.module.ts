import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoedasListagemComponent } from './moedas-listagem/moedas-listagem.component';
import { GetmoedasService } from './getmoedas.service';


@NgModule({
  declarations: [
    AppComponent,
    MoedasListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetmoedasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
