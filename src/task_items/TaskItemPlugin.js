import React from "react";
import TaskItem from "./TaskItem";
import { IconButton, ListItem, ListItemText, Button } from "@mui/material";
import {CheckBox as CheckIcon} from "@mui/icons-material";

class TaskItemPlugin extends TaskItem {

    render() {
        return(
            <ListItem secondaryAction={
                <IconButton onClick={this.completeTask.bind(this)}>
                    <CheckIcon color="primary"></CheckIcon>
                </IconButton>
            }>
                <ListItemText>{this.props.name}</ListItemText>
                <Button variant="contained">A</Button>
                <Button variant="contained">B</Button>
                <Button variant="contained">C</Button>
            </ListItem>
        )
    }

}

export default TaskItemPlugin;