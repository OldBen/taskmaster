import React from "react";
import TaskGenericComponent from "./TaskGeneric";
import {withDate} from "./WithDate";
import {withLink} from "./WithLink";


class TaskComponent extends React.Component {
    WrappedComponent;
    task;

    constructor(props) {
        super(props);
        debugger;
        this.task = props.task;
        this.WrappedComponent = TaskGenericComponent;
        if(this.task.datetime !== null) {
            this.WrappedComponent = withDate(this.task.datetime)(this.WrappedComponent);
        }
        if(this.task.url !== null) {
            this.WrappedComponent = withLink(this.task.url)(this.WrappedComponent);
        }
        
    }

    render() {
        return (<this.WrappedComponent callbackComplete={this.props.callbackComplete} task={this.task} />)
    }
}
 export default TaskComponent;
