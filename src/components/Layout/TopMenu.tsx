import React from "react";
import classes from "./TopMenu.module.scss";

const TopMenu: React.FC = () => {
  const date = new Date();
  const dayOfWeek: string = date.toLocaleDateString("uk-UA", {
    weekday: "long",
  });
  const fullDate: string = date.toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const currentTime: string = date.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateParts: string[] = fullDate.split(" ");
  const formattedDate: string = `${dateParts[0]} ${dateParts[1]}, ${dateParts[2]}`;

  return (
    <div className={classes.date}>
      <p className={classes.dayOfWeek}>{dayOfWeek}</p>
      <div className={classes.dateTime}>
        <p className="fullDate">{formattedDate}</p>
        <img className={classes.clock} src="/images/clock.png" alt="Clock" />
        <p className={classes.time}>{currentTime}</p>
      </div>
    </div>
  );
};
export default TopMenu;
