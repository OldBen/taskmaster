import Task from './Task';

class TaskDate extends Task {
    date;

    constructor(desc, date) {
        super();
        this.description = desc;
        this.date = date;
    }
}
export default TaskDate;