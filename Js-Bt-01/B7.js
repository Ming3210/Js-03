let a =+prompt("Nhập a")
let b =+prompt("Nhập b")
let c =+prompt("Nhập c")
let delta = b*b - 4*a*c
if(isNaN(a)==false && isNaN(c)==false && isNaN(b)==false){
    if(a==0){
        if(b==0){
            if(c==0) console.log("Phương trình vô số nghiệm")
            else console.log("Phương trình vô nghiệm")
        }else{
            if(c==0) console.log("x=0")
            else console.log("x= "+(-c/b))
        }
        
    }else{
        if(b==0){
            if(c==0) console.log("x=0")
            else console.log("x = "+ Math.sqrt(-c/a))
        }else{
            if(c==0) console.log("x = 0 và x = "+ (-b/a) )
            else{
        if(delta>0){
            console.log("x = "+ ((-b+ Math.sqrt(delta))/2) +"và x = " + ((-b-Math.sqrt(delta))/2))
        }else if(delta = 0){
            console.log("x = "+ (-b/(2*a)))
        }else{
            console.log("Phương trình vô nghiệm")
        }
    }
        }
    }
}