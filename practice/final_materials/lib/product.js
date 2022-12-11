class Product {
    static runningId = 1
    constructor(item, amount){
        this.id = Product.runningId++
        this.item = item
        this.amount = amount
        this.status = false
    }

    getItem(){
        return this.item
    }

    getAmount(){
        return this.amount
    }

    setDone(){
        return this.status = true
    }
}

export {Product}