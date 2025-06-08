import React, { useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const Calendar: React.FC = () => {
    const [date, setDate] = useState<Date | null>(null);

    const handleDateChange = (selectedDate: Date) => {
        setDate(selectedDate);
    };

    return (
        <div className="calendar-container">
            <h2>Select an Appointment Date</h2>
            <ReactCalendar
                onChange={handleDateChange}
                value={date}
                minDate={new Date()}
                className="custom-calendar"
            />
            {date && (
                <div className="selected-date">
                    <p>You have selected: {date.toDateString()}</p>
                </div>
            )}
        </div>
    );
};

export default Calendar;