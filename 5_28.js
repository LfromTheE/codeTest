//1000 A+B
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = Number(input[0]);
var b = Number(input[1]);
console.log(a+b);

//1001 A-B
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = Number(input[0]);
var b = Number(input[1]);
console.log(a-b);

//10998 A*B
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a*b);

//10869 사칙연산
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);
//1008 A/B
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a/b);
//11382 꼬마 정민
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
console.log(a+b+c);