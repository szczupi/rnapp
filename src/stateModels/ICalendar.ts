export interface ICalendar {
    dates: Array<IHoliday>;
    selectedDay: IHoliday | undefined;
}


export interface IHoliday {
    date: Date;
    isFreeFriday: boolean;
    description: string;
}