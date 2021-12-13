import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../index";
import axios from "axios";
import UserService from "../../../api/UserService";


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction  => ({
        type: AuthActionEnum.SET_USER,
        payload: user
    }),

    setIsAuth: (auth: boolean): SetAuthAction => ({
        type:AuthActionEnum.SET_AUTH,
        payload:auth
    }),

    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING,
        payload: isLoading
    }),

    setError: (error: string): SetErrorAction => ({
        type:AuthActionEnum.SET_ERROR,
        payload:error
    }),

    login: (userName: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const {data} = await UserService.getUsers()
            const mockUser:IUser = data.find((user: IUser) => user.userName === userName && user.password === password)
            if(mockUser) {
                localStorage.setItem('isAuth', 'true')
                localStorage.setItem('userName', mockUser.userName)
                dispatch(AuthActionCreators.setUser(mockUser))
                dispatch(AuthActionCreators.setIsAuth(true))
            }else {
                dispatch(AuthActionCreators.setError("Некорректные данные"))
            }
            dispatch(AuthActionCreators.setIsLoading(false))
        }catch (e) {
            dispatch(AuthActionCreators.setError("error"))
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('isAuth')
        localStorage.removeItem('userName')
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser({} as IUser))
    }
}



