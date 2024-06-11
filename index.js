const wild = require("./information");
// console.log(`Hi, my name is ${wild.name} and I'm in a ${wild.campus} campus`);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${wild.name} and I'm in a ${wild.campus} campus`,
    e : "oO",
    T : "U",
}));