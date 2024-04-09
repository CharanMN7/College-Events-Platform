const prefixZero = (n) => {
  if (n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
};

const theMonth = (dateObj) => {
  let month = "";

  switch (dateObj.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  return month;
};

const theHours = (dateObj) => {
  const hours = dateObj.getHours();

  if (hours > 12) {
    return `${hours - 12}`;
  }

  if (hours == 0) {
    return "12";
  }

  if (hours < 10) {
    return prefixZero(hours);
  }
};

const theMinutes = (dateObj) => {
  const minutes = dateObj.getMinutes();

  if (minutes < 10) {
    return prefixZero(minutes);
  } else {
    return minutes;
  }
};

const theAmPm = (dateObj) => {
  const hours = dateObj.getHours();

  if (hours > 11) {
    return "PM";
  } else {
    return "AM";
  }
};

export const writeDate = (date) => {
  const theDate = new Date(date);

  const writtenDate = `${theHours(theDate)}:${theMinutes(theDate)} ${theAmPm(theDate)} - ${theMonth(theDate)} ${theDate.getDate()}, ${theDate.getFullYear()}`;

  return writtenDate;
};

export const getStatus = (date) => {
  let status = "completed";

  const eventDay = Date.parse(date);
  const today = Date.parse(new Date());

  if (today - eventDay > -84600000) {
    status = "completed";
  } else if (today - eventDay < 86400000) {
    status = "upcoming";
  } else {
    status = "live";
  }

  return status;
};
