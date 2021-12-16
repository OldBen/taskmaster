import TaskDate from "./TaskDate";
import TaskLink from "./TaskLink";
import TaskPlugin from "./TaskPlugin";

class TaskFactory {
    static factory(type, desc, param) {
        switch (type) {
            case "link":
                return new TaskLink(desc, param)
            case "date":
                return new TaskDate(desc, param);
            case "plugin":
                return new TaskPlugin(desc, param);
            default:
                throw new Error("Type not supported... yet");
        }
    }
}

export default TaskFactory;