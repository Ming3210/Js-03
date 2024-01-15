let a = +prompt("Nhập năm")
let b = +prompt("Nhập tháng")
if(a>0&& b>0 && b<13){
    if((a % 4==0 &&a%100 !=0)||(a % 400==0)){
       switch(a){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("Tháng này có 31 ngày")
            break
        case 4:
        case 6:
        case 9:
        case 11:
            alert("Tháng này có 30 ngày")
        case 2:
            alert("Tháng này có 29 ngày")
       }
    }else {
        switch(a){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                alert("Tháng này có 31 ngày")
                break
            case 4:
            case 6:
            case 9:
            case 11:
                alert("Tháng này có 30 ngày")
            case 2:
                alert("Tháng này có 28 ngày")
           }
    }
}else alert("Invalid Input")