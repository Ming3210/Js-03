let a = +prompt("Nhập năm")
if(isNaN(a)==false){
    if((a % 4==0 &&a%100 !=0)||(a % 400==0)){
        alert("Đây là nam nhuận")
    }else alert("Đây ko là năm nhuận")
}else alert("Invalid Input")