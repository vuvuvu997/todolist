import {combineReducers} from 'redux';
import products from './Products';
import cart from './cart';
import message from './Message';

let myReducer = combineReducers({
    products,
    cart,
    message
});

export default myReducer;