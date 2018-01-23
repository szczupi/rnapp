import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import { ICalendar, IHoliday } from '../stateModels/ICalendar';
import IStore from '../stateModels/IStore';

interface Props {
  dates: any;
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
        <CalendarList
        markedDates={this.props.dates}/>
      );
    }
  }

  function mapStateToProps({ calendar }: IStore, ownProps: Props): any {
    const holidayDates: Array<IHoliday> =  calendar.dates;
    const dates: Array<Date> = holidayDates.map((holiday: IHoliday) => holiday.date);
    const props: any = dates.reduce((obj: any, item: Date) => {
          obj[item.toISOString().substr(0,10)] = { selected: true, color: 'red' };
          return obj;
        }, {});

    return {dates: props};
}

const MyCalendar = connect(
  mapStateToProps
)(MyCalendarComponent);

export default MyCalendar;