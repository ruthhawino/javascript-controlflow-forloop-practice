//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible
 //by 3,
//"Buzz" if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}