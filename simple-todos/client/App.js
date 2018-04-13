import React, { Component } from 'react';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      getTasks : [
        { _id: 1, text: 'task 1' },
        { _id: 2, text: 'task 2' },
        { _id: 3, text: 'task 3' },
      ]
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
    return this.state.getTasks.map((task) => (
      <li onDoubleClick={() => this.remove(task._id)} key={task._id}>{task.text}</li>
    ));
  }
  addlist(){
    let taskValue = document.getElementById("taskname").value;
    var newObj = {_id : Math.random() , text : taskValue};
    this.state.getTasks.push(newObj);
    this.setState({getTasks : this.state.getTasks })
    document.getElementById("taskname").value = "";
  }
  remove(id){
      let filterArr = this.state.getTasks.filter((item) => item._id != id);
      this.setState({getTasks : filterArr })
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
