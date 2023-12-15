import { ChangePasswordComponent } from './changepassword/change-password.component';
import { SendEmailComponent } from './changepassword/send-email.component';
import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';

import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService } from './guards/prod-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './consultas/home/home.component';
import { LoginConsultasComponent } from './consultas/login-consultas/login-consultas.component';
import { RegisterConsultasComponent } from './consultas/register-consultas/register-consultas.component';
import { StartConsultasComponent } from './consultas/start-consultas/start-consultas.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: 'sendemail', component: SendEmailComponent, canActivate: [LoginGuard] },
  { path: 'change-password/:tokenPassword', component: ChangePasswordComponent, canActivate: [LoginGuard] },  
  { path: 'lista', component: ListaProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  

  { path: 'home-consultas', component:HomeComponent, canActivate: [LoginGuard] },
  { path: 'login-consultas', component:LoginConsultasComponent, canActivate: [LoginGuard] },
  { path: 'register-consultas', component:RegisterConsultasComponent, canActivate: [LoginGuard] },
  { path: 'start-consultas', component:StartConsultasComponent, canActivate: [LoginGuard] },
  
  
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
