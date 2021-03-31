import React, { Component} from 'react';
import * as messages from './../constants/messages';

class CartItem extends Component {
    showMoney() {
        return this.props.cartItem.product.price * this.props.cartItem.quantity;
    }

    deleteProductInCart = (product)=> {
        console.log('delete');
        this.props.deleteProductInCart(product);
        this.props.changeMessage(messages.DELETE_PRODUCT_SUCCESS);
    }

    updateQuantity = (product, value)=> {
        this.props.updateQuantity(product, value);
        this.props.changeMessage(messages.UPDATE_PRODUCT_SUCCESS);
    }

  render() {
    return (
        <tr>
            <th scope="row">
                <img src={this.props.cartItem.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{this.props.cartItem.product.name}</strong>
                </h5>
            </td>
            <td>{this.props.cartItem.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{this.props.cartItem.quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label  className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick = {()=>this.updateQuantity(this.props.cartItem.product, -1)}    
                            >
                        <a href="#1">—</a>
                    </label>
                    <label  className="btn btn-sm btn-primary
                                    btn-rounded waves-effect waves-light"
                            onClick = {()=>this.updateQuantity(this.props.cartItem.product, +1)}
                    >
                        <a href="#1">+</a>
                    </label>
                </div>
            </td>
            <td>{this.showMoney()}$</td>
            <td>
                <button type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick = {()=>this.deleteProductInCart(this.props.cartItem)}
                >
                    X
                </button>
            </td>
        </tr>
                                  
      );
}
}

export default CartItem;