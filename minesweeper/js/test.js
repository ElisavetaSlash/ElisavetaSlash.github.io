import {Sentence} from "./minesweeper.js";
const s1 = new Sentence([1, 2], 2)
const s2 = new Sentence([3, 4], 1)
s2.mark_safe(4);
console.log(s2);
