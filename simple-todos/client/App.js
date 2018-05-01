import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Tasks} from '../db/mongo.js';
class App extends Component{
  constructor(){
    super();
    this.state = {
      // getTasks :this.props.tasks
    }
  }
  // getTasks() {
  //   return [
  //     { _id: 1, text: 'This is task 1' },
  //     { _id: 2, text: 'This is task 2' },
  //     { _id: 3, text: 'This is task 3' },
  //   ];
  // }
  renderTasks() {
    return this.props.tasks.map((task) => (
      <li onDoubleClick={() => this.remove(task._id)} key={task._id}>{task.text}</li>
    ));
  }
  addlist(){
    let taskValue = document.getElementById("taskname").value;
    // var newObj = {_id : Math.random() , text : taskValue};
    Tasks.insert({
      text:taskValue,
      createdAt: new Date() // current time
    });
    // this.setState({getTasks : this.state.getTasks })
    document.getElementById("taskname").value = "";
  }
  remove(id){
    Tasks.remove(id);
      // let filterArr = this.state.getTasks.filter((item) => item._id != id);
      // this.setState({getTasks : filterArr })
  }
  render(){
    return(
      <div>
        <div>
          {this.renderTasks()}
        </div>
        <div>
          <input type="text" id="taskname" />
          <button onClick={this.addlist.bind(this)}> Add task </button>
          <div className="padT"><strong> Note : </strong> <i> To delete an item from the list double click on the item </i> </div>
        </div>
      </div>
    )
  }
}
export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App);
