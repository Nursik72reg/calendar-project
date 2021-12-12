import React, {FC} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../../../lib/utils/rules";

const EventForm: FC = () => {
    return (
        <Form>
            <Form.Item
                label="Описание"
                name="description"
                rules={[rules.required()]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Дата дату"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker/>
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введите пароль пользователя')]}
            >
                <Select>
                    <Select.Option value='Gray'>Gray</Select.Option>
                </Select>
            </Form.Item>

            <Row justify='end'>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Добавить
                    </Button>
                </Form.Item>
            </Row>

        </Form>
    );
};

export default EventForm;