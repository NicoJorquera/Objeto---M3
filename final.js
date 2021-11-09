function Consultorio (nombre, paciente){
    this._nombre = nombre;
    this._paciente = paciente || [];
  }
  
  function Paciente (nombreP, edad = 0, rut, diagnostico){
    this._nombreP = nombreP;
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
    return this._nombreP;
  }
  Paciente.prototype.setNommbre = function (nuevoNombreP){
    this._nombre = nuevoNombreP;
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
      //console.log("Paciente número: "+(index+1));
      console.log("Dr: "+element._nombre);
      console.log("Nombre: "+element._nombreP);
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
        console.log("Nombre: "+element._nombreP);
        console.log("Edad: "+element._edad);
        console.log("RUT: "+element._rut);
        console.log("Diagnostico: "+element._diagnostico);
      }
    });
  }
  
  let paciente1 = new Paciente ("Diego Abarca", 28, "18.247.336-8", "Epilepsia");
  let paciente2 = new Paciente ("Humberto Cardenas", 63, "09.546.221-9", "Cronico");
  let paciente3 = new Paciente ("Alicia Perez", 75, "13.569.227-2", "Diabetes mellitus tipo II");
  let paciente4 = new Paciente ("Juan Delgado", 84, "09.471.634-4", "Ninguna");
  let paciente5 = new Paciente ("Scarlett Cuevas", 22, "19.155.569-k", "Perdida Motricidad")
  let consultorio1 = new Consultorio ("Dr: Mario Marakus", [paciente1, paciente2, paciente3, paciente4, paciente5]);
  
  console.log(consultorio1);