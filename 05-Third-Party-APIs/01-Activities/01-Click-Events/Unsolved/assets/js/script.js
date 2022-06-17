var passwordBtnEl = $('.password-btn');
var passwordDisplayEl = $('#password-display');//both of these lines are tartgeting/capturing UI elements (via attributes)

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

passwordBtnEl.on('dblclick', function () {
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});//this logic is consulting as a SaaS
//this script was imported to our UI in service of enhancing UX, by providing requested functionality
