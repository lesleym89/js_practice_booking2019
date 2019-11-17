function capitalize(word) {

  return word.charAt(0).toUpperCase() + word.slice(1);
}



function generateInitials(firstName, lastName) {

  var getInitials = firstName[0] + "." + lastName[0];
  return getInitials;
}


function addVAT(originalPrice, vatRate) {

  var sum = (originalPrice / 100) * vatRate + originalPrice;

  return sum;

}

function getSalePrice(originalPrice, reduction) {

  var sum = (reduction / 100) * originalPrice;

  return originalPrice - sum;
}

function getMiddleCharacter(str) {

  let length = (str.length);
  let middle = Math.floor(length / 2);

    if (length % 2 === 0) { 
      //if even
      return str[middle - 1] + str[middle];
    } 


   else {
     //if odd
    
  return str[middle]
     
    }
  }


  function reverseWord(word) {
    var wordArr = word.split("");
    var reverseWordArr = wordArr.reverse();
    var reverseWord = reverseWordArr.join("");
    return reverseWord;
  }

  function reverseAllWords(words) {
    return words.split(' ').map(function(word) {
      return word.split('').reverse().join('');
    }).join(' ');
  }

  function countLinuxUsers(users) {
  
    

}

  function getMeanScore(scores) {
    var total = 0, i;
    for (i = 0; i < scores.length; i += 1) {
        total += scores[i];
    }
    return total / scores.length;
  }

  function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error("n is required");
    // Add your code here!
  }

  module.exports = {
    capitalize,
    generateInitials,
    addVAT,
    getSalePrice,
    getMiddleCharacter,
    reverseWord,
    reverseAllWords,
    countLinuxUsers,
    getMeanScore,
    simpleFizzBuzz
  };
