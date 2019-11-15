const addMinutes = (time, minutes) => {
  const { hrs, mins, designation } = timeBreakdown(time, minutes);

  const [totalHours, minutesLeft, des] = calculateTimeChange(
    hrs,
    mins,
    designation,
  );

  return `${totalHours}:${addLeadingZero(minutesLeft)} ${des}`;
};

const timeBreakdown = (time, minutes) => {
  const timeArr = time.split(':');
  const [mins, designation] = timeArr[1].split(' ');

  return {
    hrs: parseInt(timeArr[0], 10),
    mins: parseInt(mins, 10) + minutes,
    designation: designation.toUpperCase(),
  };
};

const addLeadingZero = val => (val < 10 ? `0${val}` : `${val}`);

const calculateTimeChange = (hrs, mins, des) => {
  while (mins >= 60) {
    hrs += 1;
    mins -= 60;
  }

  if (hrs >= 12) {
    des = changeDes(des);
  }

  if (hrs > 12) {
    hrs -= 12;
  }

  return [hrs, mins, des];
};

const changeDes = des => {
  if (des === 'AM') {
    return 'PM';
  }
  if (des === 'PM') {
    return 'AM';
  }
};

module.exports = {
  addMinutes,
  timeBreakdown,
  calculateTimeChange,
  changeDes,
};
