import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";

export interface IEventsFormProps{
    guests:IUser[]
    submit: (event:IEvent)=>void
}