export default function handleRoman(rom) {
  let ref = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let sum = 0;
  let upperRoman = rom.toUpperCase();
  for (let i = 0; i < upperRoman.length; i++) {
    let current = ref[upperRoman[i]];
    let next = ref[upperRoman[i + 1]];
    // Check if the current value is less than the next, if it
    // is subtract the smaller value from the bigger value,
    // for example, IX => 10 - 1 = 9
    if (current < next) {
      sum += next - current;
      i++;
    } else {
      // If not just add it to the accumulator
      sum += current;
    }
  }
  if (isNaN(sum)) {
    return "Please enter a Roman Numeral or Number";
  } else {
    return sum;
  }
}
