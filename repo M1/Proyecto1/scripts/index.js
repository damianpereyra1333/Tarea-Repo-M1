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
    