import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { ServiceService } from '../service.service';
import { Medico } from '../models';

@Component({
  selector: 'app-crear-consultas',
  templateUrl: './crear-consultas.component.html',
  styleUrls: ['./crear-consultas.component.css']
})
export class CrearConsultasComponent implements OnInit {
  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  errMsj!: string;
  consultaForm!: FormGroup;
  medicos:Medico[]=[]


  constructor(private formBuilder:FormBuilder, private service:ServiceService) {
    this.consultaForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      dniPaciente: ['', Validators.required],
      idMedico: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.getMedicos()
  }

  getMedicos(){
    this.service.getMedicos()
    .subscribe((data:any)=>{
      this.medicos=data;
      console.log("Get médicos desde back:",data)
  })  
  }


  crearConsultaDni(){
    if (this.consultaForm.valid) {
      const { descripcion, dniPaciente, idMedico } = this.consultaForm.value;
      
      // Llamar al método buscarIdPorDNI para obtener el ID del paciente
      this.service.obtenerIdPacientePorDni(dniPaciente).subscribe(
        (idPaciente: number) => {
          this.service.crearConsulta(descripcion, idPaciente, idMedico).subscribe(
            () => {              
              this.consultaForm.reset();
              alert("Consulta creada")
            },
            (error) => {
              console.error('Error al crear consulta:', error);
            }
          );
        },
        (error) => {
          console.error('Error al buscar ID por DNI:', error);
        }
      );
    }
  }

}
