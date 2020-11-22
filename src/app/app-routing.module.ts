import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ProductorComponent } from './pages/productor/productor.component';
import { TransportistaComponent } from './pages/transportista/transportista.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';


const routes: Routes = [
  { path: 'home'          , component: HomeComponent },
  { path: 'registro'      , component: RegistroComponent },
  { path: 'login'         , component: LoginComponent },
  { path: 'about'         , component: AboutComponent },
  { path: 'cliente'       , component: ClienteComponent, canActivate: [ AuthGuard ]  },
  { path: 'productor'     , component: ProductorComponent, canActivate: [ AuthGuard ] },
  { path: 'transportista' , component: TransportistaComponent,  canActivate: [ AuthGuard ] },
  { path: 'usuario/:id'   , component: UsuarioComponent, canActivate: [ AuthGuard ]},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
