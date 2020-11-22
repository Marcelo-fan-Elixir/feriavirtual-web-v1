import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { ClienteService } from './services/cliente.service';


// componentes
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductorComponent } from './pages/productor/productor.component';
import { TransportistaComponent } from './pages/transportista/transportista.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    AboutComponent,
    ProductorComponent,
    TransportistaComponent,
    ClienteComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
