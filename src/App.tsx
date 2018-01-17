import React from 'react';
import RootNavigator from './RootNavigator';

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
  public render() {
    return (
      <RootNavigator />
    );
  }
}