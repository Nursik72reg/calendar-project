import React, {FC} from 'react';
import {Calendar} from "antd";
import {ICalendarProps} from "./types";
import {Moment} from "moment";
import {dateConverter} from "../../helpers/utils/dateСonverter";

const CalendarPicker: FC <ICalendarProps> = ({events}) => {
    function dateCellRender(value: Moment) {
        const formatedDate = dateConverter(value.toDate());
        const currentDayEvents = events.filter(ev => ev.date === formatedDate);
        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        );
    }


    return (
        <Calendar dateCellRender={dateCellRender}/>
    );
};

export default CalendarPicker;