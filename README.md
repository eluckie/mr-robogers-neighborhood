# Mr. Roboger's Neighborhood

#### By E. Luckie ☀️

#### _{Brief description of application}_

## Technologies Used

* HTML
* CSS
* JavaScript
* Markdown
* Git

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

[Click here](https://eluckie.github.io/_______/) to view the live version of this ______ webpage.

## Test-Driven Development Tests
Describe beepBoop();

Test 1: "It should return an array of numbers from 0 to user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test 2: "It should replace the number 1 in the array with a string 'Beep!'"
Code: beepBoop(5);
Expected Output: [0, "Beep!", 2, 3, 4, 5];

Test 3: "It should replace the number 2 in the array with a string 'Boop!'"
Code: beepBoop(5);
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5]

Test 4: "It should replace the number 3 in the array with a string 'Won't you be my neighbor?'"
Code: beepBoop(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test 5: "It should replace all numbers that include the number 1 with 'Beep!' regardless of if there's additional numbers in the input"
Code: beepBoop(10);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"] 

Test 6: "It should replace all numbers that include the number 2 with 'Boop!' regardless of if there's additional numbers in the input, including a 1"
Code: beepBoop(15);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Beep!", "Beep!", "Beep!"]

Test 7: "It should replace all numbers that include the number 3 with 'Won't you be my neighbor?' regardless of if there's additional numbers in the input, including a 1 or 2"
Code: beepBoop(15);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!"]