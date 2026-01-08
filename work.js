document.addEventListener('DOMContentLoaded', () => {
    const farmerBtn = document.getElementById('farmer-btn');
    const buyerBtn = document.getElementById('buyer-btn');
    const addProductSection = document.getElementById('add-product-section');
    const searchBtn = document.getElementById('search-btn');
    const searchBar = document.getElementById('search-bar');
    const productList = document.getElementById('product-category');
    const addProductForm = document.getElementById('add-product-form');
    const farmerStuff = document.getElementById('farmer-stuff');

    let products = []; // In-memory storage; replace with API calls for persistence

    // Toggle to farmer mode
    farmerBtn.addEventListener('click', () => {
        farmerStuff.style.display = 'block';
        addProductSection.style.display = 'block';
        productList.style.display = 'block';
        buyerBtn.style.display = 'none';
        farmerBtn.style.display = 'none';
    });

    // Toggle to buyer mode
    buyerBtn.addEventListener('click', () => {
        addProductSection.style.display = 'none';
        farmerBtn.style.display = 'none';
        buyerBtn.style.display = 'none';
    });


    // Add product
    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value;
        const quantity = document.getElementById('product-quantity').value;
        const category = document.getElementById('product-category').value;
        products.push({ name, price, quantity, category });
        displayProducts(products);
        addProductForm.reset();
        
        
    });

    // Search products
    searchBtn.addEventListener('click', () => {
        const query = searchBar.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(query));
        displayProducts(filtered);
    });

    // Display products
    function displayProducts(prods) {
        productList.innerHTML = '';
        prods.forEach((prod, index) => {
            const item = document.createElement('div');
            item.className = 'product-item';
            item.innerHTML = `
                <h3>${prod.name}</h3>
                <p>Price: $${prod.price}/kg</p>
                <p>Quantity: ${prod.quantity} kg</p>
                <button onclick="buyProduct(${index})">Buy</button>
            `;
            productList.appendChild(item);
        });
    }

    // Simulate buying (alert for demo)
    window.buyProduct = (index) => {
        alert(`Purchased ${products[index].name}!`);
        // In real app, handle transaction logic here
    };
});