import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';



@NgModule({
  declarations: [
    CardProdutoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[CardProdutoComponent]
})
export class SharedModule { }
