// Add to cart section
let totalPrice = 0;
addToCart('card1', 'name1', 'price1');
addToCart('card2', 'name2', 'price2');
addToCart('card3', 'name3', 'price3');
addToCart('card4', 'name4', 'price4');
addToCart('card5', 'name5', 'price5');
addToCart('card6', 'name6', 'price6');
addToCart('card7', 'name7', 'price7');
addToCart('card8', 'name8', 'price8');
addToCart('card9', 'name9', 'price9');

// Discount section
document.getElementById('coupon-apply').addEventListener('click', function () {
    const coupon = document.getElementById('coupon-code');
    const discountEntry = document.getElementById('discount-entry');
    const couponString = coupon.value;
    if (couponString === 'SELL200') {
        const discount = totalPrice * 0.2;
        discountEntry.innerText = discount;
        const totalEntry = document.getElementById('total');
        const total = totalPrice - discount;
        totalEntry.innerText = total;
    }
})