import {IUser} from "../../../models/IUser";

export interface AuthState  {
    isAuth: boolean
    user: IUser;
    isLoading: boolean;
    error: string
}

export enum AuthActionEnum {
    SET_AUTH = 'setAuth',
    SET_ERROR = 'setError',
    SET_USER = 'setUser',
    SET_IS_LOADING = 'setIsLoading',
}

export interface SetAuthAction {
    type:AuthActionEnum.SET_AUTH;
    payload: boolean
}

export interface SetErrorAction {
    type:AuthActionEnum.SET_ERROR;
    payload: string
}

export interface SetUserAction {
    type:AuthActionEnum.SET_USER;
    payload: IUser
}

export interface SetIsLoadingAction {
    type:AuthActionEnum.SET_IS_LOADING;
    payload: boolean
}
export type AuthAction =
    SetAuthAction |
    SetErrorAction |
    SetUserAction |
    SetIsLoadingAction