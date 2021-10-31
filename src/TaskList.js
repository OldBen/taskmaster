import { List } from "@mui/material";
import TaskItem from "./TaskItem";
import React from "react";

class TaskList extends React.Component{

    render() {
        return(
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {this.props.tasks.map((tasks, i) => (
                        <TaskItem key={`${tasks}_${i}`} index={i} name={tasks} callbackComplete={this.props.callbackComplete}/>
                    ))}
            </List>
        )
    }
}

export default TaskList;