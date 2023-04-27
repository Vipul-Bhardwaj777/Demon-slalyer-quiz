import readlineSync from 'readline-sync';
import chalk from 'chalk'; 



var score = 0;

var highScore =
{
  name: ("Yoriichi Tsugikuni "),
  score: 100
};

// Intro

function intro() {
  var username = readlineSync.question(chalk.bold.blue("Hii! What is your name ? \n"));
  console.log("\n");
  console.log(chalk.blue.bold("Welcome " + chalk.green.bold(username) + " Are you a true Demon Slayer fan? Lets see!\n"));

}



// questions obj array

var questions = [
  {
    question: '1. Who is the god and creator of all demons? \n\n a. Akaza \n b. Gyokko \n c. Muzan\n d. Kyogai\n  ',
    answer: "c"
  },

  {
    question: '2. Who is the love hashira? \n\n a. Obanai Iguro\n b. Mitsuri Kanroji\n c. Muichiro Tokito\n d. Gyomei Himejima\n  ',
    answer: "b"

  },

  {
    question: '3. Who taught Tanjiro the water-breathing technique?\n\n a. Giyu Tomioka\n b. Kyojuro Rengoku \n c. Shinobu Kocho \n d. Sakonji Urokodaki\n  ',
    answer: "d"

  },

  {
    question: '4. Whats the special type of sword that demon slayers wield to kill demons? \n\n a. Nichirin Sword\n b. Lightning Sword\n c. Probenium Sword\n d. Carbantium Sword\n  ',
    answer: "a"

  },
  {
    question: '5. Who is The Serpent Hashira? \n\n a. Giyu Tomioka\n b. Muichiro Tokito\n c.Obanai Iguro\n d. Sanemi Shinazugawa\n ',
    answer: "c"

  }
];

// Running the game

function runGame() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);

  }
}



function play(question, ans) {

  var userans = readlineSync.question(chalk.black.bold(question));
 
  if (userans.toLowerCase() === ans) {
    console.log(chalk.greenBright.bold("Correct!\n"))
    score += 20;

  }
  else {
    console.log(chalk.red.bold("Wrong!\n"));
  }

 
}


// Final score

function finalScore() {


  if (score >= highScore.score) {

    console.log(chalk.greenBright.bold("Congratulations you created a high score! = " + score));
    console.log(chalk.blue.bold("\nPrevious higscore was = " + highScore.score + " \nMade by - " + highScore.name ));

   
    
  

  }

  else if (score > 0) {
    console.log(chalk.greenBright.bold("YAY! You scored " + score +" points"));
  }

  else {
    console.log(chalk.red.bold("Sadly! You scored  " + score + " points"));
  }

}

intro();
runGame();
finalScore();




