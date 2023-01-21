# Mr. Roboger's Neighborhood

#### By E. Luckie ☀️

#### A simple webpage where users are asked to input a number and the webpage displays an array from 0 to their number, replacing numbers containing 1, 2, or 3 with certain phrases.

## Technologies Used

* JavaScript
* HTML
* CSS
* Markdown
* Git

## Description

This webpage is intended to be a nod to Mr. Roger's Neighborhood and explore JavaScript capabilities. Users are asked to input their name and a number in the form. An array is formed starting from 0 to the number they input. A drawing of the sun is displayed back to the user along with their array in numerical order with certain substitutions. If the user fails to input a name or number, an error message displays reminding them to enter both pieces of information. 

* If a number in the array contains a 1 (but **not** a 2 or 3), the number is replaced with the phrase "Beep!"
* If a number in the array contains a 2 (**including** if it contains a 1, but **not** if it includes a 3), the number is replaced with the phrase "Boop!"
* If a number in the array contains a 3 (**including** if it contains a 1 or 2), the number is replaced with the phrase "Won't you be my neighbor, (name)?" where (name) is the user's inputted name from the form.
* If a number in the array **does not contain** a 1, 2, or 3, the number is displayed back in true form.

[Click here](https://eluckie.github.io/mr-robogers-neighborhood/) to view the live version of this webpage.

## Test-Driven Development Tests
#### Describe beepBoop();

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

Test 8: "It should replace all numbers that include the number 3 with 'Won't you be my neighbor, (name)?' regardless of if there's additional numbers in the input, including a 1 or 2"
Code: 
let name = Luckie;
beepBoop(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor, Luckie?", 4, 5]

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of this directory
* Open mr-robogers-neighborhood/index.html in your web browser

## Known Bugs

* No known bugs.

## License

MIT License

Copyright (c) 2023 Elizabeth Luckie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
