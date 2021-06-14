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

_Describe: beepBoop();_

_Test: "It will convert user input string to number"_
_Code: const number = parseInt(userNum);_
_Expected Output: 1_

_Test: "It will create a range of numbers from user number"_
_Code: for (let i=0; i <=userNum; i+=1) {output.push(i)};_
_Expected Output: "[0,1,2,3,4,5]"_

_Test: "It will convert range of numbers to a string"_
_Code: string = output.join().split(", ")_
_Expected Output: "["0,1,2,3,4,5"]"_

_Test: "It will replace "3" in the range of numbers with "Won't you be my neighbor"_
_Code: if (output[j].toString().includes("3")) {_
_output[j] = "Won't you be my neighbor?"}_
_Expected Output: "["0,1,2,Won't you be my neighbor?"]"_

_Test: "It will replace "2" in the range of numbers with "Boop!"_
_Code: else if (output[j].toString().includes("2")){_
_output[j] = "Boop!"_
_Expected Output: "["0,1,Boop!,3"]"_




## License

_[MIT](https://opensource.org/licenses/MIT) (c) 2021 Araceli Valdovinos_

## Contact Information

_Araceli Valdovinos araceli.valdovinos@outlook.com_