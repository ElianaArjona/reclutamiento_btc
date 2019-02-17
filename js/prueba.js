/* En este archivo debe agregar las clases JS que considere necesarias para la realización de las pruebas de páginas Estáticas */

function verify(){
//Estas variables almacenan el valor obtenido de los inputs del form
	var name = document.getElementById("name").value;
	var last = document.getElementById('last').value;
	var tlfn = document.getElementById('tlfn').value;
	var email = document.getElementById('email').value;
	var observations = document.getElementById('observations').value;
	var interest = document.getElementById('interest').value;
//verifica que lo campos de nombre y correo esten llenos
	  if (name == "" || email =="" ) {
	  	//según el error, se imprimen el mensaje correspondiente
	  	if (name =="" && email !=""){
	  		message = document.getElementById("message").style.backgroundColor='#ff0000';
	  		message= document.getElementById("message").innerHTML = "Error, revisar campos obligatorios";
	  		required = document.getElementById("required").innerHTML = " *Requerido";
	  		requiredEmail = document.getElementById("requiredEmail").innerHTML = " ";
	  	
	  	}else if (email =="" && name !=""){
	
	  		message = document.getElementById("message").style.backgroundColor='#ff0000';
  	  		message= document.getElementById("message").innerHTML = "Error, revisar campos obligatorios";
  	  		requiredEmail = document.getElementById("requiredEmail").innerHTML = " *Requerido";
  	  		required = document.getElementById("required").innerHTML = " ";

	  	}else{
	  		
	  		message = document.getElementById("message").style.backgroundColor='#ff0000';
  	  		message= document.getElementById("message").innerHTML = "Error, revisar campos obligatorios";
	  		required = document.getElementById("required").innerHTML = " *Requerido";
	  		requiredEmail = document.getElementById("requiredEmail").innerHTML = " *Requerido";
	  	}	
	  }else if(ValidaEmail(email) == true ){
	  		
	  		message = document.getElementById("message").style.backgroundColor='#009933';
  	  		message = document.getElementById("message").innerHTML="Mensaje Enviado";
	  		Alert(name,last,interest,observations,email,tlfn);
	  		required = document.getElementById("required").innerHTML = " ";
	  		requiredEmail = document.getElementById("requiredEmail").innerHTML = " ";
	  }else{
	  		
	  		message = document.getElementById("message").style.backgroundColor="#ff6600";
  	  		message = document.getElementById("message").innerHTML="Formato de Correo Invalido,debe ser jdoe@test.com";
	 		required = document.getElementById("required").innerHTML = " ";
	  		requiredEmail = document.getElementById("requiredEmail").innerHTML = " ";
	  }
}



function ValidaEmail(emailUser){
	var correo = emailUser;
	var flag = 0;

//arreglo que se utilizará para validar que el formato del correo este correcto
	var correct = "@test.com";
	var verify = correct.replace(/\s/g, '');; 
	var size=0;

	//transforma el valor del string correo a un arreglo llamado verify
	var email = correo.toLowerCase();
	var arr = email.replace(/\s/g, '');
	
	for (i=0 ; i<arr.length; i++){//corre el arreglo hasta consegir el caracter de @

		if(arr[i]=='@'){
			//optiene el numero de carcateres que el arreglo posee desdes del @ 
			for (j=i; j<arr.length;j++){
				size++;
			}
			/*vailda que el numero de caracates desde el @ sea igual al numero 
			de carcateres que del arreglo verify, que contiene la cadena ¨@test.com¨*/
			if ( size == verify.length){

				for (j=0 ; j<verify.length; j++){
					/*verifica si los valores despues del @ son validos,
					 es decir, iguales a los del arreglo verify */
					if (arr[i]==verify[j]){
						flag=1;//equivale a un true
						i++;
					}else{
						flag=0;//equivale a un false
						break;
					}
					
				}
				
			}else{
				flag = 0;
			}
		}else{
			flag = 0;
		}
	}
/*retorna un true o false dependiendo del 
valor que pose la variable flag obtenida arriba*/
	if(flag==1){
		return true;
	}else {
		return false;
	}

}

//esta funcion genera el alert con lo datos obtenidos una vez que el mensaje es enviado con exito.
function Alert(name,last,interest,observations,email,tlfn) {
	alert('Nombre: '+name+'\nApellido: '+last+
		  '\nTelefono: '+tlfn+'\nCorreo: '+email+
		  '\nObservaciones: '+observations+
		  '\nInteres: '+interest);

}



