import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../pages/models/usuario.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:8081/v1/usuario';

  constructor( private http: HttpClient ) { }

  crearUsuario( usuario: UsuarioModel ) {
    return this.http.post(`${ this.url }`, usuario )
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

  borrarUsuario( id: number ) {
    return this.http.delete( `${ this.url }/${ id }` );
  }

  getUsuarios( id: string ) {
    return this.http.get(`${ this.url }/usuario/${ id }.json`);
  }

  getUsuario() {
    return this.http.get(`${ this.url }`)
        .pipe(
          map( resp => this.crearArreglo(resp)),
          delay(50)
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
