import React, { Component} from 'react'
import * as messages from './../constants/messages'
class Product extends Component {
    showRating() {
        let rating = this.props.product.rating,
            i = 1,
            result=[];

        for(i; i <= rating; i++){
            result.push(<i className="fa fa-star"></i>);
        } 
        for (i=1; i <= 5-rating; i++) {
            result.push(<i className="fa fa-star-o"></i>);
        }
        return result;
    }
    
    addToCart = (product, quantity)=> {
        console.log('heelo');
        this.props.addToCart(product, quantity);
        this.props.changeMessage(messages.ADD_PRODUCT_SUCCESS);
    }

  render() {
    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={this.props.product.image}
                        className="img-fluid" alt="" />
                    <a href="#1">
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a href="#1">{this.props.product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        {this.showRating()}
                    </ul>
                    <p className="card-text">
                        {this.props.product.description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{this.props.product.price}$</span>
                        <span className="right">
                            <a  className="btn-floating blue-gradient"
                                data-toggle="tooltip" 
                                data-placement="top" title="" 
                                data-original-title="Add to Cart" href="#1"
                                onClick = { ()=> this.addToCart(this.props.product, 1) }
                            >
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Product;