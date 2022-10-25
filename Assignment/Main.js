class Person {
    constructor(firstName = 'N/A', lastName = 'N/A', dateOfBirth = new Date(Date.now())){
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = new Date(dateOfBirth)
    }
    getFullName(){
        return `${this.firstName}, ${this.lastName}`
    }
    getAge(){
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        return today.getFullYear() - this.dateOfBirth.getFullYear()
    }
    getEqual (anotherPerson){
        return this.firstName === anotherPerson.firstName && this.lastName === anotherPerson.lastName
    }
    toString(){
        return "Name: "+ this.getFullName() + ", Age: " + this.getAge()
    }

}
let me = new Person('Phutawan', 'Palakavong', 'May 26 2003')
let p2 = new Person('Jaidee','Meesuk','May 31 2001')
console.log(me)
console.log(me.getFullName())
console.log(me.getAge())
console.log(me.toString())
console.log(me.getEqual(me))
console.log(me.getEqual(p2))