import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers';

export default function getStore(initialState: any) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware
        ),
    );

    return createStore(
        appReducer,
        initialState,
        enhancer);
}