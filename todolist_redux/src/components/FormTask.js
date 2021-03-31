import React, { Component} from 'react'
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class FormTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    }
  }

  onCloseBtn = ()=> {
    this.props.closeForm();
  };

  componentWillMount() {
    let {edittingTask} = this.props;
    if(edittingTask) {
      this.setState({
        id: edittingTask.id,
        name: edittingTask.name,
        status: edittingTask.status
      });
    } else {
      
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.edittingTask) {
      this.setState({
        id: nextProps.edittingTask.id,
        name: nextProps.edittingTask.name,
        status: nextProps.edittingTask.status
      });
    } else if (nextProps.edittingTask === null) {
      this.setState({
        id: "",
        name: "",
        status: true
      });
    }
  }

  onChangeInput = (event)=>{
    let target = event.target;
    let value = target.value;
    let name = target.name;
    if(name === 'status') {
      value = value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    });
    
  }

  onSubmit = (event)=> {
    event.preventDefault();
    if(this.state.id === '') {
      this.props.addTask(this.state);
    } else {
      this.props.updateTask(this.state);
    }

    //sau khi submit thì setState lại edittingTask
    this.props.getUpdateTask({
      id: '',
      name: '',
      status: true
    });

    this.onClearned();
    this.onCloseBtn();
  }

  onClearned = ()=>{
    this.setState({
      id: '',
      name: '',
      status: false
    });
  }
  
  render() {
      return (
          <div>
              <div className="form-container">
            <div className="mgb-5">
                {this.state.id ? 'Cap nhat Cong viec' : 'Them Cong viec'}
                <span className="btn--close" onClick={ this.onCloseBtn }>
                  <i class="fa fa-times-circle-o" aria-hidden="true" ></i>
                </span>
                
            </div>
            <form className="form-contain" onSubmit={this.onSubmit}>
              <div className="mgb-5 form-group">
                <label for="name">Ten:</label><br/>
                <input  id="name" type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.onChangeInput}>
                </input>
              </div>
              <div className="mgb-5 form-group">
                <label for="state">Trang thai:</label><br/>
                <select id="state"
                        name="status"
                        value={ this.state.status } 
                        onChange={ this.onChangeInput }>
                  <option value={ true }>Kich hoat</option>
                  <option value={ false }>An</option>
                </select>
              </div>
              <div className="mgb-5 form-group--ct">
                <button type="submit" className="btn btn-primary" 
                ><i class="fa fa-plus" aria-hidden="true"></i> Luu lai</button>
                <button className="btn btn-warning" 
                        type="button"
                        onClick={ this.onClearned }
                ><i class="fa fa-times" aria-hidden="true"> Cleared</i></button>
              </div>
            </form>
          </div>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    edittingTask: state.edittingTask
  }
}
// mapStateToProps : chuyển state từ store thành props của component
// mapDispatchToProps : chuyển các action thành props. (truyen ve cho store)
const mapDispatchToProps = (dispatch) => {
  return {
    oppenForm: () => {
      dispatch(actions.oppenForm());
    },
    closeForm: () => {
      dispatch(actions.closeForm());
    },
    addTask: (task) => {
      dispatch(actions.addTask(task));
    },
    updateTask: (task) => {
      dispatch(actions.updateTask(task));
    },
    getUpdateTask : (task)=> {
      dispatch(actions.getUpdateTask(task));
    }

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTask)