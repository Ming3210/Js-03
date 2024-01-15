let a = prompt("Nhập 1 số")
let b = Math.sqrt(a)
if(isNaN(a)==false){
    if(Number.isInteger(b)) alert("Bạn vừa nhập số chính phương")
    else alert("Bạn ko nhập số chính phương")
}else alert("Invalid Number")