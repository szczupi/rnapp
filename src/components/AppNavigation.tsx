import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from '../navigation/RootNavigator';
import IStore from '../stateModels/IStore';

class AppNavigation extends Component<any, any> {
  public render() {
    const { navigationState, dispatch } = this.props;
    return (
      <RootNavigator
        navigation={addNavigationHelpers({ dispatch, state: navigationState })}
      />
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    navigationState: state.nav
  };
};

export default connect(mapStateToProps)(AppNavigation);