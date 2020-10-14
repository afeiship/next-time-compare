const nx = require('@feizheng/next-js-core2');
require('../src/next-time-compare');

describe('api.basic test', () => {
  test('nx.timeCompare time1 >=< time2', function() {
    expect(nx.timeCompare('09:41:13', '9:41:13')).toBe(0);
    expect(nx.timeCompare('09:42:13', '9:41:13')).toBe(1);
    expect(nx.timeCompare('09:40:13', '9:41:13')).toBe(-1);

  });
});
