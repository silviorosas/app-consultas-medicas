import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


getMedicos(){
  return this.http.get<any>(environment.productoURL2+"medicos")
}

buscarDescripcionPorDni(dni: string): Observable<string> {
  return this.http.get<string>(`${environment.productoURL2}pacientes/buscar-descripcion?dni=${dni}`);
}

obtenerIdPacientePorDni(dni: string): Observable<number> {
  return this.http.get<number>(`${environment.productoURL2}pacientes/obtener-id/${dni}`);
}
crearConsulta(descripcion: string, idPaciente: number, idMedico: number): Observable<any> {
  const body = {
    descripcion: descripcion,
    paciente: { id: idPaciente },
    medico: { id: idMedico }
  };
  return this.http.post(`${environment.productoURL2}consultas`, body);
}


}