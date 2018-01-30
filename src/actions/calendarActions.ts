import { Action } from 'redux';
import * as actionTypes from './actionTypes';
import { IHoliday } from '../stateModels/ICalendar';
import ICalendarDate from '../logic/entities/calendarDate';

export type Actions = ChangeSelectedDayAction | HolidaysLoadSuccessAction;

const dates: Array<ICalendarDate> = [
    {
    date: new Date('2018-01-19'),
    description: 'ok ok',
    isFreeSunday: false
},
{
    date: new Date('2018-01-29'),
    description: 'ok ok',
    isFreeSunday: false
},
{
    date: new Date('2018-02-19'),
    description: '',
    isFreeSunday: true
}];

export interface ChangeSelectedDayAction extends Action {
    type: actionTypes.DAY_CHANGE;
    payload: Date;
}

export function changeSelectedDay(selected: Date): ChangeSelectedDayAction {
    return {
        type: actionTypes.DAY_CHANGE,
        payload: selected
    };
}

export interface HolidaysLoadSuccessAction extends Action {
    type: actionTypes.HOLIDAYS_LOAD_SUCCESS;
    payload: Array<IHoliday>;
}

export function holidaysLoaded(holidays: Array<IHoliday>): HolidaysLoadSuccessAction {
    return {
        type: actionTypes.HOLIDAYS_LOAD_SUCCESS,
        payload: holidays
    };
}

export interface HolidaysLoadedFailedAction extends Action {
    type: actionTypes.HOLIDAYS_LOAD_FAILURE;
    payload: string;
}

export function holidaysLoadedFailed(error: string): HolidaysLoadedFailedAction {
    return {
        type: actionTypes.HOLIDAYS_LOAD_FAILURE,
        payload: error
    };
}

export function fetchHolidaysAsync(): any {
    return (dispatch: any) => {
        return Promise.resolve(dates)
        .then(
            (data: Array<ICalendarDate>) => {
                const stateData: Array<IHoliday> = data.map((cd: ICalendarDate) => { return { date: cd.date, isHoliday: true, description: cd.isFreeSunday ? 'Niedziela niepracująca' : cd.description }; });
                dispatch(holidaysLoaded(stateData));
            },
            (error: any) => dispatch(fetchHolidaysFromStore(error))
        );
    };
}

function fetchHolidaysFromStore(httpError: any): any {
    return (dispatch: any) => {
        return Promise.resolve(dates)
        .then(
             (data: Array<ICalendarDate>) => {
                const stateData: Array<IHoliday> = data.map((cd: ICalendarDate) => { return { date: cd.date, isHoliday: true, description: cd.isFreeSunday ? 'Niedziela niepracująca' : cd.description }; });
                dispatch(holidaysLoaded(stateData));
            },
            (error: any) => dispatch(holidaysLoadedFailed(httpError))
        );
    };
}