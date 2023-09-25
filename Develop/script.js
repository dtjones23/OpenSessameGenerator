// Assignment code here
// Array of valid characters

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// this function will generate password
function generatePassword (){
  var passLength = 8;
  var newPass ="";
  var validChar = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","[","]","\","|""]
  // Array of valid characters 

  window.alert ("You are now generating a password!")
  // logs in pop-up window

  for ( let i=0; i < passLength; i++) {
  newPass += validChar[Math.floor(Math.random() * validChar.length)];
  }
  // how the code will generate characters randomly

  // set min and max for valid characters
  // logs string to window and prompts the requirements
  if (newPass.length < 8) {
    window.alert ("Password must be 8-128 characters and include correct character types.")
  } else if (newPass.length < 128) {
    window.alert ("Password must be 8-128 characters and include correct character types.")
  }

  // This will log the new password and confirm in window
  return confirm(newPass);
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
