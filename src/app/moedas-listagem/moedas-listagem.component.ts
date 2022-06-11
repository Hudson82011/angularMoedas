import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GetmoedasService } from '../getmoedas.service';

@Component({
  selector: 'app-moedas-listagem',
  templateUrl: './moedas-listagem.component.html',
  styleUrls: ['./moedas-listagem.component.css'],
})
export class MoedasListagemComponent implements OnInit {

  /*moedas=[
    {id:1,nome:"dolar",valor:4.90},
    {id:2,nome:"Euro",valor:5.80},
    {id:3,nome:"Real",valor:0.90},
  ]*/

  dolar:number=0;
  euro:number=0;

  public input:number=1;

  public valor:number=1;

  constructor(private getmoeda:GetmoedasService) { }

  ngOnInit(): void {
  
    this.listar();
  }

  listar(){

    this.getmoeda.listar().subscribe((dados:any) => {

     


      this.dolar=dados["results"]["currencies"]["USD"]["buy"];
       this.euro=dados["results"]["currencies"]["EUR"]["buy"];

       console.log(this.dolar);
       console.log(this.euro);
        
    });

   
  }


  euroConv(){
   
    console.log(this.input);
    this.valor=this.input;

   this.valor=this.valor*this.euro;

  

   console.log(this.valor);
  }

  dolaConv(){
    this.valor=this.input;

    this.valor=this.valor*this.dolar;
 
   
 
    console.log(this.valor);
   }


}
