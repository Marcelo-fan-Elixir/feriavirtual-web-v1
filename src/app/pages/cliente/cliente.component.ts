import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../models/usuario.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: UsuarioModel[] = [];
  cargando = false;

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.cargando = true;
    this.usuarioService.getUsuario()
      .subscribe( resp => {
      console.log(resp); // conlos.log es sólo para validar por consola
      this.cliente = resp;
      this.cargando = false;
    });
  }

  borrarUsuario( usuario: UsuarioModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ usuario.nombreUsuario }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if ( resp.value ) {
        this.cliente.splice(i, 1);
        this.usuarioService.borrarUsuario( usuario.id ).subscribe();
      }
    });

  }

}
