import {IUser} from "../../../models/IUser";
import {ICalendar} from "../../../models/ICalendar";
import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "../auth/types";

export interface CalendarState  {
    guests: IUser[],
    events: ICalendar[]
}

export enum CalendarActionEnum {
    SET_GUESTS = 'setGuests',
    SET_EVENTS = 'setEvents',
}


export interface SetGuestsAction {
    type:CalendarActionEnum.SET_GUESTS;
    payload: IUser[]
}


export interface SetEventsAction {
    type:CalendarActionEnum.SET_EVENTS;
    payload: ICalendar[]
}

export type CalendarAction =
    SetGuestsAction |
    SetEventsAction