// Add to cart section
function addToCart(card , itemType, itemPrice){
    document.getElementById(card).addEventListener('click', function () {
        const container = document.getElementById('items-entry');

        const count = container.childElementCount;
        const items = document.getElementById(itemType);
        const itemName = items.innerText;
        const item = document.createElement('p');

        item.innerHTML = `${count+1}. ${itemName}`;
        container.appendChild(item);
// Total price section
        const price = document.getElementById(itemPrice);
        const priceString = price.innerText;
        const priceNum = parseInt(priceString);
        totalPrice += priceNum;
        const priceEntry = document.getElementById('total-price');
        priceEntry.innerText = totalPrice;
     });
   
}