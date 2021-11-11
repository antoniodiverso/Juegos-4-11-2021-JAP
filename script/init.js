let UsuariosURL = "https://danikho2020.github.io/json/user.json";
let users = [];

var getJSONData = function(url){
    var result = {};

    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
         
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;

        return result;
    });
}


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(UsuariosURL).then(function(resultObj){
        if (resultObj.status === "ok"){
           users.push (resultObj.data[0]);
        }
    });


});

document.getElementById("singin").addEventListener("click" ,function(event){
    event.preventDefault();
    let usuarioIn = document.getElementById("inputEmail");
    let contraseñaIn = document.getElementById("inputPassword");

    users.forEach(usuario => {
        if (usuario.user == usuarioIn.value){
            usuarioIn.classList.remove("alert-danger")
            if (usuario.password == contraseñaIn.value){
                contraseñaIn.classList.remove("alert-danger")
                alert("jaja")
            }
            else{
                contraseñaIn.classList.add("alert-danger")
                usuarioIn.placeholder = 'Contraseña Incorrecto';
            }
        }else{
            usuarioIn.classList.add("alert-danger")
            usuarioIn.placeholder = 'Usuario Incorrecto';
        }
        
    });


});



