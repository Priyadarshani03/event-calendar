import { startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths } from "date-fns";

export const getDaysInMonth = (month, year) => {
  const start = startOfMonth(new Date(year, month));
  const end = endOfMonth(new Date(year, month));
  return eachDayOfInterval({ start, end });
};

export const changeMonth = (date, offset) => {
  return offset > 0 ? addMonths(date, offset) : subMonths(date, -offset);
};

export const isSameDay = (date1, date2) =>
  date1.toDateString() === date2.toDateString();
