import {IUser} from "../../../models/IUser";
import {CalendarActionEnum, SetEventsAction, SetGuestsAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../index";
import UserService from "../../../api/UserService";


export const CalendarActionCreators = {
    setGuests: (guests: IUser[]): SetGuestsAction => ({
        type: CalendarActionEnum.SET_GUESTS,
        payload: guests
    }),

    setEvents: (events: IEvent[]):SetEventsAction => ({
        type: CalendarActionEnum.SET_EVENTS,
        payload:events
    }),

    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const {data} = await UserService.getUsers()
            dispatch(CalendarActionCreators.setGuests(data))
        }catch (e) {
            console.log(e)
        }

    },

    createEvent: (event: IEvent) =>  async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(CalendarActionCreators.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch (e) {
            console.log(e)
        }
    },

    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
            dispatch(CalendarActionCreators.setEvents(currentUserEvents));
        } catch (e) {
            console.log(e)
        }
    }
}
