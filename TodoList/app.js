let userInput = prompt("What would you like to do?");
let toDo = ["walk", "run", "code"];

while (userInput !== "quit" && userInput !== "q") {
  if (userInput === "list") {
    console.log("**************************");
    for (let i = 0; i < toDo.length; i++) {
      console.log(`${i} : ${toDo[i]}`);
    }
    console.log("**************************");
  } else if (userInput === "add") {
    const addNew = prompt("What would you like to add?");
    toDo.push(addNew);
    console.log(`${addNew} added to the list of Todos`);
  } else if (userInput === "delete") {
    const indexInput = parseInt(
      prompt("Chose index of item you want to be deleted...")
    );
    if (!Number.isNaN(indexInput)) {
      const deleted = toDo.splice(indexInput, 1);
      console.log(`okay deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
  userInput = prompt("What would you like to do?");
}

console.log("You quit the app!");
