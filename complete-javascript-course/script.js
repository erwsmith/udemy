// const age = '18';
// if (age === 18) console.log('Strict equality')
// if (age == 18) console.log('Loose equality')

// const favorite = Number(prompt('favorite number? '));
// console.log(favorite, typeof favorite)

// if (favorite === 23) {
//     console.log("Cool!")
// } else if (favorite === 7) {
//     console.log('7 is cool too')
// } else {
//     console.log("Number isn't 23 or 7")
// }

// Coding challenge #3
// Data 1: 
// Dolphins score 96, 108 and 89. 
// Koalas score 88, 91 and 110

// Data Bonus 1: 
// Dolphins score 97, 112 and 101. 
// Koalas score 109, 95 and 123

// Data Bonus 2: 
// Dolphins score 97, 112 and 101. 
// Koalas score 109, 95 and 106
// class Team {
//     constructor(scores){
//         this.scores = scores;
//     }

//     // Getter 
//     get avg() {
//         return this.calcAvg();
//     }

//     // Method
//     calcAvg() {
//         return this.scores.reduce((a, b) => a + b) / this.scores.length;
//     }
// }

// Nobody, scores too low
// dolphins = new Team([96, 108, 89])
// koalas = new Team([88, 91, 110])

// Koalas win
// dolphins = new Team([97,112,101])
// koalas = new Team([109,95,123])

// Draw
// dolphins = new Team([97,112,101])
// koalas = new Team([109,95,106])

// console.log(dolphins.avg, koalas.avg)

// if (dolphins.avg > koalas.avg && dolphins.avg > 100) {
//     console.log('Dolphins win!')
// } else if (dolphins.avg < koalas.avg && koalas.avg > 100) {
//     console.log('Koalas win!')
// } else if (dolphins.avg === koalas.avg) {
//     console.log("It's a draw!")
// } else {
//     console.log('Scores too low!')
// }


// let text = "   Hello world!";
// let result = text.trim();

// console.log(text, "end here")
// console.log(result)

//We define the text variable that needs to be cleansed of line breaks.
let someText = "Here's some text.\nIt has some line breaks that will be\n removed \r using Javascript.\r\n";
someText = "Line one.\nLine two.\nLine three.\n "
console.log(someText)

//This javascript code removes all 3 types of line breaks
someText = someText.replace(/(\r\n|\n|\r)/gm,"");
console.log(someText)