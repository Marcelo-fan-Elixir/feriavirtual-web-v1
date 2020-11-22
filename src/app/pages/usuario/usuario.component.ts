import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../models/usuario.model';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private usuarioService: UsuarioService,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {
      this.usuarioService.getUsuarios( id )
          .subscribe( (resp: UsuarioModel) => {
            this.usuario = resp;
            this.usuario.id = id;
          });
    }
  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Espere!',
      text: 'Guardando información...',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if ( this.usuario.id ) {
      peticion = this.usuarioService.actualizarUsuario( this.usuario );
    } else {
        peticion = this.usuarioService.crearUsuario( this.usuario );
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.usuario.nombre,
        text: 'Se actualizó correctamente!',
        icon: 'success'
      });
    });

  }

}
