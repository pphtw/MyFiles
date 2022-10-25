class Course {
  constructor(id, name, desc) {
    this.id = id;
    this.name = name;
    this.desc = desc;
  }
  getInfo() {
    return {
      id: this.id,
      name: this.name,
      desc: this.desc == null ? this.desc : this.desc,
    };
  }
}
module.exports = Course;
