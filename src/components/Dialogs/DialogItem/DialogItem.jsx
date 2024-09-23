import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <div className={classes.dialog_item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;