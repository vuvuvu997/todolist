import React, { Component} from 'react'
import {connect} from 'react-redux';
import * as actions from './../actions/index'

class Item extends Component {
    onCloseForm = ()=>{
        this.props.isClose();
    };

    updatedStatus = ()=>{
        this.props.updatedStatus(this.props.id);
    }

    isDeleted = ()=>{
        this.props.deleteTask(this.props.id);
    }

    isUpdated = ()=>{
        this.props.oppenForm();
        this.props.getUpdateTask(this.props.task);
    }
    
    render() {
        return(
            <tr>
                <td>{ this.props.index + 1}</td>
                <td>{ this.props.name }</td>
                <td>
                    <span   className={ this.props.status ? 'state-true' : 'state-false' }
                            onClick={ this.updatedStatus }
                    >{ this.props.status ? 'Kich hoat' : 'An'}</span>
                </td>
                <td>
                    <div className="form-group--ct">
                        <button type="button" 
                                className="btn btn-primary" 
                                onClick={ this.isUpdated }
                        ><i class="fa fa-pencil" aria-hidden="true"></i> Sua</button>
                        <button className="btn btn-warning" 
                                type="button" 
                                onClick={ this.isDeleted }
                        ><i class="fa fa-trash" aria-hidden="true"></i> Xoa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatedStatus: (id)=>{
            dispatch(actions.updateStatus(id))
        },
        deleteTask: (id)=> {
            dispatch(actions.deleteTask(id))
        },
        getUpdateTask: (task)=> {
            dispatch(actions.getUpdateTask(task));
        },
        oppenForm : ()=>{
            dispatch(actions.oppenForm());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Item)