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

    render() {
        return(
            <div>
                <TaskList tasks={this.state.tasks}></TaskList>
                <TaskAdd callback={this.addTask.bind(this)}></TaskAdd>
            </div>
        )
    }
}

export default TaskView2;