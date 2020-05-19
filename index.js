import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
let game = fifaData.filter(c => (c["Year"] == 2014) && (c["Stage"] == "Final"))[0];
console.log(game);
console.log(game["Home Team Name"]);
console.log(game["Away Team Name"]);
console.log(game["Home Team Goals"]);
console.log(game["Away Team Goals"]);
if (game["Home Team Goals"] > game["Away Team Goals"]) {
    console.log("Winner: ", game["Home Team Name"]);
} else {
    console.log("Winner: ", game["Away Team Name"]);
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let finalGames = data.filter(c => (c["Stage"] == "Final"));
    return finalGames;
};
console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    let years = [];
    for (let i = 0; i < cb.length; i++) {
        years.push(cb[i].Year);
    }
    return years;
};
getYears(getFinals(fifaData));
console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(cb) {
    let winners = [];
    for (let i = 0; i < cb.length; i++) {
        if (cb[i]["Win conditions"] != "") {
            let winLocation = cb[i]["Win conditions"].indexOf(" win");
            winners.push(cb[i]["Win conditions"].substring(0, winLocation));
        }
        else if (cb[i]["Home Team Goals"] > cb[i]["Away Team Goals"]) {
            winners.push(cb[i]["Home Team Name"]);
        } else if (cb[i]["Home Team Goals"] < cb[i]["Away Team Goals"]) {
            winners.push(cb[i]["Away Team Name"]);
        }
    }
    return winners;
}

getWinners(getFinals(fifaData));
console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    let winnersByYear = [];
    for (let i = 0; i < cb1.length; i++) {
        winnersByYear.push(`In ${cb1[i]}, ${cb2[i]} won the world cup!`);
    }
    return winnersByYear;
};

getWinnersByYear(getYears(fifaData), getWinners(fifaData));
console.log(getWinnersByYear(getYears(fifaData), getWinners(fifaData)));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeTeamSum = data.reduce((sum, item) => {
        return sum += item['Home Team Goals'];
    }, 0);
    let awayTeamSum = data.reduce((sum, item) => {
        return sum += item['Away Team Goals'];
    }, 0);
    return `Home Team Average Goals: ${homeTeamSum / data.length}, Away Team Average Goals: ${awayTeamSum / data.length}`;
}

getAverageGoals(fifaData);
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
