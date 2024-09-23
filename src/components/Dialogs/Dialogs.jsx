import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.container_dialogs}>
                <DialogItem name='Kirill' id='1'/>
                <DialogItem name='Nikita' id='2'/>
                <DialogItem name='Anton' id='3'/>
                <DialogItem name='Vasilisa' id='4'/>
                <DialogItem name='Valera' id='5'/>
                <DialogItem name='Vladimir' id='6'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hi!'/>
                <Message message='Hi! How are you?'/>
                <Message message='I`m Good!'/>
            </div>
        </div>
    );
}

export default Dialogs;