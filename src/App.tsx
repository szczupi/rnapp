import React from 'react';
import { View, StyleSheet } from 'react-native';
import RootNavigator from './RootNavigator';

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
  public render() {
    return (
      <View style = {styles.container}>
        <View style={{height: 24, backgroundColor: '#F7F7F7'}} />
        <View style={{flex: 1}}>
        <RootNavigator />
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
     flexDirection: 'column',
     alignItems: 'stretch',
     justifyContent: 'center',
     flex: 1
  }});