var shuffle = require('./index');
var expect = require('chai').expect;

describe('Shuffle Test', function() {

  it('The arr has been shuffled', function() {
    var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    var arrTemp = [].concat(arr);
    var shuffledArr = [];

    shuffle(arr);
    var count = 0;
    arr.forEach(function(item, index) {
      if (item !== arrTemp[index]) {
        count++;
      }
    })
    expect(count).to.be.above(1);
  })
  it('If pass boolean true as the second argument, the function will return a new array', function() {
    var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    var arrTemp = [].concat(arr);
    var shuffledArr = [];

    shuffledArr = shuffle(arr, true);
    expect(arr).to.deep.equal(arrTemp);

    var count = 0;
    arr.forEach(function(item, index) {
      if (item !== shuffledArr[index]) {
        count++;
      }
    })
    expect(count).to.be.above(1);
  })
})
