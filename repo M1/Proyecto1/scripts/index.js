class Pedidos{
    constructor(id, nombre, detalles, urlimagen){
     this.id=id;
     this.nombre=nombre;
     this.detalles=detalles;
     this.urlimagen=urlimagen;
     }
}

class repositorio{
    constructor(){
        this.pedidos=[];
        this.contador=1;
    }
    mostrarPedidos(){
        return this.pedidos;
    }
    crearPedido(nombre, detalles, urlimagen){
        const pedido=new Pedidos(this.contador, nombre, detalles, urlimagen);
        this.pedidos.push(pedido);
        this.contador++;
    } 
    }

    const boton= document.getElementById("boton");
    const repositorio =new repositorio();

    boton.addEventListener("click", (event)=>{
        event.preventDefault();
        const titulo=document.getElementById("titulo").value;
        const descripcion=document.getElementById("descripcion").value;
        const url=document.getElementById("url").value;

        if(titulos==="" || descripcion==="" || url===""){
            alert("Por favor complete todos los campos");
            return;
        }
        repositorio.crearPedido(titulo, descripcion, url);
        console.log(repositorio.mostrarPedidos());
        });