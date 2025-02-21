/*
DESCRIPTION:
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

*/

function mergeArrays(arr1, arr2) {
  let arr3 = [];
  arr1.push(...arr2)
  arr1.sort((a,b)=> a - b)
          arr1.forEach(element => {
           if (!arr3.includes(element)) {
               arr3.push(element);
           }
       });
 return arr3
}
 




