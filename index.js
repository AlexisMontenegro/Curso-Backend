class usuario {
    constructor(nombre, apellido, bookName, bookAuthor, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [{book: bookName, autor: bookAuthor}];
        this.mascotas = [mascotas];
    }
    
    getFullName() {
    console.log (`Nombre completo: ${this.nombre} ${this.apellido}`);  
    }
    
    addBook(bookName, bookAuthor){
        this.libros.push({book: bookName, autor: bookAuthor})
    }
    addMascota(nuevaMascota){
       return this.mascotas.push(nuevaMascota);
    }
    
    countMascotas(){
        console.log(this.mascotas.length)
    }

    getBooksName(){
        return this.libros.map(function(libros){
        return libros.book
        })
    }
}

const usuario1 = new usuario("Alexis", "Montenegro", "Mr Robert", "Robert", "Vaca")
const usuario2 = new usuario("Pepe", "Bartolome", "Mr Mack", "Mickey", "Conejo")


usuario1.getFullName()
usuario2.getFullName()

usuario1.addMascota("Gato") 
usuario1.addMascota("loro")
usuario2.addMascota("Pato")

usuario1.countMascotas()
usuario2.countMascotas()

usuario1.addBook("Mr Pepe", "Pepe")
usuario2.addBook("Mr Jose", "Jose")

console.log (usuario1.getBooksName())
console.log (usuario2.getBooksName())

console.log(usuario1) 
console.log(usuario2)
