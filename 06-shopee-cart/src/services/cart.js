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
    
}

async function removeItem(userCart, index) {
    
}

async function calcularTotal(userCart) {
    const result = userCart.reduce((total,item) => total + item.subtotal(), 0);

    console.log(result);
}


export {addItem, calcularTotal, deleteItem, removeItem};









