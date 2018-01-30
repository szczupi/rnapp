import { combineReducers } from 'redux';
import IStore from '../stateModels/IStore';
import calendarReducer from './calendarReducer';
import navigationReducer from './navigationReducer';

export default combineReducers<IStore>({calendar: calendarReducer, nav: navigationReducer});