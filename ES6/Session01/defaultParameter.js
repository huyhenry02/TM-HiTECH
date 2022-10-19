// num1,num2: 2 tham so cua ham add
function add(num1,num2=10){
    let sum = num1+num2;
    return sum;
}
function hello(userName){
    userName = userName||"Ten mac dinh";
    console.log("Xin chao ban: "+userName);
}

//5,7: gia tri 2 doi so truyen khi goi ham add
var sum = add(5);
console.log("Tong 2 so la: "+sum);
hello();