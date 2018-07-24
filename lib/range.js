"use strict";

const range = function* (begin, end, step = 1) {
    if (typeof begin != "number") throw new TypeError("range generator requires number arguments");
    if (step == 0) throw new TypeError("Third argument requires number value other than 0");
    if (end === void 0) end = begin, begin = 0;
    if (begin < end && step < 0 || begin > end && step > 0) step *= -1;
    const eol = n => begin < end ? n < end : n > end;
    for (let i = begin; eol(i); i += step) yield i;
};

module.exports = range;
