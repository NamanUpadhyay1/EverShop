//Q.1 Write a function that takes two strings, return true if they are anagrams of one another.

// function checkStringsAnagram(string1, string2) 
// {
//     let len1 = string1.length;
//     let len2 = string2.length;

//     if(len1 !== len2)
//     {
//        console.log('Invalid Input');
//     }

//     let str1 = string1.split('').sort().join('')
//     let str2 = string2.split('').sort().join('')

//     if(str1 === str2)
//     {
//        console.log("True")
//     } 
//     else 
//     { 
//        console.log("False")
//     }
// }

//  checkStringsAnagram("listen", "silent")

//Q.2 Diamond pattern

// let n = 4;
// let string = "";

// for (let i = 1; i <= n; i++) 
// {
//   for (let j = 1; j < n - i + 1; j++) 
//   {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) 
//   {
//     string += String.fromCharCode(k + 65)
//   }
//   string += "\n"
// }
// for (let i = 1; i <= n - 1; i++) 
// {
//   for (let j = 1; j < i + 1; j++) 
//   {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) 
//   {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);

//Q.3. Write a function that find the pairs of array element for which sum is equal to given target value (Two Sum Problem)

// function twoSum(nums, target) 
// {
//     var map = [];
//     var indexnum = [];
    
//     for (var x = 0; x < nums.length; x++)
//     {
//     if (map[nums[x]] != null)
//     {
//     var index = map[nums[x]]
//     indexnum[0] = index
//     indexnum[1] = x
//     break
//     }
//     else
//     {
//     map[target - nums[x]] = x
//     }
//     }
//     return indexnum;
// }
//   console.log(twoSum([10,20,10,40,50,60,70],50))

// Q.4 Write a function that takes a string as input and returns a new string with the words reversed but the letters in each word remain in the original order. 


// function string(str)
// {
//     let ascending = str.split("")
//     ascending.sort()
//     let sortedStr = ascending.join("")
//     return sortedStr
// }
// console.log(string('The quick brown fox jumps over the lazy dog'))