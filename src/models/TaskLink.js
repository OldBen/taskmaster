import Task from './Task';

class TaskLink extends Task {
    link;

    constructor(desc, link) {
        super();
        this.description = desc;
        this.link = link;
    }
}
export default TaskLink;