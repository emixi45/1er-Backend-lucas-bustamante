class Usser {
    constructor(obj = {}) {
        this.name = obj?.name || ''
        this.lastname = obj?.lastname || ''
        this.pets = obj?.pets || ''
        this.books = obj?.books || ''
    }

    getFullName() {
        return `Nombre completo ${this.name} ${this.lastname}`
    }

    addPets(species , name) {
        this.pets.push({
            species: species,
            name: name
        })
        
    }

    getPets() {
        return this.pets
    }

    addBook(name, autor) {
        this.books.push({
            name: name,
            autor: autor
        })
    }

    getBooks() {
        return this.books
    }

}

const pets = []
const books = []
const usser = new Usser({name:'Lucas',lastname:'Bustamante',pets, books} );

usser.addPets('Gata' , 'Negra')
usser.addPets('Perro' , 'Maiz')
usser.addBook('El Almiquista', 'Paulo Coelho')
usser.addBook('El Señor de los Anillos', 'J.R.R. Tolkien')


console.log(usser.getFullName())
console.log(usser.getPets())
console.log(`numero de mascotas ${pets.length}`)
console.log(usser.getBooks())