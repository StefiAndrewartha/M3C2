var dia = new Date();
var arregloSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    function diasDeLaSemana(){
      var diasSemana = dia.getDay(); 
      var elemento = arregloSemana[diasSemana];
            alert(`Hoy es: ${elemento}` );
        }
    

    
            