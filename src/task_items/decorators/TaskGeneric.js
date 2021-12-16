import React from "react";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import {CheckBox as CheckIcon} from "@mui/icons-material";

class TaskGenericComponent extends React.Component {
    task;
    constructor(props) {
        super(props);
        this.task = props.task;
    }

    completeTask() {
        this.props.callbackComplete(this.props.index);
    }

    render() {
        console.log(this.task);
        return (
            <ListItem secondaryAction={
                <IconButton onClick={this.completeTask.bind(this)}>
                    <CheckIcon color="primary"></CheckIcon>
                </IconButton>
            }>
                <ListItemText>{this.task.description}</ListItemText>
            </ListItem>
        );
    }
}

export default TaskGenericComponent;