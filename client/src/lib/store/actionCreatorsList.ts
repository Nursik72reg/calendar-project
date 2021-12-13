import {AuthActionCreators} from "./auth/actions";
import {CalendarActionCreators} from "./calendar/actions";

export const allActionCreators = {
    ...AuthActionCreators,
    ...CalendarActionCreators
}