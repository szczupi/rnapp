import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import { ICalendar } from '../stateModels/ICalendar';
import { IHoliday } from '../stateModels/IHoliday';
import { IStore } from '../stateModels/IStore';

interface Props {
  dispatch?: Dispatch<IStore>;
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

  function mapStateToProps(state: IStore, ownProps: Props): Props {
    const props: Props = { dates: state.calendar.dates
        .map((holiday: IHoliday) => holiday.date)
        .reduce((obj: any, item: Date) => {
          obj[item.toDateString()] = { selected: true, color: 'red' };
          return obj;
        }, {})
    };

    return props;
}

const MyCalendar = connect(
  mapStateToProps
)(MyCalendarComponent);

export default MyCalendar;