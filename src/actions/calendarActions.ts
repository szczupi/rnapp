import { Action } from 'redux';
import * as actionTypes from './actionTypes';

export type Actions = ChangeSelectedDayAction;

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