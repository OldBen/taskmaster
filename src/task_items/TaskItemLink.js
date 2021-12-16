import React from "react";
import TaskItem from "./TaskItem";
import { IconButton, ListItem, ListItemText, Link } from "@mui/material";
import {CheckBox as CheckIcon, Link as LinkIcon} from "@mui/icons-material";

class TaskItemLink extends TaskItem {

    render() {
        return (
            <ListItem secondaryAction={
                <IconButton onClick={this.completeTask.bind(this)}>
                    <CheckIcon color="primary"></CheckIcon>
                </IconButton>
            }>
                <ListItemText>{this.props.name}</ListItemText>
                <Link href={this.props.link}>Link</Link>
            </ListItem>
        )
    }

}

export default TaskItemLink;