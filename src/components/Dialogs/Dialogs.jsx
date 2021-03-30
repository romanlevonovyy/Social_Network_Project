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

    let dialogsData = [
        { id: 1, name: 'Roman' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Vlad' },
        { id: 4, name: 'Maks' },
        { id: 5, name: 'Oleg' }
    ]

    let dialogsElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
    ];

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How old are you?' },
        { id: 4, message: 'By' },
        { id: 5, message: 'Hello' }
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
    
                {dialogsElements }
                

                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} /> */}
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs;