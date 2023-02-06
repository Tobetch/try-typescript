function MinWindowSubstring(strArr: Array<string>) {
  const input = strArr[0];
  const inputArray = input.split("");
  // console.info(input);
  // console.info(inputArray);
  const target = strArr[1];
  const targetArray = target.split("");
  // console.info(target);
  // console.info(targetArray);

  let answer = input;

  while (inputArray.length > 0) {
    // 最初の文字列が対象外の場合はスキップする
    if (!targetArray.indexOf(inputArray[0])) {
      inputArray.splice(0, 1);
      continue;
    } else {
      inputArray.forEach((_e, i) => {
        const newInputArray = inputArray.slice(0, i + 1);
        if (
          hasAllTarget(newInputArray, targetArray) &&
          answer.length > newInputArray.length
        ) {
          answer = newInputArray.join("");
        }
      });
      inputArray.splice(0, 1);
    }
  }

  // code goes here
  return answer;
}

function hasAllTarget(inputArray: Array<string>, targetArray: Array<string>) {
  let hasAllTarget = true;
  targetArray.forEach((target) => {
    if (inputArray.includes(target)) {
      inputArray.splice(inputArray.indexOf(target), 1);
      // console.log(`target inputArray: ${target} ${inputArray}`);
    } else {
      hasAllTarget = false;
    }
  });

  return hasAllTarget;
  // return targetArray.every((target) => {
  //   if (inputArray.indexOf(target) >= 0) {
  //     inputArray.splice(inputArray.indexOf(target), 1);
  //     return true;
  //   }
  // });
  //   return targetArray.every((target) => inputArray.includes(target));
}

// keep this function call here
// @ts-ignore
// console.log(MinWindowSubstring(readline()));
// console.log(MinWindowSubstring(["faksfajee", "jefaa"]));
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])); // aksfaje
// console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"]));
