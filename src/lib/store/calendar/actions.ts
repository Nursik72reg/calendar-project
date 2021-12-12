import {IUser} from "../../../models/IUser";
import {CalendarActionEnum} from "./types";
import {ICalendar} from "../../../models/ICalendar";
import {AppDispatch} from "../index";


export const CalendarActionCreators = {
    setGuests: (guests: IUser[]) => ({
        type: CalendarActionEnum.SET_GUESTS,
        payload:guests
    }),

    setEvents: (events: ICalendar[]) => ({
        type: CalendarActionEnum.SET_EVENTS,
        payload:events
    }),

    fetchGuests: () => async (dispatch: AppDispatch) => {

    }

}
