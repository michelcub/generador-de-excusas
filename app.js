let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

const generateExcuseRandom = (who, action, what, when) => {
  let stringWho = who[Math.floor(Math.random() * 3)];
  let stringAction = action[Math.floor(Math.random())];
  let stringWhat = what[Math.floor(Math.random() * 3)];
  let stringWhen = when[Math.floor(Math.random() * 4)];

  return `${stringWho} ${stringAction} ${stringWhat} ${stringWhen}`;
};

console.log(generateExcuseRandom(who, action, what, when));

let paragraphExcuse = document.querySelector("#excuse");

paragraphExcuse.innerHTML += generateExcuseRandom(who, action, what, when);

let btnGenerateExcuse = document.querySelector("#btnGenerateExcuse");

btnGenerateExcuse.addEventListener("click", () => {
  location.reload();
});
