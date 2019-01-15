/* let: this can be describe as block scoped, mean it can be change anytime, this is use to declare a value once*/
/* var: this is a scoped function, mean it can be change/reassign throughout the programme, 
    this can be use temporally when the may need to reasign later*/
/* const: this can also be compared to 'let', mean any variable declared will not be change/reasign
    throughout the programme and the value can't be reasign to a new one, this is use to declare a value once*/

//declaring a variable with let
let happy = 'meLove'
document.write(happy)
document.write('<br >')

//declaring a variable with var 
var currentApple = 5
var newApple = 8
var totalApple = currentApple + newApple
document.write(totalApple)
document.write('<br >')

//declaring a variable with var using the same value 
var currentApple = 5
var newApple = 8
var totalApple = currentApple + newApple
document.write(totalApple)
document.write('<br >')

//declaring a variable with const
const oldApple = 14
const freshApple = 4
const addApple = oldApple + freshApple
document.write(addApple)
document.write('<br >')


