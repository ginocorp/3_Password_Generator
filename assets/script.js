// Assignment Code
var generateBtn = document.querySelector("#generate");
// var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
// var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var someNum = '0123456789';
// var randomSym = '~!@#$%^&*()_+';

//lowercase letters function
//count = 26 letters(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z)
function randomLower() {
  // return lowerCase[Math.floor(Math.random()*lowerCase.length)];
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//console.log(randomLower());

//uppercase letters function
//count = 26 letters(A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)
function randomUpper() {
  // return upperCase[Math.floor(Math.random()*upperCase.length)];
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//console.log(randomUpper());

//numbers function
// count = 10 numbers(0,1,2,3,4,5,6,7,8,9)
function randomNumber() {
  // return someNum[Math.floor(Math.random()*someNum.length)];
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

};
//console.log(randomNumber());

//symbols function
//count = 12 symbols
function randomSymbols() {
  // return randomSym[Math.floor(Math.random()*randomSym.length)];
  var randomSym = '~!@#$%^&*()_+';
  return randomSym[Math.floor(Math.random() * randomSym.length)]
};
//console.log(randomSymbols());

//test function to make sure input is an integer
function hasNumbers(str) {
  var regexp = /\d/g;
  return numeral.test(str);
};

function generatePassword() {
  var answer = true;
  var passLength = Number(window.prompt("Password Length: Choose a number between 8 - 128", "8"));
    while (answer == true) {
      if(passLength === 0) {
        return "Please click 'Generate Password' and type a number between 8 - 128";
      }
      else if(passLength === null) {
        return "Please click 'Generate Password' and type a number between 8 - 128";
      }
      else if(passLength > 7 && passLength < 129) {
        break;
      }
      else if(!hasNumbers(passLength)) {
        window.alert("Only enter a number between 8 - 128", "8");
      }
      else if(passLength < 8 || passLength > 128) {
        window.alert("Length of the password can only be between 8 - 128")
      }
    }

  

  //Questions prompted after clicking Generate Password button
  var questions = []
  let passGen = '';
  var lower = window.confirm("Do you want your password to include lowercase letters?");

  var upper = window.confirm("Do you want your password to include uppercase letters?");

  var numbers = window.confirm("Do you want your password to include numbers?");

  var symbols = window.confirm("Do you want your password to include symbols?");

  //This generates a random character for any question that was confirmed, then pushes it to the next character, and then subtracts the amount of characters needed right after. 
  if(lower) {
    questions.push('lower');
    passGen = passGen + randomLower();
    passLength--;
  }

  if(upper) {
    questions.push('upper');
    passGen = passGen + randomUpper();
    passLength--;
  }

  if(numbers) {
    questions.push('numbers');
    passGen = passGen + randomNumber();
    passLength--;
  }

  if(symbols) {
    questions.push('symbols');
    passGen = passGen + randomSymbols();
    passLength--;
  }

  if(questions == "") {
    window.alert("One type(Lowercase, Uppercase, Numbers, Symbols) must be selected");
    writePassword();
  }

  else {
    for(var i=0;i < passLength; i++) {
      option = questions[Math.floor(Math.random()*questions.length)];
      
      if(option === 'lower') {
        passGen = passGen + randomLower();
      }
      if(option === 'upper') {
        passGen = passGen + randomUpper();
      }
      if(option === 'numbers') {
        passGen = passGen + randomNumber();
      }
      if(option === 'symbols') {
        passGen = passGen + randomSymbols();
      }
    }
  }
  return passGen
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  if(!password == ""){
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// const linkVariables = {
//   lower: randomLower,
//   upper: randomUpper,
//   numbers: randomNumber,
//   symbols: randomSymbols
// };


  // const questionsCount = lower + upper + numbers + symbols;

  // console.log('questionsCount: ', questionsCount)

  // const questionsYes = [{lower}, {upper}, {numbers}, {symbols}].filter(item => Object.values(item)[0]);

  // console.log('questionsYes: ', questionsYes)

  // if(questionsCount === 0) {
  //   return window.alert("One type(Lowercase, Uppercase, Numbers, Symbols) must be selected");
  // }

  // for(var i = 0; i < length; i += questionsCount) {
  //   questionsYes.forEach(type => {
  //     questionsPrompt = Object.keys(type)[0];

  //     passGen += linkVariables[questionsPrompt]();

  //     console.log(passGen);
  //   })

  // }