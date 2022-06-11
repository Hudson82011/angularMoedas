import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetmoedasService {


moedasUrl="https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";






  constructor(private http:HttpClient) { }

  


  listar(){

    var ret=this.http.get<any[]>(`${this.moedasUrl}`,{headers:new HttpHeaders({ "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization",
    "Content-Type":"application/json"
  
  })});
  

  ret.forEach(element => {
    console.log(element);
  });

  return ret;

  
  }







}
