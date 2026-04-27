//quais ações meu carrinho pode fazer
/*
    adicionar um item
    deletar um item
    remover um item da soma de itens - diminui um item
    colocar o total das compras
*/

async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    console.log("Item encontrado no index");
    console.log(indexFound);


    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }


    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
    }
    else if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
    }
}

async function calcularTotal(userCart) {
    console.log("Shopee Cart TOTAL is: ");

    const result = userCart.reduce((total,item) => total + item.subtotal(), 0);

    console.log(`\nTotal: ${result}`);
}

async function displayCart(userCart) {
    console.log("Shopee cart list: ");
    userCart.forEach((element, index) => {
        console.log(`
            ${index + 1}
            Nome: ${element.name}
            R$: ${element.price}
            Quantity: ${element.quantity}x
            Subtotal: ${element.subtotal()}
            `
        )
    });
}

export { addItem, calcularTotal, deleteItem, removeItem, displayCart, };









