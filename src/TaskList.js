import React from "react";

class TaskList extends React.Component{

    render() {
        return(
            <div>
                <ul>
                    {this.props.tasks.map((tasks, i) => (
                        <Task2 key={`${tasks}_${i}`} name={tasks}/>
                    ))}
                </ul>
            </div>
        )
    }
}

class Task2 extends React.Component{
    render() {
        return (
            <li><h4>{this.props.name}</h4></li>
        )
    }
}

export default TaskList;