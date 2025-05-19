class Animal {
    constructor(nome, tutor) {
        this.nome = nome;
        this.tutor = tutor;
    }

    emitirSom() {
        console.log(`${this.nome} faz som.`)
    }

    comer() {

    }

    getNome() {
        return this.nome;
    }

    setNome(novoNome) {
        return this.nome = novoNome;
    }

}

class Gato extends Animal {
    emitirSom() {
        console.log("Miau")
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log("Au au")
    }

}

class Pato extends Animal {
    emitirSom() {
        console.log("Quack")
    }
}

const gato = new Gato("Rivoclaison", "Joao")
gato.emitirSom();

const cachorro = new Cachorro("Rivanildo", "Carlos");
cachorro.emitirSom();

const pato = new Pato("Jesonel", "Joana");
pato.emitirSom();

const lagarto = new Animal("Dragao", "Via");
lagarto.emitirSom();