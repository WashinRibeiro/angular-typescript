"use strict";
// A classe seria como uma forma, um padrão para algo que desejamos criar
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 98);
p1.attack();
