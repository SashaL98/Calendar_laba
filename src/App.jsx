import React from "react";

import Calendar from "./Calendar";

import * as calendar from "./Calendar/calendar";

export default class App extends React.Component {
  state = {
    date: null
  };

  handleDateChange = (date) => this.setState({ date });

  render() {
    const { date } = this.state;
    const today = new Date();

    return (
      <div>
        {date && (
          <p>
            Выбранная дата: {date.toLocaleDateString()}, Промежуток в{" "}
            {Math.abs(
              Math.floor(
                (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
              ) + 1
            )}{" "}
            дней
          </p>
        )}

        <Calendar onChange={this.handleDateChange} />

        {date && calendar.isholiday(date) && (
          <p>Праздник: {calendar.isholiday_Name(date)}</p>
        )}
      </div>
    );
  }
}
