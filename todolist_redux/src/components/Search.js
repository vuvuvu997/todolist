import React, { Component} from 'react'
import {connect} from 'react-redux';
import * as actions from './../actions/index'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }
    onChange = (event)=> {
        let target = event.target;
        let name = target.name;
        let value = target.value; 
        this.setState({
            [name]: value
        });
    }

    onControlSearch = ()=> {
        this.props.searchTask(this.state.search);
    }

    render() {
        return(
            <div className="col-6">
            <form>
                <input  type="text" 
                        name="search"
                        onChange={ this.onChange }
                ></input>
                <btn    type="button" 
                        className="btn btn-primary"
                        onClick={ this.onControlSearch }
                ><i class="fa fa-search" aria-hidden="true"></i> Search</btn>
            </form>
            </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchTask: (keyword) => {
            dispatch(actions.searchTask(keyword));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)