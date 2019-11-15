const {
  addMinutes,
  timeBreakdown,
  calculateTimeChange,
  changeDes,
} = require('../../addMinutes');

describe('addMinutes', () => {
  test('given 10:00 AM as first argument, and 60 as second argument returns 11:00 AM', () => {
    expect(addMinutes('10:00 AM', 60)).toBe('11:00 AM');
  });

  test('given 11:05 PM as first argument, and 125 as second argument returns 1:05 AM', () => {
    expect(addMinutes('11:05 PM', 125)).toBe('1:10 AM');
  });
});

describe('timeBreakdown', () => {
  describe('given 11:05 AM as first argument', () => {
    test('returns object matching {hrs: 11, mins: 5, designation: "AM"}', () => {
      expect(timeBreakdown('11:05 AM', null)).toMatchObject({
        hrs: 11,
        mins: 5,
        designation: 'AM',
      });
    });

    test('given 60 minutes as second argument returns 65 minutes}', () => {
      const { hrs, mins, designation } = timeBreakdown('11:05 AM', 60);
      expect(mins).toBe(65);
    });
  });
});

describe('calculateTimeChange', () => {
  test('65 minutes adds 1 hour and 5 minutes', () => {
    const [hrs, mins] = calculateTimeChange(8, 65, '');
    expect(hrs).toBe(9);
    expect(mins).toBe(5);
  });
  test('25 minutes returns 25 minutes', () => {
    const [hrs, mins] = calculateTimeChange(8, 25, '');
    expect(hrs).toBe(8);
    expect(mins).toBe(25);
  });
  test('14 total hours returns as 2', () => {
    const [hrs, ,] = calculateTimeChange(14, 0, '');
    expect(hrs).toBe(2);
  });
  test('10 total hours returns as 10', () => {
    const [hrs, ,] = calculateTimeChange(10, 0, '');
    expect(hrs).toBe(10);
  });
});

describe('changeDes', () => {
  test('toggles AM to PM', () => {
    expect(changeDes('AM')).toBe('PM');
  });
  test('toggles PM to AM', () => {
    expect(changeDes('PM')).toBe('AM');
  });
});
