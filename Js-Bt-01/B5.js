let a = +prompt("Nhập a")
let b = +prompt("Nhập b")
let result = -b/a
if(isNaN(a)==false && isNaN(b)==false){
    if(a==0){
        if(b==0) alert("Phương trình vô số nghiệm")
        else console.log("Phương trình vô nghiệm")
    }if(a!=0){
        console.log("Nghiệm của pt = "+(result))
    }
}