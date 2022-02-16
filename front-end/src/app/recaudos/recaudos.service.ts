import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { recaudoDTO } from './recaudo';

@Injectable({
  providedIn: 'root'
})
export class RecaudosService {

  constructor(private http:HttpClient) { }

  private apiURL = environment.apiURL + 'recaudos';

  public ObtenerTodos(): Observable<recaudoDTO[]>{
    return this.http.get<recaudoDTO[]>(this.apiURL);
  }
}
