//Exercise: Notion
// Implementation
function cinemaBooking (day, ticketType, hasMembership, quantity){
    const prices = {
        adult: 12, 
        child: 8,
        senior: 6
    }

    let subTotal = 0;
    let finalPrice = 0;
    let discount = 0;
    let notes = [];
    let warnings = [];

if(quantity <= 0){
    warnings.push("invalid function");
    return {
        warnings
    }
} if(ticketType !== "adult" && ticketType !== "child" && ticketType !== "senior"){
    warnings.push("invalid function");
    return {
        warnings
    }

} 
subTotal = prices[ticketType] * quantity;
if(day === "Tuesday"){
    discount += subTotal * 0.20;
    notes.push("Tuesday discount applied");
} if( hasMembership === true) {
    discount += subTotal * 0.10;
    notes.push("Membership discount applied.Very wise movement!");
}
 finalPrice = subTotal - discount;
    if(finalPrice < 0){
    warnings.push("invalid function");
    return {
        warnings
    }
}
 return {
    subTotal,
    discount,
    finalPrice,
    notes,
    warnings
 }
}
// testeando :
console.log(cinemaBooking("Saturday", "adult", true , 1));
console.log(cinemaBooking("Tuesday", "child", true, 2));
console.log(cinemaBooking("Tuesday", "senior", true, 30));
console.log(cinemaBooking("Tuesday", "child", true, 25));
