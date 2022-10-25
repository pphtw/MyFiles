class Pokemon {
  //เริ่มเขียนตรงนี้
  #name;
  #hp;
  #atk;
  constructor(name = undefined, hp = 0, atk = 0) {
    this.#name = name;
    this.#hp = hp;
    this.#atk = atk;
  }
  getname() {
    return this.#name;
  }
  gethp() {
    return this.#hp;
  }
  getatk() {
    return this.#atk;
  }
  sethp(hp) {
    return (this.#hp = hp);
  }
  getInfo() {
    return { name: this.#name, hp: this.#hp, atk: this.#atk };
  }
}

export default Pokemon;
