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
    return "You are eligible to vote";
  } else {
    return "Not eligible";
  }
}

console.log(checkVotingEligibility(15));

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

console.log(checkAccess(true, true));

// 5. A for loop that go through an array of student score and check the grade if pass or fail
const score = [45, 78, 90, 55, 30]; // I declare this in other not to have error of score not define
for (let i = 0; i < score.length; i++) {
  if (score[i] > 50) {
    console.log ("Pass");
  } else if (score[i] <= 50) {
    console.log( "Fail");
  }
}

//  6. An arrow function that cehck if student pass both English and Math
const checkPass = (English, Math) => {
  if (English >= 50 && Math >= 50) {
    return "Yes";
  } else {
    return "No";
  }
};

// 7. A function that check if user have either an Email or phone number
const UserSignUp = (email, phoneNumber) => {
  if (email || phoneNumber) {
    return "Allow to sign up";
  } else {
    return "Denied to sign up";
  }
};

// 8. A function that validate username and password

function UserValidate(username, password) {
  if (username === "" || password === "") {
    return "Invalid input";
  }
}

//  9. A function accepts Hour work and check if it is full time or Part time
function checkWorkerStatus(hours) {
  return hours >= 40 ? "Full time" : "Part time";
}

// 10. An Arrow function that takes two numbers and return the larger one
const returnBigValue = (a, b) => {
  return a > b ? a : b;
};

console.log(returnBigValue(40, 20));
