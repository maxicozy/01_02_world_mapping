/*
 * WORLD MAP VISUALIZER
 * Author: Maximilian Becht
 * ---------------------------
 *
 * Visualizing the world!
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe 2.0: Das Script soll eine Weltkarte auf der Konsole als ASCII-Art zeichnen.
 *  Dafür muss jeder Pixel eines Bild einer Weltkarte gelesen und geprüft werden (world.jpg).
 *  Ist der Pixel schwarz, soll ein Zeichen (z.B. "#") an die richtige Stelle der Konsole 
 *  gesetzt werden. Dafür braucht ihr zwei Funktionen:
 *
 *  getPixelColor(x,y) - kann mit map_image-Objekt benutzt werden (also map_image.getPixelColor(x,y))
 *  writeCharacterToConsole(char, x, y) - Schreibt ein Zeichen an eine Position x/y auf die Konsole
 *
 *  Aufgabe 2.1: Farbe! Schaut euch das npm-Modul "chalk" an, und versucht die Zeichen in Farbe auszugeben
 *
 */


const rl = require('readline')
const jimp = require('jimp')
const chalk = require('chalk');

clearConsole()

let mapsizex = process.stdout.columns;
let mapsizey = process.stdout.rows;

jimp.read('hollowknightsteamprofile.jpg', (err, map_image) => { 
  
  if (err) throw err;
  map_image.resize(mapsizex, mapsizey);
  let x = 0;
  let y = 0;  

  for (x = 0; x < mapsizex + 1; x++) {
    if (map_image.getPixelColor(x, y));
    let rgba = jimp.intToRGBA(map_image.getPixelColor(x,y));
    writeCharacterToConsole(chalk.rgb(rgba.r, rgba.g, rgba.b)('■'), x, y);
    
    if (x === mapsizex) {
      x = -1
      y++
    }
    if (y === mapsizey + 1) {
      return;
    }
  }
});

// function generateInvader (width, height, xPos, yPos) {
//   for (let x = 0; x < width; x++) {
//     for (let y = 0; y < height; y++) {
//       let randomNumber = Math.random();
//       if (randomNumber >= 0.5) {
//         let h = 300;
//         let s = Math.floor(Math.random() * 100);
//         let v = Math.floor(Math.random() * 100);
//         writeCharacterToConsole(chalk.hsv(h, s, v) ('◼'), x + xPos, y + yPos)
//         writeCharacterToConsole(chalk.hsv(h, s, v) ('◼'), (2 * width - x) + xPos, y + yPos)
//       }
//     }
//   } rl.cursorTo(process.stdout, 100, 100)
// }
//
// setInterval(function () {
//   const xPos = Math.floor(Math.random() * 200);
//   const yPos = Math.floor(Math.random() * 50);
//   clearConsole();
//   generateInvader(10, 5, xPos, yPos);
// }, 1000);


// Vorerst nur ein Platzhalter
setInterval(function () {
    
},1000);


/*
 * HELPER FUNCTIONS - DO NOT CHANGE
 */
function clearConsole () {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)

  rl.cursorTo(process.stdout, 0, 0)
  rl.clearScreenDown(process.stdout)
}

function writeCharacterToConsole (char, x, y) {
  rl.cursorTo(process.stdout,x,y)
  process.stdout.write(char)
}

// ▦
// ◪
// ■
