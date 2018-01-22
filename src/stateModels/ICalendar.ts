export interface ICalendar {
    dates: Array<IHoliday>;
    selectedDay: IHoliday;
}


export interface IHoliday {
    date: Date;
    isFreeFriday: boolean;
    description: string;
}