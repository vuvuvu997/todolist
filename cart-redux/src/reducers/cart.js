import * as typesAction from './../constants/typesAction';
let data = JSON.parse(localStorage.getItem('cart'));
let initialState = data ? data : [];

let findIndex = (data, product) => {
    let result = -1;
    if(data.length > 0) {
        data.forEach((item, index) => {
            if( item.product.id === product.id) {
                result = index;
            }
        });
    }
    return result;
    
}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesAction.ADD_TO_CART:
            let {product, quantity} = action;
            console.log(product)
            let index = findIndex(state, product);
            if (index !== -1) {
                state[index].quantity += quantity; 
            } else {
                state.push({
                    product, 
                    quantity
                 }); 
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        
        case typesAction.DELETE_PRODUCT_IN_CART:
            let productDel = action.product.product;
            let indexDel = findIndex(state, productDel);
            if (indexDel !== -1) {
                state.splice(indexDel, 1);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        
        case typesAction.UPDATE_QUANTITY:
            let productUpdate = action.product;
            let value = action.value;
            let indexUpdate = findIndex(state, productUpdate);
            console.log(state[indexUpdate]);
            if (indexUpdate !== -1) {
                if(state[indexUpdate].quantity > 1 && value < 0) {
                    state[indexUpdate].quantity = state[indexUpdate].quantity + value;
                } else if(state[indexUpdate].quantity > 0 && value > 0) {
                    state[indexUpdate].quantity = state[indexUpdate].quantity + value;
                }
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
            
        default:
            return [...state];
    }
}

export default myReducer;

