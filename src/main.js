/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let rand_who = Math.floor(Math.random() * who.length);
  let rand_action = Math.floor(Math.random() * action.length);
  let rand_what = Math.floor(Math.random() * what.length);
  let rand_when = Math.floor(Math.random() * when.length);

  let frase =
    who[rand_who] +
    " " +
    action[rand_action] +
    " " +
    what[rand_what] +
    " " +
    when[rand_when];

  document.querySelector("#excuse").innerHTML =
    "<div class='card text-white bg-dark mb-5 mt-5'>" + frase + "</div>";
};
