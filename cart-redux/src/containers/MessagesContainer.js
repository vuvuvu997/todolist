import React, { Component} from 'react';
import {connect} from 'react-redux';
import Message from './../components/Message';

class CartContainer extends Component {
    
  render() {
      
    return (
        <Message>
            { this.props.message }
        </Message>
    );
}
}

const mapStateToProps = (state) => {
    return {
        message : state.message
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);