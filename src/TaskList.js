import { List } from "@mui/material";
import TaskComponent from "./task_items/decorators/TaskComponent";
import TaskItem from "./task_items/TaskItem";
import TaskItemFactory from "./task_items/TaskItemFactory";
import React from "react";

class TaskList extends React.Component{

    render() {
        return(
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {this.props.tasks.map((task, i) => (
                        <TaskComponent key={`${i}`} index={i} task={task} callbackComplete={this.props.callbackComplete}/>
                    ))}
            </List>
        )
    }
}

export default TaskList;