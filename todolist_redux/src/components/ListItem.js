import React, { Component} from 'react'
import Item from './Item'
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class Control extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterName: '', 
      filterStatus: -1
    }
  }

  onChange = (event)=> {
    let target = event.target;
    let name = target.name;
    let value = target.value; 
    this.setState({ 
      [name]: value
    });
    
    this.props.filterTask({
      name: name === 'filterName' ? target.value : this.state.filterName,
      status: name==='filterStatus'? parseInt(target.value) : this.state.filterStatus
    });
  }

  render() {
    let {tasks, filterInfo, searchTask, sortTask} = this.props;

    if(filterInfo) {
      if(filterInfo.name) {
        tasks = tasks.filter((task)=> {
          return task.name.toLowerCase().indexOf(filterInfo.name.toLowerCase()) !== -1;
        });
      }
      if(filterInfo.status !== -1) {
        tasks = tasks.filter((task)=>{
          return task.status === (filterInfo.status === 1 ? true : false);  
        });
      }
    }

    if(searchTask) {
      tasks = tasks.filter((task)=>{
        return task.name.toLowerCase().indexOf(searchTask.toLowerCase()) !== -1;
      });
    }

    if(sortTask.name === 'name') {
      console.log('heelo');
      tasks = tasks.sort((a, b) => {
        if( a.name < b.name) {
          return -sortTask.status;
        } else {
          return sortTask.status;
        }
      });
    } else if (sortTask.name === 'status') {
      tasks = tasks.sort((a, b) => {
        if( a.status < b.status) {
          return sortTask.status;
        } else {
          return -sortTask.status;
        }
      });
    }

    let eles = tasks.map((task, index) => {
      return (
        <Item key={ task.id } 
              task={task}
              id={ task.id }
              index={ index }
              name={ task.name }
              status={ task.status}
        />);
    })

      return(
          <table className="mgt-5"> 
            <thead>
              <th>STT</th>
              <th>Ten</th>
              <th>Trang thai</th>
              <th>Hanh dong</th>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <form>
                    <div className="form-group">
                      <input  type="text" name="filterName"
                              onChange={ this.onChange }
                              value={this.state.filterName}
                      ></input>
                    </div>
                  </form>
                </td>
                <td>
                  <select name="filterStatus" 
                          value={this.state.filterStatus}
                          onChange={ this.onChange }
                  > 
                    <option value="-1">Tat ca</option>
                    <option value="0">An</option>
                    <option value="1">Kich hoat</option>
                  </select>
                </td>
                <td></td>
              </tr>
              { eles }
              
            </tbody>
          </table>
      );
  }
}

const mapStateToProps = (state)=>{
  return {
    tasks: state.tasks,
    filterInfo: state.filterInfo,
    searchTask: state.searchTask,
    sortTask: state.sortTask
  }
}

const mapDispatchToPro = (dispatch)=>{
  return {
    filterTask: (info)=> {
      dispatch(actions.filterTask(info));
    }
  }
}

// eslint-disable-next-line no-undef
export default connect(mapStateToProps, mapDispatchToPro)(Control)