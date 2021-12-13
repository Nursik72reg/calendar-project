import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useTypedSelector} from "../../lib/hooks/useTypedSelector";
import {useActions} from "../../lib/hooks/useActions";

const NavBar: FC = () => {
    const {logout} = useActions()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth ?
                    <>
                        <div>{user?.userName}</div>
                        <Menu theme="dark" mode='horizontal' selectable={false}>

                            <Menu.Item onClick={()=>logout()} key={1}>Выйти</Menu.Item>
                        </Menu>
                    </>

                    :
                    <Menu theme="dark" mode='horizontal' selectable={false}>
                        <Menu.Item key={1}>Логин</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default NavBar;