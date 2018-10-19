
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById('bitacora');



formulario.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    if(!((formulario[1].value == "" || formulario[1].value == null ) || (formulario[2].value == "" || formulario[2].value == null) || (formulario[3].value == "" || formulario[3].value == null || parseInt(formulario[3].value) <=0))){  
        let bitacora = {
            cant: cont,
            fecha: formulario[1].value,
            descripcion: formulario[2].value,
            cantidad: formulario[3].value
        }
        bitacoras.push(bitacora);
        cont++;
        mostrar();
    };
    if(formulario[1].value == "" || formulario[1].value == null){
        formulario[1].style.borderColor = "red";
    }
    else{
        formulario[1].style.borderColor = "green";
    };
    if(formulario[2].value == "" || formulario[2].value == null){
        formulario[2].style.borderColor = "red";
    }
    else{
        formulario[2].style.borderColor = "green";
    };
    if((formulario[3].value == "" || formulario[3].value == null) || parseInt(formulario[3].value) <=0) {
        formulario[3].style.borderColor = "red";
    }
    else{
        formulario[3].style.borderColor = "green";
    };
});

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    });
    let btntd = document.createElement("td");
    let btn = document.createElement("input");
    btn.type = "button";
    btn.value = "Eliminar";
    btntd.appendChild(btn);
    tr.appendChild(btntd);
    tbody.appendChild(tr);
}

const eliminar = (tbody) =>{
    while (tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}

const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            document.querySelector("#cant").value = item.childNodes[3].textContent;
        });
    })
}

const mostrar = () => {
    if(document.querySelector(".tabla-btc tbody").childElementCount > 0){
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}

//Pregunta 1 - Contiene la etiqueta form y los elementos dentro de el

//Pregunta 2 - Prevee que el boton ejecute su accion por defecto en el navegador

//Pregunta 3 - Es una lista que contiene los elementos que el usuario escriba para trasladarlos a la tabla

//Pregunta 4 - Tr contiene los elementos de la etiqueta tr de html y contiene la variable td y sus elementos. Td contiene los elementos de una
//celda

//Pregunta 5 - Content contiene el texto de los nodos

//Pregunta 6 - tbody contendra una tabla con filas y columnas representas por td y tr. Tr contiene los elementos de td en cada iteracion

//Pregunta 7 - Agrega lo que este en la caja de texto a una lista llamada "tbody"

//Pregunta 8 - Devolver el primer hijo del objeto al cual se le aplica la funcion

//Pregunta 9 - Quedaria vacio de elementos

//Pregunta 10 - El texto del hijo en la posicion i del objeto al que se le aplica la funcion

//Pregunta 11 - Se obtienen todos los elementos con las clase .tabla-btc tbody

//Pregunta 12 - Retorna el numero total de hijos de un elemento
 
//Pregunta 13 - No muestra nada directamente al usuario 

//Pregunta 14 - Mostrara los elementos escritos por el usuario en la tabla