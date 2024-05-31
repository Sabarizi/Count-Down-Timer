#! /usr/bin/env node
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
//step 1 start code
//function for countdown sec
function* countDown(second) {
    //while loop
    while (second > 0) {
        yield second;
        second--;
    }
}
//step 2 counter initialization
let timer = countDown(10);
//function to create countdown timer
function disply() {
    //value below 10
    let result = timer.next();
    //if else condition
    if (!result.done) {
        //current date and time
        const now = new Date();
        //calculated min in time
        const countDown = new Date(now.getTime() + (result.value * 1000));
        //calculated remaning sec in time
        const remaningSec = differenceInSeconds(countDown, now);
        console.log(chalk.yellowBright(`Remaning Seconds: ${remaningSec}`));
        setTimeout(disply, 1000); // 1 sec is equal to 1000 ms
    }
    else {
        //display result count down
        console.log(chalk.blueBright("CountDown has been Completed"));
    }
}
disply();
