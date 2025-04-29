class Cart{
    constructor(){
        this.items = [];
    }

    addProduct(product){
        this.items.push(product);
    }

    getTotal(){
        return this.items.reduce((sum, p)=> sum + p.price, 0);
    }
}


export default Cart;