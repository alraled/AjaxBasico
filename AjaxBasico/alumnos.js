var url = "https://alumnoscurso.azure-mobile.net/Tables/Curso/";


function guardarDatos() {
    var obj = {
        nombre: document.getElementById("txtNom").value,
        duracion: document.getElementById("txtDur").value,

    };

    var ajax = new XMLHttpRequest();
    ajax.open("post", url);
    ajax.setRequestHeader("Content-Type","application/json")
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status < 300) {
                obtenerDatos();
            }
            else {
                alert("Error");
            }
        }
    }

    var data = JSON.stringify(obj);
    ajax.send(data);




}

function obtenerDatos() {

    var ajax = new XMLHttpRequest();
    ajax.open("get", url);

    ajax.onreadystatechange = function () {

        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status<300) {
                var data = JSON.parse(ajax.responseText);
                var salida = "<table>";
                for (var i = 0; i < data.length; i++) {
                    salida += "<tr>";
                    salida += "<td>" + data[i].nombre + "</td>";
                    salida += "<td>" + data[i].duracion + "</td>";
                    salida += "</tr>";
                }
                salida += "</table>";
                document.getElementById("alumnos").innerHTML = salida;

            }
            else {
                alert("Error en la peticion");
                console.log(resultado.error);
            }

        }

    };

    ajax.send(null);




}

obtenerDatos();
document.getElementById("btnOK").onclick = guardarDatos;

