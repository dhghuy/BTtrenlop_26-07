let soChan=[]
let soLe=[]

for(let i=0; i<20; i++){
    let num = (Math.random() * 20) + 1
    randomNumber = Math.round(num)
    if(randomNumber % 2 == 0) {
        soChan.push(randomNumber);
    } else soLe.push(randomNumber);
}

console.log(soChan);
console.log(soLe);

//Tính phương trình bậc 1.
function ptBac1(a,b) {
    if(a == 0){
        if(b==0) {
            console.log("Pt có vô số nghiệm");
        } else console.log("Pt vô nghiệm")
    } else return  -b/a;
}
var a = prompt("Nhập a:");
var b = prompt("Nhập b:");
let result = ptBac1(a,b);
console.log("Nghiệm x = " +result);

//Tính phương trình bậc 2.
function ptBac2(a,b,c) {
    if (a == 0) {
        console.log("Không thể thực hiện");
    } else {
        delta = (b*b)-(4*a*c);
        if(delta < 0) {
            console.log("Pt vô nghiệm");
        } else if ( delta == 0) {
            x = -b/(2*a);
            console.log("Pt có 1 nghiệm kép");
            console.log("Nghiệm x =" + x);
        } else {
            x1 = (-b+ Math.sqrt(delta))/(2*a);
            x2 = (-b- Math.sqrt(delta))/(2*a);
            console.log("Pt có 2 nghiệm phân biệt")
            console.log("Nghiệm x1 =" + x1);
            console.log("Nghiệm x2 =" + x2);
        }
    }
}
var a = prompt("Nhập a:");
var b = prompt("Nhập b:");
var c = prompt("Nhập c:");
ptBac2(a,b,c);

//Tính năm nhuận/không nhuận.
function tinhnamNhuan(year) {
    if((year % 4 == 0) && (year % 100 == 0) && (year % 400) == 0) 
    {
        console.log(year + " là năm nhuận")
    } else {
        console.log(year + " là năm không nhuận")
    }
}
var year = prompt("Nhập năm:")
tinhnamNhuan(year);