# _Mr. Roboger's Neighborhood_

#### _A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with exceptions_

#### By _Araceli Valdovinos_

## Technologies Used

* HTML
* JavaScript
* jQuery
* CSS
* Bootstrap



## Description

_This web application takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:_
* _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
* _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
* _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?_
_The exceptions are written from least to most important._
 

## Setup/Installation Requirements

* _Clone the repository to desktop_
* _Navigate inside the folder_
* _open index.html_


## Known Bugs\Goals

* 
* 

## Specs

Describe: beepBoop();

Test: "It will convert user input string to number"
Code: beepBoop("1");
Expected Output: 1

Test: "It will create a range of numbers from user number"
Code: beepBoop("5");
Expected Output: "[0,1,2,3,4,5]"

Test: "It will convert new array with range of numbers to a string "
Code: beepBoop("5");
Expected Output: "["0","1","2","3","4","5"]"

Test: "It will recognize "3" in the array"
Code: beepBoop("5");
Expected Output: "True"

Test: "It will recognize "2" in the array"
Code: beepBoop("2");
Expected Output: "True"

Test: "It will recognize "1" in the array"
Code: beepBoop("1");
Expected Output: "True"

Test: "It will replace "3" in the array with "Won't you be my neighbor?"
Code: beepBoop("3");
Expected Output: "Won't you be my neighbor?"

Test: "It will replace "2" in the array with "Boop!"
Code: beepBoop("2");
Expected Output: "Boop!"

Test: "It will replace "1" in the array with "Beep!"
Code: beepBoop("1");
Expected Output: "Beep!"

Test: "It will replace "3" in the array with "Won't you be my neighbor?"
Code: beepBoop("3");
Expected Output: "Won't you be my neighbor?"

## License

_[MIT](https://opensource.org/licenses/MIT) (c) 2021 Araceli Valdovinos_

## Contact Information

_Araceli Valdovinos araceli.valdovinos@outlook.com_