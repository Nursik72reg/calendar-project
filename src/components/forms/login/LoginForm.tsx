import React, {FC} from 'react';
import {Button, Form, Input, Row} from "antd";
import {rules} from "../../../lib/utils/rules";
import {useTypedSelector} from "../../../lib/hooks/useTypedSelector";
import {IUser} from "../../../models/IUser";
import {useActions} from "../../../lib/hooks/useActions";

const LoginForm:FC = () => {
    const {login} = useActions()
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const submit = ({userName, password}:IUser) => {
        login(userName, password)
    }
    return (
        <Form
            className='form'
            onFinish={submit}
        >
            <Form.Item
                label="Имя пользователя"
                name="userName"
                rules={[rules.required('Введите логин пользователя')]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введите пароль пользователя')]}
            >
                <Input.Password />
            </Form.Item>


            <Row justify='center'>
                <Form.Item >
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Войти
                    </Button>
                </Form.Item>
                {error && <div>{error}</div>}
            </Row>

        </Form>
    );
};

export default LoginForm;