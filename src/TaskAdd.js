import React from "react";

class TaskAdd extends React.Component{
    state = {
        taskDesc: ''
    }

    handleChange(e) {
        this.setState({
            taskDesc: e.target.value
        })
    }

    handleAdd(e) {
        console.log(this.state.taskDesc);
        this.props.callback(this.state.taskDesc);
        this.setState({
            taskDesc: ''
        });
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="TODO" name="taskDesc" onChange={this.handleChange.bind(this)}></input>
                <button onClick={this.handleAdd.bind(this)}>Add</button>
            </div>
        )
    }
}

export default TaskAdd;