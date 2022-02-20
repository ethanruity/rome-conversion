export default function handleNumber(num) {
  let ref = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let charArr = [];
  // Iterate through the refrence table and if the entered number is greater than the
  // the current element it is on in the iteration it will add that to the array and
  // subtract the reference number from the number you are converting
  ref.forEach((el) => {
    while (num >= el[1]) {
      charArr.push(el[0]);
      num -= el[1];
    }
  });
  return charArr.join("");
}
