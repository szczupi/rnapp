import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CalendarList, Calendar } from 'react-native-calendars';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IHoliday } from '../stateModels/ICalendar';
import IStore from '../stateModels/IStore';
import * as calendarActions from '../actions/calendarActions';

interface Props {
  dates: any;
  selectedDay: IHoliday;
  onDayChange: (day: string) => Dispatch<any>;
}

class MyCalendarComponent extends React.Component<Props, any> {

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
      return (
        <View style={{flex: 1}}>
        <CalendarList
        markedDates={this.props.dates}
        onDayPress = {(day: any) => this.props.onDayChange(day) }
        //onDayPress={(day: any) => console.log('day pressed') }
  // callback that gets called when day changes while scrolling agenda list
  //onDayChange={(day: any) => { console.log('day changed'); } }
        />
        <View style={{height: 50}}>
        <Text style={{flex: 20}}>{this.props.selectedDay.date.toISOString()}</Text>
        <Text style={{flex: 20}}>{this.props.selectedDay.description}</Text>
        </View>
        </View>
      );
    }
  }

const mapStateToProps = ({ calendar }: IStore, ownProps: Props): any => {
    const holidayDates: Array<IHoliday> =  calendar.dates;
    const datesArray: Array<Date> = holidayDates.map((holiday: IHoliday) => holiday.date);
    const dates: any = datesArray.reduce((obj: any, item: Date) => {
          obj[item.toISOString().substr(0, 10)] = { selected: true, color: 'red' };
          return obj;
        }, {});

    return { dates, selectedDay: calendar.selectedDay };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
      onDayChange: (day: any) => {
        dispatch(calendarActions.changeSelectedDay(new Date(day.timestamp)));
      }
    };
};

const MyCalendar = connect(
  mapStateToProps, mapDispatchToProps
)(MyCalendarComponent);

export default MyCalendar;