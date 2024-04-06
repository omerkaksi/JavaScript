//Modules:  "use strict"; is on. you don't need to write.
import playGuitar from "./guitars.js";
console.log(playGuitar());
import {shredding as shred, plucking} from "./guitars.js"
console.log(shred());
console.log(plucking());


import * as Guitars from "./guitars.js"
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

import User from "./user.js";

const me= new User("email@email.com","ömer");
console.log(me);
console.log(me.greeting());