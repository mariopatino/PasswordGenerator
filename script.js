// Assignment Code
var generateBtn = document.querySelector("#generate");


function askForPasswdLngt(){
  var max = 0;
  max = prompt("How long you want your password (8 to 25)?");
  if (max !== null){
      max = Number(max);
      if (max >= 8 && max <= 25) {
        return max;
      } else {
        var askAgain = prompt("Wrong leght. Want to try again (Y or N)?");
        if (askAgain !== null){
          if (askAgain.toUpperCase() === "Y"){
           return askForPasswdLngt();
          }
        }
      }
  } 
  return 0;
}

function randomIndex(max) {
 return Math.floor((Math.random() * max));
};

function askForNumbers() {
  var sourceNumbers = [];
  var questionAnswer = "";
  questionAnswer = prompt("Would you want to include numbers on your new password (Y or N)?");
  console.log(questionAnswer)
  if (questionAnswer !== null){
    if (questionAnswer.toUpperCase() === "Y") {
        sourceNumbers = ["1","2","3","4","5","6","7","8","9"];
       } 
  }
  return sourceNumbers;
}

function askForLowerCase() {
  var sourceLowerCase = [];
  var questionAnswer = "";
  questionAnswer = prompt("Would you want to include lower case characters on your new password (Y or N)?");
  if (questionAnswer !== null){
      if (questionAnswer.toUpperCase() === "Y") {
        sourceLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","x","y","z"];
       } 
  }
  return sourceLowerCase;
}


function askForUpperCase() {
  var sourceUpperCase = [];
  var questionAnswer = "";
  questionAnswer = prompt("Would you want to include upper case characters on your new password (Y or N)?");
  if (questionAnswer !== null){
      if (questionAnswer.toUpperCase() === "Y") {
        sourceUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","Y","Z"];
       } 
  }
  return sourceUpperCase;
}


function askForSymbols() {
  var sourceSymbols = [];
  var questionAnswer = "";
  questionAnswer = prompt("Would you want to include symbols on your new password (Y or N)?");
  if (questionAnswer !== null){
      if (questionAnswer.toUpperCase() === "Y") {
        sourceSymbols = ["!","#","$","%","&","/","-","+","¿","¡","?","@"];
       } 
  }
  return sourceSymbols;
}

function generatePassword(){
  var sourcePassword = [];
  var newPassword = "";
  var lenghtPassword=askForPasswdLngt();

  if (lenghtPassword !== 0){
    sourcePassword = sourcePassword.concat(askForNumbers());
    sourcePassword = sourcePassword.concat(askForLowerCase());
    sourcePassword = sourcePassword.concat(askForUpperCase());
    sourcePassword = sourcePassword.concat(askForSymbols());
  } else {
     alert("Thanks for your visit");
  }
  

  
for(var i=0; i < lenghtPassword; i++){
  var j = randomIndex(sourcePassword.length);
  newPassword = newPassword + sourcePassword[j];
  };
    return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
