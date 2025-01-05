const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1 = document.getElementById("btn-pwd1");
let pwd2 = document.getElementById("btn-pwd2");

function generatePassword() {
  let pwd = ""
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    pwd += characters[randomIndex];
  }
  console.log(pwd)
  return pwd;
}

function passwords() {
  pwdOne = generatePassword();
  pwdTwo = generatePassword();
  console.log(pwd1)
  pwd1.textContent = pwdOne;
  pwd2.textContent = pwdTwo;
}
