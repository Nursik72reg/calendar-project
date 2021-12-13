import React, {FC} from 'react';
import { Route, Switch, Redirect } from "react-router";
import {privateRoutes, publicRoutes, RouteNames} from "../../helpers/utils/router";
import {useTypedSelector} from "../../lib/hooks/useTypedSelector";
import {useHistory} from "react-router-dom";


const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        <>
            {isAuth
            ?
                <Switch>
                    {privateRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               component={route.component}
                               key={route.path}
                        />
                    )}
                    <Redirect to={RouteNames.MAIN}/>
                </Switch>
            :
                <Switch>
                    {publicRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               component={route.component}
                               key={route.path}
                        />
                    )}
                    <Redirect to={RouteNames.LOGIN}/>
                </Switch>
            }
        </>
    );
};

export default AppRouter;


