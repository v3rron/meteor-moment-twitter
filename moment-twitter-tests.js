"use strict"
// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  // console.log(moment(Date.now()).twitterShort());
  test.equal(moment(new Date()).twitterShort(), '1s');
});
