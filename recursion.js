/** product: calculate the product of an array of numbers. */

//use recursion to solve all of these problems

      const product = (arr) => {
        if (arr.length === 0) {
          return 1;
        }
        return arr[0] * product(arr.slice(1));
      }



//return the longest string in the array and use recursion to solve this problem
function longestWord(arr) {
  if (arr.length === 0) {
    return '';
  }
  let longest = arr[0];
  return arr.reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }
  , longest);
}


function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  return Math.max(words[0].length, longest(words.slice(1)));

}

/** everyOther: return a string with every other letter and use recursion to solve this problem. */

function everyOther(str) {
  //base case
  if (str.length === 0) {
    //return empty string
    return '';
  }
  //recursive case (str.length > 0) 
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    //base case
    if (str.length === 0) {
      return true;
    }
    //recursive case
    //return the first letter of the string and the last letter of the string
    // and call the function again with the sliced string... this slice method will remove the first letter and the last letter
    return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  //base case
  if (arr.length === 0) {
    return -1;
  }
  //recursive case
  //if the first element of the array is equal to the val, return the index of the element
  if (arr[0] === val) {
    return 0;
  }
  //if the last element of the array is equal to the val, return the index of the element
  if (arr[arr.length - 1] === val) {
    return arr.length - 1;
  }
  
  //if the first element of the array is not equal to the val, call the function again with the sliced array
  
  //use reursion to solve this problem
  return findIndex(arr.slice(1), val);

  
  
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
    if(str.length === 0) {
      return '';
    }
    return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if(obj === null) {
    return [];
  }
  if(typeof obj === 'string') {
    return [obj];
  }
  return [...gatherStrings(obj.left), ...gatherStrings(obj.right)];


}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
      if(arr.length === 0) {
        return -1;
      }
      let mid = Math.floor(arr.length / 2);
      if(arr[mid] === val) {
        return mid;
      }
      if(arr[mid] > val) {
        return binarySearch(arr.slice(0, mid), val);
      }
      return binarySearch(arr.slice(mid + 1), val);
      
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
