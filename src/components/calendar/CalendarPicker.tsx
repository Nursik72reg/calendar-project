import React, {FC} from 'react';
import {Calendar} from "antd";
import {ICalendarProps} from "./types";

const CalendarPicker: FC <ICalendarProps> = (event) => {
    return (
        <Calendar/>
    );
};

export default CalendarPicker;