let a = +prompt("Nhập số có 4 chữ số")
let b = Math.floor((a/1000)%10)
let c = Math.floor((a/100)%10)
let d = Math.floor((a/10)%10)
let e = Math.floor(a%10)
if(isNaN(a)==false){
    alert("Hàng nghìn : "+b)
    alert("Hàng trăm "+ c)
    alert("Hàng chục "+d)
    alert("Hàng đơn vị "+e)
}