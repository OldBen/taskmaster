import React, {useEffect} from "react";
import axios from "axios";
import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";
import TaskFactory from "./models/TaskFactory";
import TaskLoader from "./TaskLoader";
import Task from "./models/Task";

class TaskView extends React.Component{
    state = {
        tasks: []
    }

    componentDidMount() {
        this.props.loader.loadFromApi().then(res => {
            this.setState({
                tasks: res,
            });        
        });
    }

    addTask(desc) {
        if (!desc) return;
        let newTask = {
            id: this.state.tasks.length + 1,
            description: desc,
            datetime: null,
            plugin: null,
            url: null
        };
        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
        const client = axios.create({baseURL: "http://localhost:8080/__admin/mappings/"});
        const mapping = {
            mappings: [
                {
                  "request": {
                    "method": "GET",
                    "url": `/tasks/${newTask.id}`
                  },
                  "response": {
                    "status": 200,
                    "jsonBody":{
                        "id": `${newTask.id}`,
                        "description": `${newTask.description}`,
                        "datetime": null,
                        "plugin": null,
                        "url": null
                    },
                  }
                },
              ],
            
              "importOptions": {
                "duplicatePolicy": "IGNORE",
                "deleteAllNotInImport": false
              }
        };
        client.post('import', mapping);
    }

    completeTask(index) {
        let newList = this.state.tasks;
        newList.splice(index, 1)
        this.setState({
            tasks: newList
        })
        const client = axios.create({baseURL: "http://localhost:8080/__admin/mappings/"});
        
    }

    render() {
        return(
            <div id="core">
                <TaskList tasks={this.state.tasks} callbackComplete={this.completeTask.bind(this)}></TaskList>
                <TaskAdd callbackAdd={this.addTask.bind(this)}></TaskAdd>
            </div>
        )
    }

    
}

export default TaskView;