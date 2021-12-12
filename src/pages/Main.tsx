import React, {FC, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import CalendarPicker from "../components/calendar";
import EventForm from "../components/forms/event";

const Main: FC = () => {
    const [visibleModal, setVisibleModal] = useState(false)
    const onClickBtn = () => {
        setVisibleModal(true)
    }

    const cancelModal = () => {
        setVisibleModal(false)
    }

    return (
        <Layout>
            <Row justify='center'>
                <Button onClick={onClickBtn}>Добавить событе</Button>
            </Row>
            <CalendarPicker event={[]}/>
            <Modal
                title="Добавить событие"
                visible={visibleModal}
                footer={null}
                onCancel={cancelModal}
            >
                <EventForm/>
            </Modal>
        </Layout>
    );
};

export default Main