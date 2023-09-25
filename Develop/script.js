// Assignment code here
var passLength = 0;
var newPass ="";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  function generatePassword (){
    var validChar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()[]\|"
    // added list for all valid characters
  }
    

} return newPass;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
