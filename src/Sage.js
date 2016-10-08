'use strict';

class Sage {
  constructor(callback, immediate, ioAnswer) {
    this._callback = callback;
    this._immediate = immediate;
    this._answer = ioAnswer;

    if (arguments.length < 1) {
      throw new Error('Required parameter not passed.');
    } else if (typeof callback !== 'function') {
      throw new Error('Function expected, not received.');
    }

    if (arguments.length >= 2 && typeof immediate !== 'function') {
      throw new Error('Function expected, not received.');
    }

    if (arguments.length === 3) {
      return { then: function () { this._immediate(this._answer) }.bind(this) };
    }

    return new Promise(callback);
  }
}

module.exports = Sage;
