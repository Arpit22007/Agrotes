document.addEventListener('DOMContentLoaded', () => {
    const farmerBtn = document.getElementById('farmer-btn');
    const buyerBtn = document.getElementById('buyer-btn');
    const productList = document.getElementById('product-category');
    const farmerStuff = document.getElementById('farmer-stuff');
    const selectedCategory = document.getElementById('selected-category');
    const selectedCategoryLabel = document.getElementById('selected-category-label');
    const submitBtn = document.getElementById('submit-btn');
    
    let products = []; //In-memory storage; replace with API calls for persistence
    
    //Toggle to farmer mode
    farmerBtn.addEventListener('click', () => {
        farmerStuff.style.display = 'block';     
        productList.style.display = 'block';
        buyerBtn.style.display = 'none';
        farmerBtn.style.display = 'none';
    });

    //Toggle to buyer mode
    buyerBtn.addEventListener('click', () => {
        addProductSection.style.display = 'none';
        farmerBtn.style.display = 'none';
        buyerBtn.style.display = 'none';
    });

    productList.addEventListener('change', () => {
    const selectedProduct = productList.value;

    //Data organized into a single lookup object
    const categoryData = {
        "Cereals": ["ઘઉં", "ડાંગર / ચોખા", "બાજરી", "જ્વાર", "મકાઈ", "રાગી"],
        "Pulses": ["તુવર", "ચણા", "મૂંગ", "ઉડદ", "મસૂર", "વટાણા", "મઠ"],
        "Oilseeds": ["મગફળી", "તીલ", "સરસવ / રાઈ", "કાસ્ટર", "સોયાબીન", "સૂર્યમુખી"],
        "Spices": ["જીરું", "ધાણા", "વરીયાળી", "ઇસબગુલ", "મરી", "મેથી"],
        "CashCrops": ["કપાસ", "તમાકુ", "શેરડી"],
        "Vegetables": ["બટાકા", "ડુંગળી", "ટામેટા", "ભીંડા", "રીંગણા", "કોબીજ", "ફુલાવર", "ગાજર", "દૂધી", "તુરીયા", "કારેલા"],
        "Fruits": ["કેરી", "કેળાં", "ચીકુ", "પપૈયા", "દાડમ", "સંતરા", "લીંબુ", "જામફળ", "નાળિયેર"],
        "Fodder Crops": ["જુવાર ચારો", "બાજરી ચારો", "લુસરન", "નેપિયર ઘાસ", "બરસીમ"]
    };

    //Clear existing options
    selectedCategory.innerHTML = '';

    //Check if the selected product exists in our data
    const items = categoryData[selectedProduct];

    if (items) {
        //Show labels and dropdown
        selectedCategoryLabel.style.display = 'block';
        selectedCategory.style.display = 'block';

        //Use forEach for cleaner looping
        items.forEach(item => {
            let option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            selectedCategory.appendChild(option);
        });
    } else {
        //Hide if no match found
        selectedCategoryLabel.style.display = 'none';
        selectedCategory.style.display = 'none';
    }
});


});