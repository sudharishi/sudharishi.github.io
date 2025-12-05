let products = [];

function addProduct() {
    let obj = {
        name: document.getElementById("pname").value,
        price: document.getElementById("pprice").value,
        image: document.getElementById("pimg").value,
        category: document.getElementById("pcat").value
    };

    products.push(obj);
    showProducts();
}

function showProducts() {
    let box = document.getElementById("productList");
    box.innerHTML = "";

    products.forEach(p => {
        box.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <p>${p.category}</p>
            </div>
        `;
    });
}

function exportJSON() {
    document.getElementById("jsonOutput").value =
        JSON.stringify(products, null, 2);
}
