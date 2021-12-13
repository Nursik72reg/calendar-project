import {IRouter} from "./types";
import Login from "../../../pages/Login";
import Main from "../../../pages/Main";

export enum RouteNames {
    LOGIN='/login',
    MAIN = "/"
}

export const publicRoutes: IRouter[] = [
    {path:RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRouter[] = [
    {path:RouteNames.MAIN, exact: true, component: Main}
]