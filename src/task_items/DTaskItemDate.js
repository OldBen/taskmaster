import { DTaskItem } from './DTaskItem'

class DTaskItemDate extends DTaskItem {
    preRender() {
        this.extraData += "<CalendarToday/><ListItemText>{this.props.date}</ListItemText>";
    }
}