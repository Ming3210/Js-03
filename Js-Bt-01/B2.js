let a = +prompt("Nhập cạnh 1 của tam giác")
let b = +prompt("Nhập cạnh 2 của tam giác")
let c = +prompt("Nhập cạnh 3 của tạm giác")
if(isNaN(a)==false && isNaN(b)==false &&isNaN(c)==false){
    if(a+b>c && a+c>b && b+c>a) alert("Đây là 3 cạnh của 1 tam giác")
    else alert("Đây ko p 3 cạnh 1 tam giác")
}else alert("Invalid Input")