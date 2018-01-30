import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IHoliday } from '../stateModels/ICalendar';
import { LocaleConfig } from 'react-native-calendars';
import { plCode } from '../logic/calendarSetup';

interface Props extends IHoliday {
    navigate: () => void;
}

export default class DateStrip extends React.Component<Props, any> {

  protected static navigationOptions = {
    tintColor: 'black',
    tabBarIcon:
    (options: { tintColor: string, focused: boolean }) => (
        <Icon
          name={options.focused ? 'ios-calendar' : 'ios-calendar-outline'}
          size = {26}
        />)
  };

    public render() {

        if (!this.props.date) {
            return <View></View>;
        }

        const day: number = this.props.date.getDate();
        const month: string = LocaleConfig.locales[plCode].monthNames[this.props.date.getMonth()];

      if (!this.props.isHoliday) {
        return (
            <View style={{flex: 1, flexDirection: 'row', borderTopWidth: 1, borderColor: '#A0A0A0', alignItems: 'center'}}>
            <View style={{flex: 1, margin: 8}}>
                <View style={{flex: 5}}><Text style={{fontSize: 37, textAlign: 'center', color: '#808080'}}>{day}</Text></View>
                <View style={{flex: 2}}><Text style={{fontSize: 11, textAlign: 'center', color: '#808080'}}>{month}</Text></View>
            </View>
            <View style={{flex: 4}}></View>
        </View>);
      }

      return (
        <View style={{flex: 1, flexDirection: 'row', borderTopWidth: 1, borderColor: '#A0A0A0', alignItems: 'center'}}>
            <View style={{flex: 1, margin: 8}}>
                <View style={{flex: 5}}><Text style={{fontSize: 37, textAlign: 'center', color: '#FF4A4A'}}>{day}</Text></View>
                <View style={{flex: 2}}><Text style={{fontSize: 11, textAlign: 'center', color: '#FF4A4A'}}>{month}</Text></View>
            </View>
            <View style={{flex: 4, margin: 14}}>
                <Text style={{fontSize: 16, textAlign: 'center', lineHeight: 20, color: '#808080'}}>{this.props.description}</Text>
            </View>
            <Icon name='ios-arrow-forward' style={{height: 30, margin: 5, width: 20, fontSize: 30, color: '#A0A0A0'}} onPress={this.props.navigate}/>
        </View>
      );
    }
}