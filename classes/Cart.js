class Cart {
    constructor() {
        this.products = []
        this.total = 0
    }

    addProduct(Product) {
        this.products.push(Product)
        
    }
}