import { List, ListItemText } from "@mui/material";
import React from "react";

class TaskList extends React.Component{

    render() {
        return(
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {this.props.tasks.map((tasks, i) => (
                        <Task2 key={`${tasks}_${i}`} name={tasks}/>
                    ))}
            </List>
        )
    }
}

class Task2 extends React.Component{
    render() {
        return (
            <ListItemText>{this.props.name}</ListItemText>
        )
    }
}

export default TaskList;