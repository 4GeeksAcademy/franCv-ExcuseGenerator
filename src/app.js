/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here  let excuse="";
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let randomNumber1 = Math.floor(Math.random() * who.length);
  let randomNumber2 = Math.floor(Math.random() * action.length);
  let randomNumber3 = Math.floor(Math.random() * what.length);
  let randomNumber4 = Math.floor(Math.random() * when.length);

  let excuse =
    who[randomNumber1] +
    " " +
    action[randomNumber2] +
    " " +
    what[randomNumber3] +
    " " +
    when[randomNumber4];

  document.getElementById("excuse").innerHTML = excuse;
  console.log("Hello Rigo from the console!");
};
