import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../pages/models/usuario.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://login-feria-virtual.firebaseio.com';

  constructor( private http: HttpClient ) { }

  crearUsuario( usuario: UsuarioModel ) {
    return this.http.post(`${ this.url }/usuario.json`, usuario )
        .pipe(
          map( (resp: any) => {
            usuario.id = resp.name;
            return usuario;
          })
        );
  }

  actualizarUsuario( usuario: UsuarioModel ) {

    const usuarioTemp = {
      ...usuario
    };

    delete usuarioTemp.id;

    return this.http.put(`${ this.url }/ususario/${ usuario.id }.json`, usuarioTemp);
  }

  borrarUsuario( id: string ) {
    return this.http.delete( `${ this.url }/usuario/${ id }.json` );
  }

  getUsuarios( id: string ) {
    return this.http.get(`${ this.url }/usuario/${ id }.json`);
  }

  getUsuario() {
    return this.http.get(`${ this.url }/usuario.json`)
        .pipe(
          map( resp => this.crearArreglo(resp)),
          delay(10)
        );
  }

  private crearArreglo( usuarioObj: object) {
    const usuarios: UsuarioModel[] = [];
    if ( usuarioObj === null ) { return []; }

    Object.keys( usuarioObj ).forEach( key => {
      const usuario: UsuarioModel = usuarioObj[key];
      usuario.id = key;

      usuarios.push( usuario);
    });

    return usuarios;
  }


}
