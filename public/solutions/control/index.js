/****************************************************************************/
// EXERCISE 1:
//
// In the function below, return true if the input variable is equal
// to the number 42.  Otherwise return false.  Use an `if' statement
// to achieve this.
function Exercise1(input) {
  if (input === 42) {
    return true;
  }

  return false;
}

/************************console.assert(Exercise1('string') === false);
****************************************************/
// EXERCISE 2:
//
// In the function below, return true if the input variable is equal
// to the number 42.  If the input is the number 43 then return null.
// In all other cases return false.
//
// Use an `if' statement to achieve this.
function Exercise2(input) {
  if (input === 42) {
    return true;
  }

  if (input === 43) {
    return null;
  }

  return false;
}

/****************************************************************************/
// EXERCISE 3:
//
// Repeat exercise 2, this time using a `switch' statement.
function Exercise3(input) {
  switch (input) {
    case 42:
      return true;
      break;
    case 43:
      return null;
      break;
    default:
      return false;
      break;
  }
}

/****************************************************************************/
// EXERCISE 4:
//
// In the function below, write a loop that calls the `counter'
// function exactly 3 times.
//
// Example of calling the counter function:
//
//     counter();
//
function Exercise4(counter) {
  for (var i = 0; i < 3; i++) {
    counter();
  }
}

/****************************************************************************/
// (BONUS) EXERCISE 5:
//
// The function below will be called with an array of numbers.  Return
// the sum of those numbers.
// No arguments and an empty array should return zero
function Exercise5(numbers) {
  var sum = 0;
  if (numbers && numbers.length) {
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  }
  return sum;
}
