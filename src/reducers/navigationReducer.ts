import RootNavigator from '../navigation/RootNavigator';

const initialState = RootNavigator.router.getStateForAction(
    RootNavigator.router.getActionForPathAndParams('Kalendarz'), undefined
);

const navigationReducer = (state = initialState, action: any) => {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;