import Task from './Task';

class TaskPlugin extends Task {
    param;

    constructor(desc, param) {
        super();
        this.description = desc;
        this.param = param;
    }
}
export default TaskPlugin;