import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { SendEmailComponent } from './changepassword/send-email.component';
import { ChangePasswordComponent } from './changepassword/change-password.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './consultas/home/home.component';
import { FooterComponent } from './consultas/footer/footer.component';
import { LoginConsultasComponent } from './consultas/login-consultas/login-consultas.component';
import { RegisterConsultasComponent } from './consultas/register-consultas/register-consultas.component';
import { StartConsultasComponent } from './consultas/start-consultas/start-consultas.component';
import { DasboardComponent } from './consultas/dasboard/dasboard.component';
import { CrearConsultasComponent } from './consultas/crear-consultas/crear-consultas.component';






@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    SendEmailComponent,
    ChangePasswordComponent,
    HomeComponent,
    FooterComponent,
    LoginConsultasComponent,
    RegisterConsultasComponent,
    StartConsultasComponent,
    DasboardComponent,
    CrearConsultasComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
