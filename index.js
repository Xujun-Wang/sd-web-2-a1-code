"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 }, // added comma
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6
// sample data with some objects missing the "name" property
const brokenUsers = [
  { id: 1, age: 23 },
  { id: 2, name: "Michael Jordan", age: 56 },
  { id: 3, age: 33 },
  { id: 4, name: "Kobe Bryant", age: 38 },
  { id: 5 },
  { id: 6, name: "LeBron James", age: 42 },
];

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
document.addEventListener("DOMContentLoaded", () => {
  console.log("----------Exercise 1: (every name)----------");

  const namesList = document.getElementById("names-list");
  users.forEach((user) => {
    console.log(user.name); // Print names to console
    const li = document.createElement("li");
    li.textContent = user.name; // Print names to HTML page
    namesList.appendChild(li); // Append list item to the names list
  });
});

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
document.addEventListener("DOMContentLoaded", () => {
  console.log("----------Exercise 2: (names <40 yo)----------");

  const youngCharactersList = document.getElementById("young-characters-list");
  users.forEach((user) => {
    if (user.age < 40) {
      // Filter for age less than 40
      console.log(user.name); // print names to console
      const li = document.createElement("li");
      li.textContent = user.name; // Print names to HTML page
      youngCharactersList.appendChild(li); // Append list item to the young characters list
    }
  });
});

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
function renderNamesList(namesList, listId) {
  const listElement = document.getElementById(listId);
  namesList.forEach((user) => {
    console.log(user.name); // Print names to console
    const li = document.createElement("li");
    li.textContent = user.name; // Print names to HTML page
    listElement.appendChild(li); // Append list item to the function-generated list
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "----------Exercise 3: (function-list in a reusable function)----------"
  );

  renderNamesList(users, "function-list");
});

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function renderFilteredNamesList(namesList, ageThreshold, listId) {
  const listElement = document.getElementById(listId);
  let hasResults = false;

  namesList.forEach((user) => {
    if (user.age < ageThreshold) {
      // Filter for age below the threshold
      console.log(user.name); // Print names to console
      const li = document.createElement("li");
      li.textContent = user.name; // Print names to HTML page
      listElement.appendChild(li); // Append list item to the age-filtered list
      hasResults = true;
    }
  });

  // If no results found, show empty state message
  if (!hasResults) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-list";
    emptyMessage.textContent = `No characters found under age ${ageThreshold}`;
    listElement.appendChild(emptyMessage);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "----------Exercise 4: (<10 yo in a reusable function)----------"
  );

  renderFilteredNamesList(users, 10, "age-filter-list"); // Example usage with age threshold of 10
});

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
function renderNamesListWithErrorHandling(namesList, listId, errorDivId) {
  const listElement = document.getElementById(listId);
  const errorDiv = document.getElementById(errorDivId);
  let hasErrors = false;

  namesList.forEach((user) => {
    if (!user.name) {
      const errorMessage = `Error: Missing name property for user with id ${user.id}`;
      console.error(errorMessage); // Log error to console
      const errorP = document.createElement("p");
      errorP.textContent = errorMessage;
      errorDiv.appendChild(errorP); // Display error message in the error messages div
      hasErrors = true;
    } else {
      console.log(user.name); // Print names to console
      const li = document.createElement("li");
      li.textContent = user.name; // Print names to HTML page
      listElement.appendChild(li); // Append list item to the specified list
    }
  });

  // If no errors, hide the error div and show a message indicating no errors found
  if (!hasErrors) {
    errorDiv.style.display = "none"; // Hide error div if no errors
    const successMessage = document.createElement("p");
    successMessage.className = "success";
    successMessage.textContent = `No errors found. All users have names.`;
    listElement.appendChild(successMessage);
  } else {
    errorDiv.style.display = "block"; // Show error div if there are errors
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("----------Exercise 5: (error handling function)----------");

  renderNamesListWithErrorHandling(
    users,
    "error-handling-list",
    "error-messages"
  );
});

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

document.addEventListener("DOMContentLoaded", () => {
  console.log("----------Exercise 6: (broken array test)----------");

  renderNamesListWithErrorHandling(
    brokenUsers,
    "broken-array-list",
    "broken-array-errors"
  );
});
