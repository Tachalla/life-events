/*************************************************************************** */
// Array Documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/*************************************************************************** */
// TEST DATA:
var users = [
  { id: 1, username: 'caiva', age: 30 },
  { id: 2, username: 'ahxae', age: 17 },
  { id: 3, username: 'i4tie', age: 42 },
  { id: 4, username: 'bvu7F', age: 19 },
];

/** **************************************************************************/
// EXERCISE 1:
//
// The function below should return an array of users from the TEST
// DATA above that only includes users under the age of 18.
function Exercise1() {
  var endArray = [];
  users.forEach(function (element) {
    if (element.age < 18) {
      endArray.push(element);
    }
  });
  return endArray;
}

/*************************************************************************** */
// EXERCISE 2:
//
// The function below should return an array of strings.  The strings
// should be all of the usernames from the TEST DATA above, in the
// same order.
function Exercise2() {
  var endArray = [];
  users.forEach(function (element) {
    endArray.push(element.username);

  });
  return endArray;
  // Your code here.

}

/*************************************************************************** */
// (BONUS) EXERCISE 3:
//
// The function below should return an array of strings.  The strings
// should be all of the numeric IDs (converted into a string via the
// `toString()` method) from the TEST DATA above where the user is
// over the age of 20 and younger than 40.
function Exercise3() {
  var endArray = [];
  users.forEach(function (element) {
    if (element.age < 40 && element.age > 20) {
      endArray.push(element.id.toString());
    }
  });
  return endArray;
}
// Your code here.



/** **************************************************************************/
// (BONUS) EXERCISE 4:
//
// The function below should return the `users' array from above (TEST
// DATA) in reverse order.  Do not use the built-in reverse function.
function Exercise4() {
  var endArray = [];
  for (var i = users.length - 1; i >= 0; i--) {
    endArray.push(users[i]);
  }

  return endArray;

  // Your code here.

}
