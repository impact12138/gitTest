var num1 = Number("hello world");
console.log(num1);
var num2 = Number("");
console.log(num2);
var num3 = Number("0011100");
console.log(num3);
var num4 = Number(null);
console.log(num4);
var num5 = Number(true);
console.log(num5);  //用Number()能把任何数据类型转换为数值

var num6 = parseInt("343green");
console.log(num6);
var num7 = parseInt(41.34);  //舍去小数点后的数值
console.log(num7);
var num8 = parseInt(070);  //八进制数
console.log(num8);  //parseInt()专门用于把字符串转换为数值

var fnum1 = parseFloat(22.5);
console.log(fnum1);
var fnum2 = parseFloat(0908.23);
console.log(fnum2); //parseFloat()部分区别于parseInt();