var readlineSync =  require('readline-sync');
const chalk = require('chalk');
var score  = 0;
var q1 = readlineSync.question(chalk.green("Hey, Whats your name? "));
console.log(chalk.blue("Welcome " + q1+ "!"));
console.log(chalk.green("Lets check how well you know the Harry Potter..."));

var array = [{question : "Whats Harry's mum called?", answer : "Lily"}, {question : "True or false: Hagrid is the first person from the Wizarding World that Harry meets?", answer : "True"},{question : "True or False: Hagrid has been a prisoner in Azkaban?", answer : "True"}, {question : "What is Professor Dumbledor's first name?", answer : "Albus"}, {question : "What is Ron most scared of?", answer : "Spider"}];

for(i=0; i<array.length;i++){
  //console.log(array[i].question);
  var result = play(array[i].question,array[i].answer);
  if(array[i].answer === result){
    console.log(chalk.blue.bgWhite.bold("Yay, that's correct!!"));
    score = score + 1;
  } else {
    console.log(chalk.red.bgWhite.bold("Nah, that's incorrect"));
  }
  console.log(chalk.green("Your score = "+ score + " point"));
  console.log("------------------------------------");
  
}
function play(quest, ans){
  console.log(quest);
  var ans = readlineSync.question(chalk.blue("Your answer: "));
  //console.log(ans);
  return ans;
}

var highScore = [{name: "Abel", score: "5"}];
console.log("Highest score's")
for(var j=0; j<highScore.length;j++){
  console.log(chalk.yellow(highScore[j].name) + " score " + chalk.yellow(highScore[j].score));
  // console.log(chalk.yellow(highScore[j].score));
  console.log("------------------------------------");
}
var highScore = isScorehigh(score,5)

function isScorehigh(count,hs){
  if (count == hs){
    console.log(chalk.yellow("Wow! You set the new high score. Send a snapshot of your score to update you as a high scorer"));
  } else {
    console.log(chalk.yellow("You did not have a high score try again to set a new score"));
  }
}

