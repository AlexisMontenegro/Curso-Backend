class usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas =  mascotas;

    }
    
    getFullName() {
    console.log (`Nombre completo: ${this.nombre} ${this.apellido}`)  
    }
    
    // addMascota(){
    //     this.mascotas.push()
    // }
    
    countMascotas(){
        console.log(this.mascotas.length)
    }

}

const usuario1 = new usuario("Alexis", "Montenegro", {nombre:"Mr Pepe", autor:"pepe"}, ["perro", "gato"])
const usuario2 = new usuario("Pepe", "Bartolome", {nombre:"Mr Jose", autor:"Jose"}, ["perro", "gato", "loro"])

usuario1.getFullName()
usuario2.getFullName()


usuario1.countMascotas()
usuario2.countMascotas()

console.log(usuario1) 
console.log(usuario2)
