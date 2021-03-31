import React, { Component} from 'react'
import {connect} from 'react-redux';
import * as actions from './../actions/index'

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySort: false,
            sort: {
                by: 'name', 
                value: -1
            }
        }
    }


    onSortController = (by, value)=> {
        this.setState({
            sort: {
                by:by,
                value: value 
            }
        })
        this.props.searchTask({by, value});
    };

    onOppenListSort = () => {
        this.setState({
            displaySort: !this.state.displaySort
        });
    }

    render() {
        let {sort} = this.state;
        return(
            <div className="col-6">
                <button className="btn btn-primary display-sort"
                        onClick={ this.onOppenListSort } 
                >Sap xep <i class="fa fa-sort" aria-hidden="true"></i></button>
                <ul className={this.state.displaySort === true ? "sort-content": "hidden"}>
                    <li className={ (sort.by ==='name' && sort.value === 1) ? "sort-item sort-selected" : 'sort-item'}
                        role="button"
                        onClick={ ()=>this.onSortController('name', 1)}
                    ><i class="fa fa-sort-alpha-asc" aria-hidden="true"></i> A-Z</li>
                    <li className={ (sort.by ==='name' && sort.value === -1) ?"sort-item sort-selected" : 'sort-item'}
                        onClick={ ()=>this.onSortController('name', -1)}
                    > <i class="fa fa-sort-alpha-desc" aria-hidden="true"></i> Z-A</li>
                    <li className={ (sort.by ==='status' && sort.value ===-1) ? "sort-item sort-selected" : 'sort-item'}
                        onClick={ () => this.onSortController('status', -1)}
                    >Trang thai An</li>
                    <li className={ (sort.by ==='status' && sort.value ===1) ? "sort-item sort-selected" : 'sort-item'}
                        onClick={ () => this.onSortController('status', 1)}
                    >Trang thai Kich Hoat</li>

                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchTask: (infoSort) => {
            dispatch(actions.sortTask(infoSort));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort)