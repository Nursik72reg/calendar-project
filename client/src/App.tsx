import React, {useEffect} from 'react';
import 'antd/dist/antd.css'
import {Layout} from "antd";
import NavBar from "./components/navBar";
import AppRouter from "./components/appRouter";
import './App.css'
import {useActions} from "./lib/hooks/useActions";
import {IUser} from "./models/IUser";

const App = () => {
    const {setUser, setIsAuth} = useActions()
    useEffect(()=>{
        if(localStorage.getItem('isAuth')){
            setUser({userName: localStorage.getItem('userName' || '') } as IUser )
            setIsAuth(true)
        }
    },[])


    return (
        <Layout>
            <NavBar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>

    );
};

export default App;