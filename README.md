# next-time-compare
> Time compare for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-time-compare
```

## usage
```js
import '@feizheng/next-time-compare';

nx.timeCompare('09:41:13', '9:41:13');    // 0
nx.timeCompare('09:42:13', '9:41:13');    // 1
nx.timeCompare('09:40:13', '9:41:13');    // -1
```

## resources
- https://stackoverflow.com/questions/6212305/how-can-i-compare-two-time-strings-in-the-format-hhmmss

## license
Code released under [the MIT license](https://github.com/afeiship/next-time-compare/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-time-compare
[version-url]: https://npmjs.org/package/@feizheng/next-time-compare

[license-image]: https://img.shields.io/npm/l/@feizheng/next-time-compare
[license-url]: https://github.com/afeiship/next-time-compare/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-time-compare
[size-url]: https://github.com/afeiship/next-time-compare/blob/master/dist/next-time-compare.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-time-compare
[download-url]: https://www.npmjs.com/package/@feizheng/next-time-compare
