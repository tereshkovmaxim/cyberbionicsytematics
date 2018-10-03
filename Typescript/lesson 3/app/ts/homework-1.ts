function filterArray(leftArray: number[], rightArray: number[]) {
  let array = leftArray.concat(rightArray);
  let object = array.reduce( (obj, item) => {
    obj[item] ? obj[item]++ : obj[item] = 1;
    return obj;
  }, {} );
  let result = [];
  for (let key in object){
    if (object[key] == 1){
      result.push(parseInt(key));
    }
  }
  return result;
}

console.log(filterArray([1,2,3], [1, 3]));