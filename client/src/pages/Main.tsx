import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import CalendarPicker from "../components/calendar";
import EventForm from "../components/forms/event";
import {useActions} from "../lib/hooks/useActions";
import {useTypedSelector} from "../lib/hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Main: FC = () => {
    const [visibleModal, setVisibleModal] = useState(false)
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const {guests, events} = useTypedSelector(state => state.calendar)
    const {user} = useTypedSelector(state => state.auth)
    useEffect(()=>{
        fetchGuests()
        fetchEvents(user.userName)
    },[])

    const onClickBtn = () => {
        setVisibleModal(true)
    }

    const cancelModal = () => {
        setVisibleModal(false)
    }

    const addNewEvent = (event:IEvent) => {
        createEvent(event)
        cancelModal()
    }

    return (
        <Layout>
            <Row justify='center'>
                <Button onClick={onClickBtn}>Добавить событе</Button>
            </Row>
            <CalendarPicker events={events}/>
            <Modal
                title="Добавить событие"
                visible={visibleModal}
                footer={null}
                onCancel={cancelModal}
            >
                <EventForm guests={guests} submit={addNewEvent}/>
            </Modal>
        </Layout>
    );
};

export default Main