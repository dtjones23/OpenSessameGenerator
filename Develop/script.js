// Assignment code here
var passLength = 8;
var newPass ="";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// this function will generate password
function generatePassword (){
  var passLength = 8;
  var newPass ="";
    
  var validChar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()[]\|";
  // added list for all valid characters
  // array of all character types

  for ( let i=0; i < passLength; i++)
  newPass += validChar[Math.floor(Math.random() * validChar.length)];
  // how the code will generate characters randomly

  // set min and max for valid characters
  // logs string to the window
  if (newPass.length < 8) {
    window.prompt ("Password must be 8-128 characters and include at least 1 special character.")
  } else if (newPass.length < 12) {
    window.prompt ("Password must be 8-128 characters and include at least 1 special character.")
  }

};
  return(newPass);
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
