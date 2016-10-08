'use strict';

var Sage = new require('./Sage.js');

module.exports = main;

function main() {
  var answer;
  var answer2;

  function test1(immediate) {
    function respond(resolve, reject) {
      function answer() {
        resolve('Hey gal, resolved.');
      }

      setTimeout(answer, 3000);
    }

    return new Sage(respond);
  }

  function test2(immediate) {
    function respond(resolve, reject) {
      function answer() {
        resolve('Hey gal, delayed.');
      }

      setTimeout(answer, 3000);
    }

    return new Sage(respond, immediate, 'Hey gal, immediate.');
  }

  function handleResponse(ioAnswer) {
    answer = ioAnswer;
    console.log(ioAnswer);
  }

  test1().then(handleResponse);
  test2(handleResponse).then(handleResponse);

  console.log('Done:', answer);
}

main();
