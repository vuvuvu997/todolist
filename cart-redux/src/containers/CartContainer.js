import React, { Component} from 'react';
import {connect} from 'react-redux';
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import Cart from '../components/Cart'
import * as messages from './../constants/messages';
import * as actions from './../actions/index';

class CartContainer extends Component {
    totalMoneyCart = (cart)=> {
        let result = 0;
        if (cart.length > 0) {
            result = cart.reduce((total, current) => {
                return total + current.product.price * current.quantity;
            }, 0);
        }
        return (
            <CartResult 
                totalMoney = {result}
            />
        );
    }

    showCart = (cart)=> {
        let result = messages.EMPTY_PRODUCT;
        let {deleteProductInCart, changeMessage, updateQuantity} = this.props;
        if( cart.length > 0) {
            result = cart.map((item, index)=> {
                return (
                    <CartItem 
                        key={index}
                        cartItem = {item}
                        deleteProductInCart = {deleteProductInCart}
                        changeMessage = {changeMessage}
                        updateQuantity = {updateQuantity}
                    />
                )
            })
        }
        return result;
    }

  render() {
      let {cart} = this.props
    return (
        <Cart>
            { this.showCart(cart) }
            { this.totalMoneyCart(cart) }
        </Cart>
    );
}
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        deleteProductInCart: (product)=> {
            dispatch(actions.deleteProductInCart(product));
        }, 
        changeMessage : (message) => {
            dispatch(actions.changeMessage(message));
        }, 
        updateQuantity : (product, value) => {
            dispatch(actions.updateQuantity(product, value));
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);