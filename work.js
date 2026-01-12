document.addEventListener('DOMContentLoaded', () => {
    const farmerBtn = document.getElementById('farmer-btn');
    const buyerBtn = document.getElementById('buyer-btn');
    const productList = document.getElementById('product-category');
    const farmerStuff = document.getElementById('farmer-stuff');
    const selectedCategory = document.getElementById('selected-category');
    const selectedCategoryLabel = document.getElementById('selected-category-label');
   
    
    let products = []; // In-memory storage; replace with API calls for persistence

    // Toggle to farmer mode
    farmerBtn.addEventListener('click', () => {
        farmerStuff.style.display = 'block';     
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

    productList.addEventListener('change', () => {
        const selectedProduct = productList.value;

        
        const Cereals = ["ઘઉં", "ડાંગર / ચોખા", "બાજરી", "જ્વાર", "મકાઈ", "રાગી"];
        const Pulses= ["તુવર", "ચણા", "મૂંગ", "ઉડદ", "મસૂર", "વટાણા", "મઠ"];
        const OilSeeds= ["મગફળી", "તીલ", "સરસવ / રાઈ", "કાસ્ટર", "સોયાબીન", "સૂર્યમુખી"];
        const Spices= ["જીરું", "ધાણા", "વરીયાળી", "ઇસબગુલ", "મરી", "મેથી"];
        const CashCrops= ["કપાસ", "તમાકુ", "શેરડી"];
        const Vegetables= ["બટાકા", "ડુંગળી", "ટામેટા", "ભીંડા", "રીંગણા", "કોબીજ", "ફુલાવર", "ગાજર", "દૂધી", "તુરીયા", "કારેલા"];
        const Fruits= ["કેરી", "કેળાં", "ચીકુ", "પપૈયા", "દાડમ", "સંતરા", "લીંબુ", "જામફળ", "નાળિયેર"];
        const Fodder= ["જુવાર ચારો", "બાજરી ચારો", "લુસરન", "નેપિયર ઘાસ", "બરસીમ"];




        if (selectedProduct === "Cereals") {
            selectedCategory.innerHTML = '';
            selectedCategoryLabel.style.display = 'block';
            for (let i = 0; i < Cereals.length; i++) {
                let option = document.createElement("option");
                option.value = Cereals[i];
                option.textContent = Cereals[i];
                selectedCategory.appendChild(option);
            }
        } else if(selectedProduct === "Oilseeds"){
            selectedCategory.innerHTML = '';
            selectedCategoryLabel.style.display = 'block';
            for (let i = 0; i < OilSeeds.length; i++) {
                let option = document.createElement("option");
                option.value = OilSeeds[i];
                option.textContent = OilSeeds[i];
                selectedCategory.appendChild(option);
            }
        } else if(selectedProduct === "Pulses"){
            selectedCategory.innerHTML = '';
            selectedCategoryLabel.style.display = 'block';
            for (let i = 0; i < Pulses.length; i++) {
                let option = document.createElement("option");
                option.value = Pulses[i];
                option.textContent = Pulses[i];
                selectedCategory.appendChild(option);
            }
        } else if(selectedProduct === "Spices"){
            selectedCategory.innerHTML = '';
            selectedCategoryLabel.style.display = 'block';
            for (let i = 0; i < Spices.length; i++) {
                let option = document.createElement("option");
                option.value = Spices[i];
                option.textContent = Spices[i];
                selectedCategory.appendChild(option);
            }
        } else if(selectedProduct === "CashCrops"){
            selectedCategory.innerHTML = '';
            selectedCategoryLabel.style.display = 'block';
            for (let i = 0; i < CashCrops.length; i++) {
                let option = document.createElement("option");
                option.value = CashCrops[i];
                option.textContent = CashCrops[i];
                selectedCategory.appendChild(option);
            }
        } else if(selectedProduct === "Vegetables"){
            selectedCategory.innerHTML = '';
            selectedCategoryLabel.style.display = 'block';
            for (let i = 0; i < Vegetables.length; i++) {
                let option = document.createElement("option");
                option.value = Vegetables[i];
                option.textContent = Vegetables[i];
                selectedCategory.appendChild(option);
            }
        } else if(selectedProduct === "Fruits"){
            selectedCategory.innerHTML = '';
            selectedCategoryLabel.style.display = 'block';
            for (let i = 0; i < Fruits.length; i++) {
                let option = document.createElement("option");
                option.value = Fruits[i];
                option.textContent = Fruits[i];
                selectedCategory.appendChild(option);
            }
        } else if(selectedProduct === "Fodder Crops"){
            selectedCategory.innerHTML = '';
            selectedCategoryLabel.style.display = 'block';
            for (let i = 0; i < Fodder.length; i++) {
                let option = document.createElement("option");
                option.value = Fodder[i];
                option.textContent = Fodder[i];
                selectedCategory.appendChild(option);
            }
        } else {
            selectedCategory.innerHTML = '';
            selectedCategoryLabel.style.display = 'none';
        }
        selectedCategory.style.display = 'block';
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
});