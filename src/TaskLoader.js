import axios from "axios";
import TaskFactory from "./models/TaskFactory";

class TaskLoader {
    loadPreset() {
        return [
            TaskFactory.factory('date', 'Task with date', '2021-12-31'),
            TaskFactory.factory('link', 'Task with link', 'https://www.youtube.com/watch?v=xvFZjo5PgG0'),
            TaskFactory.factory('plugin', 'Task for plugin', 'ABCD'),
        ];
    }
     loadFromApi() {
        const client = axios.create({baseURL: "http://localhost:8080/tasks/"});
        const r1 = client.get("1");
        const r2 = client.get("2");
        const r3 = client.get("3");
        debugger;
        return Promise.all([r1, r2, r3])
            .then((res) => {
                let tasks = [];
                res.forEach(element => {
                    tasks.push(element.data);
                });
                return tasks; 
            });
        }
}

export default TaskLoader;