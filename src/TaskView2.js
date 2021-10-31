import React from "react";
import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";

class TaskView2 extends React.Component{
    state = {
        tasks: []
    }

    addTask(desc) {
        if (!desc) return;
        this.setState({
            tasks: [...this.state.tasks, desc]
        });
    }

    completeTask(index) {
        let newList = this.state.tasks;
        newList.splice(index, 1)
        this.setState({
            tasks: newList
        })
    }

    render() {
        return(
            <div id="core">
                <TaskList tasks={this.state.tasks} callbackComplete={this.completeTask.bind(this)}></TaskList>
                <TaskAdd callbackAdd={this.addTask.bind(this)}></TaskAdd>
            </div>
        )
    }
}

export default TaskView2;