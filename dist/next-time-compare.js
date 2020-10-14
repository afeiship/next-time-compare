/*!
 * name: @feizheng/next-time-compare
 * description: Time compare for next.
 * homepage: https://github.com/afeiship/next-time-compare
 * version: 1.0.0
 * date: 2020-10-14T01:43:20.749Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var MSG_ERR = 'Invalid time format.';

  nx.timeCompare = function (inTime1, inTime2) {
    var parse1 = Date.parse('1970/01/01 ' + inTime1);
    var parse2 = Date.parse('1970/01/01 ' + inTime2);

    if (!parse1 || !parse2) return nx.error(MSG_ERR);
    if (parse1 === parse2) return 0;
    if (parse1 > parse2) return 1;
    if (parse1 < parse2) return -1;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.timeCompare;
  }
})();
