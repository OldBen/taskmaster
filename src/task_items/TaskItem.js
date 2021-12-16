import React from "react";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import {CheckBox as CheckIcon} from "@mui/icons-material";

class TaskItem extends React.Component {

    completeTask() {
        this.props.callbackComplete(this.props.index);
    }

    render() {
        return (
            <ListItem secondaryAction={
                <IconButton onClick={this.completeTask.bind(this)}>
                    <CheckIcon color="primary"></CheckIcon>
                </IconButton>
            }>
                <ListItemText>{this.props.name}</ListItemText>
            </ListItem>
        )
    }
}

export default TaskItem;