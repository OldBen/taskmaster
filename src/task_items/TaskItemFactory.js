import React from "react";
import Task from "../models/Task";
import TaskItemDate from "./TaskItemDate";
import TaskItemLink from "./TaskItemLink";
import TaskItemPlugin from "./TaskItemPlugin";

class TaskItemFactory extends React.Component {
    static factory(task) {
        //var props = {};
        switch(task.constructor.name) {
            case "TaskDate":
                //props = {name: task.description, date: task.date};
                return <TaskItemDate name={task.description} date={task.date}/>
            case "TaskLink":
                //props = {name: task.description, link: task.link}
                return <TaskItemLink name={task.description} link={task.link}/>
            case "TaskPlugin":
                //props = {name: task.description}
                return <TaskItemPlugin name={task.description}/>
            default:
                throw new Error("Task type not supported");
        }
    }
}

export default TaskItemFactory;