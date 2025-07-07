/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = false;
let hasSword = false;
let hasCompass = false;

console.log("You wake up dazed and confused from your travels. What happened?");
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains") {
  const choiceMountain = readline.question("On the way to the mountains, you find a cave. Do you 'go in' or 'walk around'?");
  if (choiceMountain === "go in") {
    console.log("You explore inside and find nothing interesting. On the way out, something glimmering catches your eye - it's a sword!");
    const choiceCave = readline.question("Do you 'pick it up' or 'leave it be'?");
    if (choiceCave === "pick it up") {
      console.log("Picking up the sword, you drop your torch and it blows out.");
      hasSword = true;
      hasTorch = false;
    } else {
      console.log("It's probably for the best. It's just extra weight that could weigh you down.");
    }
  }
  const choiceFight = readline.question("You encounter a snarling bear! Do you 'fight' it or 'run'?");
  if (choiceFight === "fight" && hasSword) {
    console.log("You slay the beast. It's a good thing you picked up that sword.");
    console.log("You find a compass amongst its corpse. Luckily, it works!");
    hasCompass = true;
    } else if (choiceFight === "fight" && !hasSword) {
      console.log("As its grisly paws tear off your limbs, your world fades to black.");
    } else if (choiceFight === "run") {
      let choiceRun = readline.question("Do you run to the 'village' or 'mountains'?");
      if (choiceRun === "village" && hasCompass) {
        console.log("You make it safely back to the village.");
      } else if (choiceRun === "village" && (!hasCompass)) {
        console.log("You wander aimlessly and fall into a trap hole.");
      } else if (choiceRun === "mountains" && hasCompass) { 
        console.log("Your foot hits something hard - it's a treasure chest!"); 
      } else if (choiceRun === "mountains" && !hasCompass) {
        console.log("You don't have the compass, but the mountains are easy to find. You keep walking...");
      }
  }
}
if (choice === "village") {
  const choiceTorch = readline.question("You notice a flaming torch upright in the ground. How convenient! Would you like potentially alert someone to your presence and 'pick it up' or do you play it safe and 'leave it'?");
  if (choiceTorch === "pick it up") {
    hasTorch = true;
  }
  const choiceForest = readline.question("A forest of trees looms in the distance. Do you 'explore' or 'keep going'?");
  if (choiceForest === "explore" && hasTorch) {
    const choiceSpider = readline.question("You notice eight eyes brooding in the gloom. Do you 'fight' or 'flight'?");
    if (choiceSpider === "fight") {
      console.log("Luckily, it's a tiny spider. You squish it with your boot and live another day...");
    } else if (choiceSpider === "flight") {
      console.log("The spider jumps on your back, excreting a poisonous venom into your veins. Goodnight...");
    }
  } else if (choiceForest === "explore" && !hasTorch) {
    console.log("You wish you had a torch. It's so dark, and you notice a gaseous exhaust entering your lungs...");
  } else if (choiceForest === "keep going") {
    console.log("Who needs trees anyways? You keep wandering in the other direction...");
  }
}
    

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/