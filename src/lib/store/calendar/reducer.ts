import {CalendarAction, CalendarActionEnum, CalendarState} from "./types";


const initialState: CalendarState = {
    guests: [],
    events: []
}

export default function calendarReducer (state = initialState, action: CalendarAction) : CalendarState {
        switch (action.payload){
            case CalendarActionEnum.SET_GUESTS:
                return {
                    ...state,
                    guests: action.payload
                }
            case CalendarActionEnum.SET_EVENTS:
                return {
                    ...state,
                    events: action.payload
                }

            default:
                return this.state

        }
}