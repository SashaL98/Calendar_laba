import React from "react";

import Calendar from "./Calendar";

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
      </div>
    );
  }
}
