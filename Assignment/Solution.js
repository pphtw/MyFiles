class Person{
    constructor(firstName='N/A', lastName='N/A', dateOfBirth=new Date(Date.now())){
        this.firstName=firstName
        this.lastName=lastName
        this.dateOfBirth=dateOfBirth
    }
    getFullName(){
        return `${this.lastName}, ${this.firstName}`
    }
    getAge(){
        const diff_ms=Date.now()-this.dateOfBirth.getTime()
        // console.log(diff_ms)
        const diff_date=new Date(diff_ms)
        // console.log(diff_date)
        return diff_date.getUTCFullYear()-1970
    }   
}
// console.log(typeof Person)
const p1=new Person()
const p2=new Person('Somsak', 'Jaidee', new Date(1975,0,10))
// console.log(p1.getFullName())
// console.log(p2.getFullName())
// console.log(`age: ${p1.getAge()}`)
// console.log(`age: ${p2.getAge()}`)
Person.prototype.isEqual=function (anotherPerson){
    return this.firstName.toLowerCase() === anotherPerson.firstName.toLowerCase() && this.lastName.toLowerCase() === anotherPerson.lastName.toLowerCase()
}
Person.prototype.toString=function(){
    return `fullName: ${this.getFullName()}, age: ${this.getAge()}`
}
console.log(Person.prototype)
console.log(p1.isEqual(p2))
console.log(p1.toString())
console.log(p2.toString())