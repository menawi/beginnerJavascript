let a = (5<6) && (5>6)
console.log(a);

let b = (5<6) || (5>6)
console.log(b);

let c = !((5<6) && (5>6))
console.log(c);

// Logical Operators Exercise

{
    money = 100
    price = 100
    discout = price - (price* 0.50) // 50% discount

    if (money >= price || money >= discount){
        console.log("I Can afford laptop");
    } 
    else { console.log("I Can NOT afford new laptop yet.");}



}

