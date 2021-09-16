const ulTag = document.querySelector('ul');
totalPages = 20;

function element(totalPages, page){
    let liTag = '';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if (page > 1){//si el valor de la pagina es menor a 1, entonces agrega un nuevo "li" el cual es el boton "<Prev"
        liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1})"><span><i class="fas fa-angle-left">Prev</i></span></li>`;
    }
    if (page > 2) {//si el valor de la pagina es mas grande que 2 entonces agrega un tag li con el valor de 1
        liTag +=`<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
        if (page > 3){//si el valor de la pagina es mayor a 3 entonces agrega una etiqueta li con (...)
            liTag +=`<li class="dots"><span>...</span></li>`;
        }
    }

        //cuantas paginas o <li> mostrar antes del actual <li>

        if(page == totalPages){//si el valor de la pagina es igual a totalPages se resta -2 al valor de beforePages
            beforePages = beforePages - 2;
        }else if(page == totalPages -1){//si en caso que, el valor de la pagina es igual a totalPages por -1, se resta -1 al valor de beforePages
            beforePages = beforePages - 1;
        }

        //cuantas paginas o <li> mostrar antes del despues <li>
        
        if(page == 1){//si el valor de la pagina es igual a totalPages se resta -2 al valor de beforePages
            afterPages = afterPages + 2;
        }else if(page == 2){//si en caso que, el valor de la pagina es igual a totalPages por -1, se resta -1 al valor de beforePages
            afterPages = afterPages + 2;
        }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if(pageLength > totalPages){
            continue;
        }
        if (pageLength==0) {//se suma uno a pageLength para evitar tener un valor 0 o menor en la variable y evitar tener una pagina 0 o -1
            pageLength = pageLength + 1;
        }
        if(pageLength == pageLength){//si el valor de la pagina es igual a pageLength entonces se asigna la string activa en la varible activeLi
            activeLi = "active";
        }else{//Else para dejar vacia la variable activeLi
            activeLi = "";
        }
        liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
               
    }
    if (page < totalPages - 1) {//si el valor de la pagina es menor que totalPages por -1 entonces muestra la ultima etiqueta o pagina la cual es 20
        if (page < totalPages - 2){//si el valor de la pagina es menor que totalPages por -2 entonces muestra (...) antes de la ultima pagina
            liTag +=`<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }
    
    if (page < totalPages){//si el valor de la pagina es menor que totalPages, entonces agrega un nuevo "li" el cual es el boton "<Next"
        liTag += `<li class="btn next" onclick="element(totalPages, ${page + 1})"><span>Next<i class="fas fa-angle-right"></i></span></li>`;
    }
    ulTag.innerHTML = liTag;
}
element(totalPages, 5); // llama a la funcion de arriba con los valores entregados