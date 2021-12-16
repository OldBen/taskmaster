import React from "react";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import {CheckBox as CheckIcon} from "@mui/icons-material";

class TaskItemDecorator extends React.Component {
    delegate;
    extraData;

    constructor(delegate) {
        this.delegate = delegate;
    }

    completeTask() {
        this.props.callbackComplete(this.props.index);
    }

    preRender() {

    }

    postRender() {

    }

    render() {
        this.preRender();
        this.delegate.render();
        this.postRender();
    }
}

export default DTaskItem;