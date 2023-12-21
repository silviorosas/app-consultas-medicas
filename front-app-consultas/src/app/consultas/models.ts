// consulta.model.ts
export interface Consulta {
  id: number;
  descripcion: string;
  paciente: Paciente;
  medico: Medico;
}

export interface Paciente {
  id: number;
  nombre: string;
  apellido: string;
  dni:string;
  consulta:Consulta[];
}

export interface Medico {
  id: number;
  nombre: string;
  especialidad: string;
}
