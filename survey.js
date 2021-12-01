const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {}

rl.question("What's your name? Nicknames are also acceptable", (answer) => {
    answers.nickname = answer
    rl.question("What's an activity you like doing?", (answer) => {
      answers.activity = answer
      rl.question("What do you listen to while doing that?", (answer) => {
        answers.listen = answer
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
          rl.question("What's your favorite thing to eat for that meal?", (answer) => {
            rl.question("Which sport is your absolute favorite?", (answer) => {
              rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
                console.log(`My name is ${answers.nickname}. I like to ${answers.activity}. I like to listen to ${answers.listen}`)
                rl.close();
              });
            
            });
          
          });
        
        });
      
      });
    
    });
  
  });

