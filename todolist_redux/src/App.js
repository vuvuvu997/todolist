import React, { Component} from 'react'
import './App.css';
import FormTask from './components/FormTask'
import Control from './components/Control'
import ListItem from './components/ListItem'
import * as actions from './actions/index'
import {connect} from 'react-redux'

var randomstring = require("randomstring");

class App extends Component {
  
  Generator = () =>{
    let tasks = [
      {
        id: randomstring.generate(), 
        name: 'Hoc lap trinh React JS', 
        status: true
      },
      {
        id: randomstring.generate(), 
        name: 'Hoc lap trinh Agular JS', 
        status: false
      },
      {
        id: randomstring.generate(), 
        name: 'Hoc lap trinh Vue JS', 
        status: true
      }
    ];

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  changeLayout = ()=> {
    if(this.props.edittingTask.id) {
      this.props.getUpdateTask({
        id: '',
        name: '',
        status: true
      });

      this.props.oppenForm();
    } else {
      this.props.toggleForm();
    }
  }

  render() {
    let isDisplayForm = this.props.isDisplayForm;

    let eleFormTask = isDisplayForm === true ? 
          <FormTask/> : '';

    return (
      <div className="container mgt-30">
        <div className="header">
          <h1>Quan ly cong viec</h1>
        </div>
        <div className="body">
          <div className="row">
            <div className={ isDisplayForm ? 'col-4': 'hidden' }>
              { eleFormTask }
            </div>
            <div className={ isDisplayForm ? 'col-8' : 'col-12'}>
              <div className="mgb-5">
                <button className="btn btn-primary" onClick={this.changeLayout }><i className="fa fa-plus" aria-hidden="true"></i> Them cong viec</button>
                <button className="btn btn-warning" onClick={ this.Generator}> Generator</button>
              </div>
              <Control />
              <ListItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm : state.isDisplayForm,
    edittingTask: state.edittingTask
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleForm : ()=>{
      dispatch(actions.toggleForm());
    },
    oppenForm: ()=> {
      dispatch(actions.oppenForm());
    },
    getUpdateTask : (task)=> {
      dispatch(actions.getUpdateTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
