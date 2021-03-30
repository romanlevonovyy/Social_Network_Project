import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialog}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}


const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}



const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Roman' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Vlad' },
        { id: 4, name: 'Maks' },
        { id: 5, name: 'Oleg' }
    ]


    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How old are you?' },
        { id: 4, message: 'Bye' },
        { id: 5, message: 'Hello' }
    ]


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(message => <Message message={message.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;