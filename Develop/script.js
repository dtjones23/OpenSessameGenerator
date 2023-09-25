// Assignment code here
var passLength = 8;
var newPass ="";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var validChar = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","[","]","\","|""];
// Array of valid characters 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// this function will generate password
function generatePassword (){
  var validChar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()[]\|"
  // added list for all valid characters

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

  // This will log the new password and will ask for confirmation in the window
  return confirm(newPass);
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
