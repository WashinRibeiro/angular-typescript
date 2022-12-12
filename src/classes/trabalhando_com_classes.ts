// A classe seria como uma forma, um padrão para algo que desejamos criar

/*
    DATA MODIFIERS:
    - public --->  modificador padrão, dá acesso fora e dentro da classe
    - private  ---> Não conseguimos chamar por fora da classe, somente dentro
    - protected ---> Só classes e classes filhas que conseguem acessar a propriedade
*/

// Os data modifiers funcionam da mesma forma nas funções

class Character {
  protected name?: string; // atributo opcional e só acessado por subclasses
  stregth: number; // criamos mas não conseguimos modificar esse valor após isso
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }

  public attack(): void {
    console.log(`Attack with ${this.stregth} points`);
  }
}

const p1 = new Character("Ryu", 10, 98);
p1.attack();

// -------------------------------------------

// HERDANDO DE UMA UMA CLASSE
// superclass : Character
// subclass: Magician

class Magician extends Character {
  magicPoints: number;

  constructor(
    name: string,
    stregth: number,
    skill: number,
    magicPoints: number
  ) {
    super(name, stregth, skill);
    this.magicPoints = magicPoints;
  }
}

const p2 = new Magician("Mago", 9, 30, 100)
