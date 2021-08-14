import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListPlayer } from '../interfaces/playerAPI';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  url:string = "https://daniel-client-server.herokuapp.com/";

  constructor(private http:HttpClient) { }

  getAllPlayers(page:number):Observable<ListPlayer[]>{
    let direccion = this.url + "users?page=" + page;
    return this.http.get<ListPlayer[]>(direccion);

  }
  
  getSinglePlayer(id):Observable<ListPlayer>
  {
    let direccion = this.url + "users/" + id;
    return this.http.get<ListPlayer>(direccion);
  }


  postPlayer(form:ListPlayer):Observable<Response>{
    let direccion = this.url + "users/";
    return this.http.post<Response>(direccion, form);
  }
}