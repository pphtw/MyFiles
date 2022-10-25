import Pokemon from "./poke_class.js";
const Poke1 = new Pokemon("a", 100, 20);
const Poke2 = new Pokemon("b", 120, 30);

function battle(poke_one, poke_two) {
  let count = 0;
  while (count <= 10) {
    let num = Math.floor(Math.random() * 10);
    console.log(`============[round ${count}]===============`);
    if (num % 2 === 0) {
      poke_two.sethp(poke_two.gethp() - poke_one.getatk());
      console.log(poke_two.getInfo());
      if (poke_two.gethp() <= 0) {
        console.log(`${poke_one.getname()} Win`);
        return `${poke_one.getname()} Win`;
      }
    } else {
      poke_one.sethp(poke_one.gethp() - poke_two.getatk());
      console.log(poke_one.getInfo());
      if (poke_one.gethp() <= 0) {
        console.log(`${poke_two.getname()} Win`);
        return `${poke_two.getname()} Win`;
      }
    }

    count++;
  }
}
battle(Poke1, Poke2);
//เริ่มเขียนตรงนี้
