import React from "react";
import { Button, TextField } from "@mui/material";

class TaskAdd extends React.Component{
    state = {
        taskDesc: ''
    }

    handleChange(e) {
        this.setState({
            taskDesc: e.target.value
        })
    }

    handleAdd(e) {
        this.props.callback(this.state.taskDesc);
        this.setState({
            taskDesc: ''
        });
    }

    render() {
        return(
            <div>
                <TextField variant="standard" placeholder="TODO" onChange={this.handleChange.bind(this)}></TextField>
                <Button variant="contained" onClick={this.handleAdd.bind(this)}>Add</Button>
            </div>
        )
    }
}

export default TaskAdd;