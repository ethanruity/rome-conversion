import handleRoman from "../../utils/romanHandler";

export default function equationHandler(req, res) {
  const { numberOne, numberTwo, symbol } = req.body;
  let numOne = +numberOne;
  let numTwo = +numberTwo;
  if (isNaN(numOne)) {
    numOne = handleRoman(numberOne);
  }
  if (isNaN(numTwo)) {
    numTwo = handleRoman(numberTwo);
  }
  if (symbol === "+") {
    let result = numOne + numTwo;
    res.status(200).json({ result });
  }
  if (symbol === "-") {
    let result = numOne - numTwo;
    res.status(200).json({ result });
  }
  if (symbol === "*") {
    let result = numOne * numTwo;
    res.status(200).json({ result });
  }
  if (symbol === "/") {
    let result = numOne / numTwo;
    res.status(200).json({ result });
  }
}
