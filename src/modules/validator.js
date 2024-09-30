/**
 * blankValidator
 * @param {any} arguments
 *
 * @return {boolean} returnValue
 */
export function blankValidator(){
  // 빈문자열이 있나 확인하는 함수
  let returnValue = true;
  for (const argumentsKey in arguments) {
      if(arguments[argumentsKey] === ""){
          returnValue = false;
      };
  }
  return returnValue;
}