const arr = ["1", "2", " 3a", "4", "5", "6"];

const newArray = arr.filter((value) => {
  if (value.includes("a")) {
    return true;
  }
});

console.log(newArray);

let strg = "non";
console.log(strg.toLowerCase().includes("o".toLowerCase()));
