export interface ICalendar {
    dates: Array<IHoliday>;
    selectedDay: IHoliday | undefined;
}


export interface IHoliday {
    date: Date;
    isHoliday: boolean;
    description: string;
}