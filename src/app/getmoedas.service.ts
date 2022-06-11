import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Moeda } from './moeda';

@Injectable({
  providedIn: 'root'
})
export class GetmoedasService {


moedasUrl="https://api.hgbrasil.com/finance?format=json-cors";






  constructor(private http:HttpClient) { }

  


  listar(){
    
    var ret=this.http.get(`${this.moedasUrl}`);


    return ret;


  
  }







}
