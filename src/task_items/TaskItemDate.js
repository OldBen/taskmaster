import React from "react";
import TaskItem from "./TaskItem";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import {CheckBox as CheckIcon, CalendarToday} from "@mui/icons-material";

class TaskItemDate extends TaskItem {

    render() {
        return(
            <ListItem secondaryAction={
                <IconButton onClick={this.completeTask.bind(this)}>
                    <CheckIcon color="primary"></CheckIcon>
                </IconButton>
            }>
                <ListItemText>{this.props.name}</ListItemText>
                <CalendarToday/>
                <ListItemText>{this.props.date}</ListItemText>
            </ListItem>
        )
    }

}

export default TaskItemDate;