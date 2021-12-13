import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../../../helpers/utils/rules";
import {IEventsFormProps} from "./types";
import {IEvent} from "../../../models/IEvent";
import {dateConverter} from "../../../helpers/utils/dateСonverter";
import {Moment} from "moment";
import {useTypedSelector} from "../../../lib/hooks/useTypedSelector";

const EventForm: FC<IEventsFormProps> = ({guests,submit}) => {
    const [events, setEvents] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: ''
    } as IEvent)
    const {user} = useTypedSelector(state => state.auth)

    const selectDate = (date:Moment | null) => {
        if(date) setEvents({...events, date: dateConverter(date.toDate())})
    }
    const submitForm = () => {
        submit({...events,author:user.userName })
    }
    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описание"
                name="description"
                rules={[rules.required()]}
            >
                <Input value={events.description}
                       onChange={(e)=>setEvents({...events, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label="Дата дату"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker onChange={(date)=>selectDate(date)}/>
            </Form.Item>

            <Form.Item
                label="Выберите гостя"
                name="guests"
                rules={[rules.required('Введите пароль пользователя')]}
            >
                <Select onChange={(guest:string)=>setEvents({...events, guest})}>
                    {guests.map(guests=> <Select.Option key={guests.userName} value={guests.userName}>{guests.userName}</Select.Option>)}
                </Select>
            </Form.Item>

            <Row justify='end'>
                <Form.Item >
                    <Button  type="primary" htmlType="submit">
                        Добавить
                    </Button>
                </Form.Item>
            </Row>

        </Form>
    );
};

export default EventForm;