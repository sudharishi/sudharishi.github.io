fetch("products.json")
.then(res => res.json())
.then(data => {
    let box = document.getElementById("products");

    data.forEach(p => {
        box.innerHTML += `
            <div class="card">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <p>${p.category}</p>
                <a href="order.html"><button>Order Now</button></a>
            </div>
        `;
    });
});
