function BracketMatcher(str: string) {
  let newStr = str.replace(/[a-zA-Z ]+/g, "");
  //   console.log(newStr);

  //   while (newStr.includes("()")) {
  while (newStr.length > 1) {
    newStr = newStr.replace(/(\(\))/g, "");
    // console.log(newStr);
  }

  return newStr.length === 0 ? 1 : 0;
}

// keep this function call here
// @ts-ignore
console.log(BracketMatcher(readline()));
// console.log(BracketMatcher("(coder)(byte))")); // 0
// console.log(BracketMatcher("(c(oder)) b(yte)")); // 1
