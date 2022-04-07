var expect=chai.expect;

desribe{'isPalindrome',()=>{
  instanceof('takes a string and  rturns tru if the string is a palendrome',()=>{
    var sType='vjncj';
    var outcome=isPalindrome(sType);
    expect(outcome).to.expectl(true);
  })
}}



// var expect = chai.expect;

// describe('isPalindrome', function() {
//   it('takes a string and returns true if the string is a palindrome', function() {
//     var str = 'radar';

//     var result = isPalindrome(str);

//     expect(result).to.eql(true);
//   });

//   it('takes a string and returns false if the string is not a palindrome', function() {
//     var str = 'engage';

//     var result = isPalindrome(str);

//     expect(result).to.eql(false);
//   });
// });
