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
        const pedido = new Pedidos(this.contador, nombre, detalles, urlimagen); 
        this.pedidos.push(pedido);
        this.contador++;
    } 
}

const boton= document.getElementById("boton");
const Nota = new repositorio ();

boton.addEventListener("click", (event)=>{
    event.preventDefault();
    const titulo=document.getElementById("titulo").value;
    const descripcion=document.getElementById("descripcion").value;
    const url=document.getElementById("url").value;

    if(titulo==="" || descripcion==="" || url===""){
        alert("Por favor complete todos los campos");
        return;
    }
    
    
    Nota.crearPedido(titulo, descripcion, url);
    
    const almacen=document.getElementById("almacen");
    almacen.innerHTML="";

    const tarjeta=Nota.mostrarPedidos().map(({id, nombre, detalles, urlimagen})=>{
        const div=document.createElement("div");
        const tit=document.createElement("h2");
        const img=document.createElement("img");
        const descr=document.createElement("p");

        tit.innerHTML=nombre;
        img.src=urlimagen;
        descr.innerHTML=detalles;

        div.appendChild(tit);
        div.appendChild(img);
        div.appendChild(descr);

        return div;
    });
        
    tarjeta.forEach (div=> almacen.appendChild(div));
    
   
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("url").value = "";
});
         
       
            
        

        