import { ICalendar } from '../stateModels/ICalendar';
import * as Actions from '../actions/calendarActions';
import * as actionTypes from '../actions/actionTypes';

function init(): ICalendar {
    return {
        dates: [{
            date: new Date('2018-01-19'),
            isFreeFriday: true,
            description: 'ok ok'
        },
        {
            date: new Date('2018-01-29'),
            isFreeFriday: true,
            description: 'ok ok'
        },
        {
            date: new Date('2018-02-19'),
            isFreeFriday: true,
            description: 'ok ok'
        }],
        selectedDay: {
            date: new Date(),
            isFreeFriday: false,
            description: ''
        }
    };
}

export const calendarReducer = (state: ICalendar = init(), action: Actions.Actions): ICalendar => {
    switch (action.type) {
        case actionTypes.DAY_CHANGE: {
            return {...state, ...{selectedDay: {date: action.payload, isFreeFriday: false, description: ''}}};
        }
        default: return state;
    }
};