Describe: beepBoop();

Test: "It will convert user input string to number"
Code: beepBoop("1");
Expected Output: 1

Test: "It will create a range of numbers from user number"
Code: beepBoop("5");
Expected Output: "[0,1,2,3,4,5]"

Test: "It will recognize "1" in the array and replace with "Beep!""
Code: beepBoop("1");
Expected Output: "Beep!"

Test: "It will return "Beep!" when a number starts with 1"
Code: vowelCounter("1");
Expected Output: "Beep!"

Test: "It will return "Boop!" when a number starts with 2"
Code: vowelCounter("2");
Expected Output: "Boop!"

Test: "It will return "Won't you be my neighbor?" when a number starts with 3"
Code: vowelCounter("3");
Expected Output: "Won't you be my neighbor?"

Test: "It will return "Boop!" when a number includes 2"
Code: vowelCounter("12");
Expected Output: "Boop!"

Test: "It will return "Won't you be my neighbor?" when a number includes 3"
Code: vowelCounter("123");
Expected Output: "Won't you be my neighbor?"

Test: "It will return "Beep!" when a number includes 1"
Code: vowelCounter("41");
Expected Output: "Beep!"

Test: "It will return user input when it does not contain 1 ,2 ,3"
Code: vowelCounter("4");
Expected Output: "4"