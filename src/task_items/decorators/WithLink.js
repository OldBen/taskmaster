import React from "react";
import { ListItemText, Link } from "@mui/material";
import { Link as LinkIcon } from "@mui/icons-material";

const withLink = (link) => (WrappedComponent) => {
    class WithLink extends React.Component {

        render() {
            return(<div>
                <WrappedComponent {...this.props} />
                <ListItemText>{this.props.name}</ListItemText>
                <LinkIcon/>
                <Link href={link}>Link</Link>
            </div>);
        }
    }
    return WithLink;
}

export {withLink};