import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UsuarioListar } from '../models/Usuario';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { ListenOptions } from 'net';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  criarUsuario(usuario: UsuarioListar) {
    throw new Error('Method not implemented.');
  }

  ApiUrl = environment.UrlApi;

  constructor(private http : HttpClient) { }

  GetUsuarios(): Observable<Response<UsuarioListar[]>>{
    return this.http.get<Response<UsuarioListar[]>>(this.ApiUrl);
  }

  DeletarUsuarios(id:number | undefined) : Observable<Response<UsuarioListar[]>>{
    return this.http.delete<Response<UsuarioListar[]>>(`${this.ApiUrl}?usuarioId=${id}`);
  }

  CriarUsuario(usuario: UsuarioListar) : Observable<Response<UsuarioListar[]>>{
    return this.http.post<Response<UsuarioListar[]>>(this.ApiUrl,usuario);
  }

  GetUsuarioId(id:number):Observable<Response<UsuarioListar>>{
    return this.http.get<Response<UsuarioListar>>(`${this.ApiUrl}/${id}`);
  }

  EditarUsuario(usuario: UsuarioListar):Observable<Response<UsuarioListar[]>>{
    return this.http.put<Response<UsuarioListar[]>>(this.ApiUrl,usuario);
  }

}
