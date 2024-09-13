`use strict`;

const nombreProducto = [`bag`, `banana`, `bathroom`, `boots`, `breakfast`, `bubblegum`, `chair`, `cthulhu`, `dog-duck`, `dragon`, `pen`, `pet-sweep`, `scissors`, `shark`, `tauntaun`, `unicorn`, `water-can`, `wine-glass`];
const allProducts = [];

function Producto(name, path) {
    this.name = path;
    this.path = path;
    this.click = 0;
    this.views = 0;
}

function crearProductos() {
    for (let i = 0; i < nombreProducto.length; i++) {
        let producto = new Producto(nombreProducto[i], `img/` + nombreProducto[i] + `.jpg`)
        allProducts.push(producto)
    }
}
crearProductos();
console.log(allProducts);

const productRank = {
    totalClick: 0,
    rondasVotos: 25,
    objetoIzq: null,
    objetoCen: null,
    objetoDer: null,

    elementoIzq: document.getElementById(`img1`),
    elementoCen: document.getElementById(`img2`),
    elementoDer: document.getElementById(`img3`),


    contenedorImagenes: document.getElementById(`imagenes`),
    elementosResultados: document.getElementById(`resultados`),

    botonResultados: document.getElementById(`mostrarResultados`),
    botonReiniciar: document.getElementById(`reiniciar`),

    numeroAleatorio: function () {
        return Math.floor(Math.random() * nombreProducto.length);

    },
    mostrarimganes: function () {
        productRank.objetoIzq = allProducts[productRank.numeroAleatorio()];
        productRank.objetoCen = allProducts[productRank.numeroAleatorio()];
        productRank.objetoDer = allProducts[productRank.numeroAleatorio()];

        productRank.objetoIzq.views += 1
        productRank.objetoCen.views += 1
        productRank.objetoDer.views += 1

        productRank.elementoIzq.src = productRank.objetoIzq.path;
        productRank.elementoIzq.name = productRank.objetoCen.name;

        productRank.elementoCen.src = productRank.objetoCen.path;
        productRank.elementoCen.name = productRank.objetoCen.name;

        productRank.elementoDer.src = productRank.objetoDer.path;
        productRank.elementoDer.name = productRank.objetoDer.path;

    },

    contarClick: function (id) {
        for (let i = 0; i < allProducts.length; i++) {
            if (allProducts[i].name === id) {
                allProducts[i].click += 1;
                this.totalClick += 1;
                console.log(allProducts[i].name + `tiene` + allProducts[i].click + `click`)
            }
        }
    },

    mostrarResultados:function(){
        const lista=document.createElement(`ul`);
        for(let i=0;i<allProducts.lenght;i++){
            const item=document.createElement(`li`);
            const contenido=allProducts[i].name+`tiene`+allProducts[i].click+`clicks.`;
            item.textContent=contenido;
            item.appendChild(item);

        }
        const itemFinal=document.createElement(`li`);
        itemFinal.textContent=`Total clicks:`+ ` ` + productRank.totalClick;
        lista.appendChild(itemFinal);
        this.elementosResultados.appendChild(lista);
    },
    mostrarBoton:function(){
        this.botonResultados.hidden=false;
        this.botonResultados.addEventListener(`click`, function(){
            productRank.botonReiniciar.hidden=false;
            productRank.botonResultados.hidden=true;
            productRank.mostrarResultados();

            productRank.botonReiniciar.addEventListener(`click`,function(){
                productRank.botonReiniciar.hidden=true;

            })
        })
    },
    onClick:function(event){
        if(event.target.id===productRank.objetoIzq.name || event.target.id===productRank.objetoCen.name || event.target.id===productRank.objetoDer.name){
            productRank.contarClick(event.target.id);
        }
    }


}
productRank.mostrarimganes();
console.log(allProducts[9])
productRank.mostrarResultados();
productRank.onClick();