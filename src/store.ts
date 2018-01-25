import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers';
import { fetchHolidaysAsync } from './actions/calendarActions';

export default function getStore(initialState: any) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware
        ),
    );

    const store = createStore(
        appReducer,
        initialState,
        enhancer);

    store.dispatch(fetchHolidaysAsync());

    return store;
}