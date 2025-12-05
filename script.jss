// Load products from products.json
fetch("products.json")
  .then(res => res.json())
  .then(data => {
      const container = document.getElementById("product-list");
      const selectBox = document.getElementById("selectedProduct");

      data.forEach(product => {
          container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
            </div>
          `;

          selectBox.innerHTML += `
            <option value="${product.name}">${product.name}</option>
          `;
      });
  });


// Order Form Submission — save to orders.json (GitHub)
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const order = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        pincode: document.getElementById("pincode").value,
        product: document.getElementById("selectedProduct").value,
        time: new Date().toLocaleString()
    };

    fetch("orders.json")
        .then(res => res.json())
        .then(orders => {
            orders.push(order);

            fetch("orders.json", {
                method: "PUT",
                body: JSON.stringify(orders, null, 2)
            });

            document.getElementById("order-status").innerText = "Order Submitted Successfully!";
        });
});
