// Rotate fun facts every 3 seconds
const facts = [
  "🎈 You’ve laughed 1,000,000 times",
  "💤 You’ve spent more than 4000 hours Sleeping",
  "💓 Your heart has beaten more than 1.5 billion times",
  "👀 You’ve blinked 24 million times",
  "🍕 You’ve eaten around 20,000 meals",
  "A dollar is worth about 2.95 times more comapared to that of 1969 "
];

let index = 0;
setInterval(() => {
  const factsList = document.getElementById("facts");
  factsList.innerHTML = `<li>${facts[index]}</li>`;
  index = (index + 1) % facts.length;
}, 3000);
