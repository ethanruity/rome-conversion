import handleRoman from "../../utils/romanHandler";
import handleNumber from "../../utils/numberHandler";

export default function romanHandler(req, res) {
  const { input } = req.body;
  let parsed = +input;
  if (isNaN(parsed)) {
    const result = handleRoman(input);
    res.status(200).json({ result });
  } else if (typeof parsed === "number") {
    const result = handleNumber(parsed);
    res.status(200).json({ result });
  }
}
