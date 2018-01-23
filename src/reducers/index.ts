import { combineReducers } from 'redux';
import IStore from '../stateModels/IStore';
import { calendarReducer } from './calendarReducer';

export default combineReducers<IStore>({calendar: calendarReducer});