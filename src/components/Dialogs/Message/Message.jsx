import classes from './Message.module.css';

function Message(props) {
    return (
        <div className={classes.message_item}>
            {props.message}
        </div>
    );
}

export default Message;