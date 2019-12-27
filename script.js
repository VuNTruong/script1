var num1;
var num2;
var num3;

num1 = prompt('Enter number a');
num2 = prompt('Enter number b');
num3 = prompt('Enter number c');

var a = Number(num1);
var b = Number(num2);
var c = Number(num3);

//console.log('Difference of 2 number is ' + (num1Int - num2Int));
//console.log('Sum of 2 number is ' + (num1Int + num2Int));
//console.log('Product of 2 number is ' + num1Int * num2Int);

var delta;
var x1;
var x2;

delta = b*b - 4*a*c;

if (delta < 0) {
    console.log("The equation has no solution ");
} else if (delta == 0) {
    x1 = -b/(2*a);
    console.log("The equation has one solution ");
    console.log(x1);
} else if (delta > 0) {
    // Calculate x1
    x1 = (-b + delta^(1/2)) / (2*a);
    // Calculate x2
    x2 = (-b - delta^(1/2)) / (2*a);
    
    console.log("The equation has 2 solutions ");
    console.log(x1);
    console.log(x2);
}