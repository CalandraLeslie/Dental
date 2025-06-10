import React, { useState } from 'react';
import Calendar, { CalendarProps as ReactCalendarProps } from 'react-calendar';
type Value = ReactCalendarProps['value'];
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

interface CalendarProps {
  onDateSelect: (date: Date) => void;
}

const AppointmentCalendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const [value, setValue] = useState<Value>(null);

  const handleDateChange = (value: Value) => {
    setValue(value);
    if (value instanceof Date) {
      onDateSelect(value);
    }
  };
  return (
    <div className="appointment-calendar">
      <Calendar
        onChange={handleDateChange}
        value={value}
        minDate={new Date()}
      />
    </div>
  );
};

export default AppointmentCalendar;