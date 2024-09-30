class Cart {
    constructor() {
        this.products = []
        this.total = 0
    }

    addProduct(Product) {
        this.products.push(Product)
        total ++
    }

    removeProduct(index) {
        this.products.pop(index)
        total --
    }
}

module.exports = Cart