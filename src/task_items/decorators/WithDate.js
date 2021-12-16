import React from "react";
import { ListItemText } from "@mui/material";
import {CalendarToday} from "@mui/icons-material";

const withDate = (date) => (WrappedComponent) => {
     class TaskWithDateComponent extends React.Component {
        render() {
            return (<div>
                <WrappedComponent {...this.props} />
                <CalendarToday/>
                <ListItemText>{date}</ListItemText>
            </div>)
        }
    }

    return TaskWithDateComponent;
}

export {withDate};