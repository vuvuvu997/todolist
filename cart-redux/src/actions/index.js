import * as typesAction from './../constants/typesAction';

export const showProduct = () =>{
    return {
        type: typesAction.SHOW_PRODUCT
    }
}

export const addToCart = (product, quantity)=> {
    return {
        type: typesAction.ADD_TO_CART,
        product,
        quantity
    }
}

export const changeMessage = (message) => {
    return {
        type: typesAction.CHANGE_MESSAGE,
        message
    }
}

export const deleteProductInCart = (product)=> {
    return {
        type: typesAction.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const updateQuantity = (product, value)=> {
    return {
        type: typesAction.UPDATE_QUANTITY,
        product,
        value
    }
}

