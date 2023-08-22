import { NumberRange, readingsOutsideRange } from '../6-8.js';

describe('readingsOutsideRange', () => {
  let station;
  let operationPlan;

  beforeEach(() => {
    station = {
      name: 'ZB1',
      readings: [
        { temp: 47, time: '2016-11-10 09:10' },
        { temp: 53, time: '2016-11-10 09:20' },
        { temp: 58, time: '2016-11-10 09:30' },
        { temp: 53, time: '2016-11-10 09:40' },
        { temp: 51, time: '2016-11-10 09:50' },
      ],
    };
    operationPlan = new NumberRange(51, 53);
  });

  it('should filter readings outside the given range', () => {
    const result = readingsOutsideRange(station, operationPlan);
    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { temp: 47, time: '2016-11-10 09:10' },
      { temp: 58, time: '2016-11-10 09:30' },
    ]);
  });
});
