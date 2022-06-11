import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GetmoedasService } from '../getmoedas.service';

@Component({
  selector: 'app-moedas-listagem',
  templateUrl: './moedas-listagem.component.html',
  styleUrls: ['./moedas-listagem.component.css']
})
export class MoedasListagemComponent implements OnInit {

  /*moedas=[
    {id:1,nome:"dolar",valor:4.90},
    {id:2,nome:"Euro",valor:5.80},
    {id:3,nome:"Real",valor:0.90},
  ]*/

  moedas!: Array<any>;

  constructor(private getmoeda:GetmoedasService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){

    this.getmoeda.listar().subscribe((dados) => {
        this.moedas = dados;
    });

  }

}
