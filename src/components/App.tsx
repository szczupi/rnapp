import React from 'react';
import { View, StyleSheet } from 'react-native';
import RootNavigator from './RootNavigator';
import { Provider } from 'react-redux';
import getStore from '../store';
import { calendarSetup } from '../logic/calendarSetup';

interface Props {}

interface State {}

const store = getStore({});

export default class App extends React.Component<Props, State> {

  public render() {
    return (
      <Provider store={store}>
       <View style = {styles.container}>
        <View style={{height: 24, backgroundColor: '#F7F7F7'}} />
        <View style={{flex: 1}}>
        <RootNavigator />
       </View>
      </View>
     </Provider>
    );
  }

  public componentWillMount(): void {
    calendarSetup();
  }
}

const styles = StyleSheet.create ({
  container: {
     flexDirection: 'column',
     alignItems: 'stretch',
     justifyContent: 'center',
     flex: 1
  }});