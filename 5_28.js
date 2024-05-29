//1000 A+B
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
console.log(a+b);

//1001 A-B
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
console.log(a-b);

//10998 A*B
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a*b);

//10869 사칙연산
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);

//1008 A/B
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a/b);

//11382 꼬마 정민
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
console.log(a+b+c);

//1330 두 수 비교하기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let sum = a-b

if(sum>0){
    console.log(">")
}else if(sum<0){
    console.log("<")
}else{
    console.log("==")
}

//9498 시험성적

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let score = parseInt(input[0]);

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

//14681 사분면 고르기

let fs = require('fs');
let [x, y] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
if(x>0){
    if(y>0){
        console.log("1")
    }else{
        console.log("4")
    }
}else{
    if(y>0){
        console.log("2")
    }else{
        console.log("3")
    }
}


//2753 윤년
let fs = require('fs');
let year= parseInt(fs.readFileSync('/dev/stdin').toString().trim().split(' '))

if(year%4 == 0){
    if(year%100!=0||year%400==0){
        console.log("1")
    }else{
        console.log("0")
    }
}else{
    console.log("0")
}

//2420 사파리월드
let fs = require('fs');
let [x, y] = fs.readFileSync('sampler.txt').toString().trim().split(' ').map(Number);

console.log(Math.abs(x-y));