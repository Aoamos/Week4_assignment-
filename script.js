// 1. Jamb -style (A function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed")
function checkScore(score) {
  if (score >= 180) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}
checkScore(200);

// 2. A function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible"

function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("Not eligible");
  }
}

checkVotingEligibility(15);

//3.  A function that takes a name and score, then returns the grade based on the score.
function checkGrade(name, score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Good";
  } else if (score >= 50) {
    return "Average";
  } else {
    return "Fail";
  }
}

console.log(checkGrade("John", 45));

//4.   A function that takes two boolean values and return "Access granted" only if both are true

function checkAccess(hasID, isAbove18) {
  if (hasID && isAbove18) {
    return "Access granted";
  }
}

console.log(checkAccess(true, true)); // Access granted
