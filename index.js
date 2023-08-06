import inquirer from "inquirer";
async function Startfunc() {
    const systemNum = Math.floor(Math.random() * 10);
    const userValue = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Guess The number in 1 to 10 :"
        }
    ]);
    console.log(`your Guess ${userValue.userGuess} And System Guess ${systemNum}`);
    if (userValue.userGuess === systemNum) {
        console.log("correct guess you won!");
    }
    else {
        console.log("try Again");
    }
}
const againFunc = async () => {
    do {
        await Startfunc();
        var Restart = await inquirer.prompt([
            {
                type: "input",
                name: "againGuess",
                message: "Do u wan't to continue press Y or N"
            }
        ]);
    } while (Restart.againGuess.toLowerCase() === "y");
};
againFunc();
