//!anonymous function
//! a)Print odd numbers in an array
var result = [];
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//!IIFE function
//! a)Print odd numbers in an array
var result1 = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result1.push(arr[i]);
    }
  }
  console.log(result1);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//!Arrow function
//! a)Print odd numbers in an array
var result = [];
var odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//!anonymous function
//!b)Convert all the strings to title caps in a string array- -

(function () {
  var toTitleCase = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  var convertToTitleCaps = function (arr) {
    return arr.map(toTitleCase);
  };

  var stringArray = ["hello world", "good morning", "how are you"];
  var titleCapsArray = convertToTitleCaps(stringArray);
  console.log(titleCapsArray);
})();

//!IIFE function
//!Convert all the strings to title caps in a string array- -

(function () {
  function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  function convertToTitleCaps(arr) {
    return arr.map(toTitleCase);
  }

  var stringArray = ["hello world", "good morning", "how are you"];
  var titleCapsArray = convertToTitleCaps(stringArray);
  console.log(titleCapsArray);
})();

//!Arrow function
//!Convert all the strings to title caps in a string array- -

(function () {
  var toTitleCase = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  var convertToTitleCaps = (arr) => arr.map(toTitleCase);

  var stringArray = ["hello world", "good morning", "how are you"];
  var titleCapsArray = convertToTitleCaps(stringArray);
  console.log(titleCapsArray);
})();

//!anonymous function
//!c)Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += (function (num) {
    return num;
  })(numbers[i]);
}

console.log(sum);

//!IIFE function

var numbers1 = [1, 2, 3, 4, 5];
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += (function (num) {
    return num;
  })(numbers[i]);
}

console.log(sum);

//!Arrow function

var numbers2 = [1, 2, 3, 4, 5];
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += ((num) => num)(numbers[i]);
}

console.log(sum);

//!anonymous function
//!d)Return all the prime numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = numbers.filter(function (num) {
  if (num <= 1) return false; // 1 and numbers less than 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // if num is divisible by any number other than 1 and itself, it's not prime
  }
  return true; // if num is not divisible by any number other than 1 and itself, it's prime
});

console.log(primeNumbers);

//!IIFE function

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function (arr) {
  return arr.filter(function (num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
})(numbers);

console.log(primeNumbers);

//!Arrow function

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = numbers.filter((num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
});

console.log(primeNumbers);

//!anonymous function
//!e)Return all the palindromes in an array

var words = ["radar", "level", "hello", "world", "madam", "racecar"];

var palindromes = words.filter(function(word) {
    var reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
});

console.log(palindromes);

//!IIFE function

var words = ["radar", "level", "hello", "world", "madam", "racecar"];

var palindromes = (function(arr) {
    return arr.filter(function(word) {
        var reversedWord = word.split("").reverse().join("");
        return word === reversedWord;
    });
})(words);

console.log(palindromes);


//!Arrow function

var words = ["radar", "level", "hello", "world", "madam", "racecar"];

var palindromes = words.filter(word => {
    var reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
});

console.log(palindromes);

//!anonymous function
//!f)Return median of two sorted arrays of the same size.

var findMedianSortedArrays = function(nums1, nums2) {
  var mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  var length = mergedArray.length;
  
  if (length % 2 === 0) {
      return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
  } else {
      return mergedArray[Math.floor(length / 2)];
  }
};
var nums1 = [1, 3, 5];
var nums2 = [2, 4, 6];
console.log(findMedianSortedArrays(nums1, nums2));

//!IIFE function
var findMedianSortedArrays1 = (function(nums1, nums2) {
  var mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  var length = mergedArray.length;
  
  if (length % 2 === 0) {
      return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
  } else {
      return mergedArray[Math.floor(length / 2)];
  }
})([1, 3, 5], [2, 4, 6]);

console.log(findMedianSortedArrays);

//!anonymous function
//!g)Remove duplicates from an array

var removeDuplicates = function(arr) {
  return arr.filter(function(item, index) {
      return arr.indexOf(item) === index;
  });
};
var arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
var uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray);

//!IIFE function
var uniqueArray1 = (function(arr) {
  return arr.filter(function(item, index) {
      
      return arr.indexOf(item) === index;
  });
})([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueArray);

//!anonymous function
//!h)Rotate an array by k times

var rotateArray = function(arr, k) {
 
  var rotations = k % arr.length;
  return arr.slice(rotations).concat(arr.slice(0, rotations));
};
var array = [1, 2, 3, 4, 5];
var rotations = 3;
var rotatedArray = rotateArray(array, rotations);
console.log(rotatedArray);

//!IIFE function

var array1 = [1, 2, 3, 4, 5];
var rotations1 = 3;

var rotatedArray1 = (function(arr, k) {
    // Calculate the effective rotation amount
    var rotations = k % arr.length;
    
    // Perform rotation using slice and concat
    return arr.slice(rotations).concat(arr.slice(0, rotations));
})(array, rotations);

console.log(rotatedArray);