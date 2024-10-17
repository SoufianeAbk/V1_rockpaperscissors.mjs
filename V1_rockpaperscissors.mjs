import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({ input, output });

let tellerWinstGebruiker = 0;
let tellerWinstComputer = 0;
let keuzeGebruiker = await userInput.question("Kies (rock, paper, scissors): ");

let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
console.log(keuzeGebruiker + " VS " + computerChoice);

if(keuzeGebruiker == "rock" && computerChoice == "scissors"){
tellerWinstGebruiker++;
console.log(("Gebruiker heeft gewonnen! ") + tellerWinstGebruiker + "/3");
}
if(keuzeGebruiker == computerChoice){
    console.log("Gelijkspel!");
}
while((tellerWinstComputer < 3 && tellerWinstGebruiker < 3));
if(tellerWinstComputer == 3 ){
    console.log("De computer wint het spel!")
}else if(tellerWinstGebruiker == 3){
    console.log("Je hebt het spel gewonnen!")
}
process.exit()