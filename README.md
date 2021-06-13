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