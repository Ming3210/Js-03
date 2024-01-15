let a = +prompt("Nhập số a")
let b = +prompt("Nhập số b")
if(isNaN(a)==false && isNaN(b)==false){
    if(a%b==0) alert("a chia hết b")
    else if(b%a==0) alert("b chia hết a")
}else alert("Invalid Input")