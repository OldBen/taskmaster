import React from "react";

class TaskView extends React.Component {
    state = {
        taskDesc: '',
        tasks: [],
    }

    handleChange(e) {
        this.setState({
            taskDesc: e.target.value
        })
    }

    handleAdd(e) {
        if (!this.state.taskDesc) return;
        this.setState({
            taskDesc: '',
            tasks: [...this.state.tasks, this.state.taskDesc]
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.tasks.map((tasks, i) => (
                        <Task key={`${tasks}_${i}`} name={tasks}/>
                    ))}
                </ul>
                <input type="text" placeholder="TODO" onChange={this.handleChange.bind(this)} name="taskDesc"/>
                <button onClick={this.handleAdd.bind(this)}>Add</button>
            </div>
        );
    }
}

class Task extends React.Component{
    render() {
        return (
            <li><h4>{this.props.name}</h4></li>
        )
    }
}

export default TaskView;