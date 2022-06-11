import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetmoedasService {


moedasUrl="https://api.hgbrasil.com/finance";






  constructor(private http:HttpClient) { }

  


  listar(){

    return this.http.get<any[]>(`${this.moedasUrl}`,{headers:new HttpHeaders({ "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  
  })});


  
  }







}
