/*function Consultorio (nombre, paciente){
  this._nombre = nombre;
  this._paciente = paciente || [];
}

function Paciente (nombre, edad = 0, rut = 0, diagnostico){
  this._nombre = nombre;
  this._edad = edad;
  this._rut = rut;
  this._diagnostico = diagnostico;
}

Consultorio.prototype.getNombre = function (){
  return this._nombre;
}
Consultorio.prototype.setNombre = function (nuevoNombre){
  this._nombre = nuevoNombre;
}

Paciente.prototype.getNombre = function (){
  return this._nombre;
}
Paciente.prototype.setNommbre = function (nuevoNombreP){
  this._nombre = nuevoNombre;
}
Paciente.prototype.getEdad = function (){
  return this._edad;
}
Paciente.prototype.setEdad = function (nuevaEdad){
  this._edad = nuevaEdad;
}
Paciente.prototype.getRut = function (){
  return this._rut;
}
Paciente.prototype.setRut = function (nuevoRut){
  this._rut = nuevoRut;
}
Paciente.prototype.getDiagnostico = function (){
  return this._diagnostico;
}
Paciente.prototype.setDiagnostico = function (nuevoDiagnostico){
  this._diagnostico = nuevoDiagnostico;
}

Consultorio.prototype.agregarPaciente = function (pacienteFinal){
  this._paciente.push(pacienteFinal);
}

Consultorio.prototype.getPacientes = function (){
  this._paciente.forEach(function(element, index){
    console.log("-------");
    console.log("Nombre "+index);
    console.log("Edad: "+element._edad);
    console.log("Rut: "+element._rut);
    console.log("Diagnostico: "+element._diagnostico);
  });
}
Consultorio.prototype.getPacientesIngresado = function (nombreTerminado){
  this._paciente.forEach(function(element, index){
    console.log("-------");
    if (element._nombre == nombreTerminado){
      console.log("Paciente número: "+(index+1));
      console.log("Nombre: "+element._nombre);
      console.log("Edad: "+element._edad);
      console.log("RUT: "+element._rut);
      console.log("Diagnostico: "+element._diagnostico);
    }
  });
}

let paciente1 = new Paciente ("Diego Abarca", 28, 18247336-8, "Epilepsia");
let paciente2 = new Paciente ("Humberto Cardenas", 63, 09546221-9, "Cronico")
let consultorio1 = new Consultorio ("Dr. Mario Marakus", [paciente1], [paciente2]);
console.log(paciente1.getNombre());
console.log(paciente1.getEdad());
console.log(paciente1.getRut());
console.log(paciente1.getDiagnostico());

consultorio1.getNombre();*/



