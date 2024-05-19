const items_products = [
    {
        id: 1,
        title: "Nuturemite Abso curcumin 500 mg Veg capsules",
        uses: "MEN HEALTH, WOMEN HEALTH",
        price: "₹858.00",
        image: "https://nuturemite.info/wp-content/uploads/2022/11/1074354-3-300x225.jpg"
    },
    {
        id: 2,
        title: "Nuturemite Amla Powder 250 gms",
        uses: "AYURVEDIC",
        price: "₹128.00",
        image: "https://nuturemite.info/wp-content/uploads/2022/11/1074363-1-300x225.jpg"
    },
    {
        id: 3,
        title: "Nuturemite Amla Powder 450 gms",
        uses: "AYURVEDIC",
        price: "₹221.00",
        image: "https://nuturemite.info/wp-content/uploads/2022/11/1074340-1-300x225.jpg"
    },
    {
        id: 4,
        title: "Nuturemite Amla Powder 900 gms",
        uses: "AYURVEDIC",
        price: "₹360.00",
        image: "https://nuturemite.info/wp-content/uploads/2022/11/1074341-1-300x225.jpg"
    },
    {
        id: 5,
        title: "Nuturemite Ashwagandha Powder 250 gms",
        uses: "AYURVEDIC",
        price: "₹260.00",
        image: "https://nuturemite.info/wp-content/uploads/2022/11/1074342-1-300x225.jpg"
    },
    {
        id: 6,
        title: "Nuturemite Ashwagandha Powder 450 gms",
        uses: "AYURVEDIC",
        price: "₹488.00",
        image: "https://nuturemite.info/wp-content/uploads/2022/11/1074343-1-300x225.jpg"
    },
    {
        id: 7,
        title: "Astaxanthin 6 mg Veg Capsules",
        uses: "ANTIOXIDANTS, VITAMINS& MINERALS Nuturemite AstaReal",
        price: "₹413.00",
        image: "https://nuturemite.info/wp-content/uploads/2022/11/1074360-3-300x225.jpg"
    }
];

let cartItems =[];

function display(cartItems) {
    if (cartItems.length == 0) {
        document.getElementById('cartItems').innerHTML = "Cart is empty";
    } else {
        document.getElementById('cartItems').innerHTML = cartItems.map((item) => {
            var { title, uses, price, image } = item;
            return (
                `<div class="i">
                   <img class="pro" src="${image}" alt="products">
                   <p>${uses}</p>
                   <h5>${title}</h5>
                   <p>${price}</p>
                   <button onclick="removeFromCart(${item.id})">Remove</button>
               </div>`
            );
        }).join('');
    }
}

function addtocart(id) {
    const item = items_products.find(product => product.id === id);
    if (item && !cartItems.find(cartItem => cartItem.id === item.id)) {
        cartItems.push(item);
        document.getElementById('count').innerHTML = cartItems.length;
        display(cartItems);
    }
}

function removeFromCart(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    display(cartItems);
}

document.addEventListener("DOMContentLoaded", function() {
    const categories = [...new Set(items_products.map((item) => item))];

    document.getElementById('items').innerHTML = categories.map((item) => {
        var { title, uses, price, image } = item;
        return (
            `<div class="i">
                <img class="pro" src="${image}" alt="products">
                <p>${uses}</p>
                <h5>${title}</h5>
                <p>${price}</p>
                <div id='buy' class='buy' onClick='addtocart(${item.id})'>
                    <img src='images/buy.png' alt='buy'>
                </div>
            </div>`
        );
    }).join('');
    document.getElementById('count').innerHTML = cartItems.length;
    document.getElementById('displayproducts').style.display = 'block';
    document.getElementById('cartsection').style.display = 'none';
    document.getElementById('cart').style.display = 'flex';
    display(cartItems);
});

function cart(){
    document.getElementById('cartsection').style.display = 'block';
    document.getElementById('displayproducts').style.display = 'none';
    document.getElementById('cart').style.display = 'none';

}

function back(){
    document.getElementById('count').innerHTML = cartItems.length;
    document.getElementById('displayproducts').style.display = 'block';
    document.getElementById('cartsection').style.display = 'none';
    document.getElementById('cart').style.display = 'flex';
}

