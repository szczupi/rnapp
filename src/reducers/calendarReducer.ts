import { ICalendar, IHoliday } from '../stateModels/ICalendar';
import * as Actions from '../actions/calendarActions';
import * as actionTypes from '../actions/actionTypes';


function init(): ICalendar {
    return {
        dates: [],
        selectedDay: undefined
    };
}

export const calendarReducer = (state: ICalendar = init(), action: Actions.Actions): ICalendar => {
    switch (action.type) {
        case actionTypes.DAY_CHANGE: {
            return {...state, ...{ selectedDay: findHoliday(action.payload as Date, state.dates) }};
        }
        case actionTypes.HOLIDAYS_LOAD_SUCCESS: {
            const dates: Array<IHoliday> = action.payload as Array<IHoliday>;

            return {
                dates: dates,
                selectedDay: findHoliday(new Date(), dates)
            };
        }
        default: return state;
    }
};

const findHoliday = (date: Date, holidays: Array<IHoliday>): IHoliday => {
    return holidays.find((holiday: IHoliday) => holiday.date.toDateString() === date.toDateString())
    || {date: date, isFreeFriday: false, description: ''};
};