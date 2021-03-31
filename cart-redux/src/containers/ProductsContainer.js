import React, { Component} from 'react';
import {connect} from 'react-redux';
import Product from './../components/Product'
import Products from './../components/Products'
import * as actions from './../actions/index'

class ProductsContainer extends Component {

    showProducts = (products) => {
        let result = null;
        let {addToCart, changeMessage} = this.props
        if(products.length > 0) {
            result = products.map((product, index)=> {
                return (
                    <Product 
                        key = {index}
                        product = {product}
                        addToCart={addToCart}
                        changeMessage={changeMessage}
                    />
                )
            });
        }
        return result;
    }

    render() {
        let {products} = this.props;  
        return (
            <Products >
                { this.showProducts(products) }
            </Products>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        addToCart: (product, quantity)=> {
            dispatch(actions.addToCart(product, quantity));
        },
        changeMessage: (message)=> {
            dispatch(actions.changeMessage(message));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);