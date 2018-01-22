import { Action } from 'redux';

export type Actions = ChangeSelectedDayAction;

export interface ChangeSelectedDayAction extends Action {
    type: 'CHANGE_DAY';
    payload: Date;
}

export function changeSelectedDay(selected: Date): ChangeSelectedDayAction {
    return {
        type: 'CHANGE_DAY',
        payload: selected
    };
}