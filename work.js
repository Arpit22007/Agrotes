document.addEventListener('DOMContentLoaded', () => {
    const farmerBtn = document.getElementById('farmer-btn');
    const buyerBtn = document.getElementById('buyer-btn');
    const productList = document.getElementById('product-category');
    const farmerStuff = document.getElementById('farmer-stuff');
    const selectedCategory = document.getElementById('selected-category');
    const selectedCategoryLabel = document.getElementById('selected-category-label');
    const submitBtn = document.getElementById('submit-btn');
    const priceResults = document.getElementById('price-results');
    const priceBody = document.getElementById('price-body');

    // 1. Translation Map: Gujarati to English (Required for API filters)
    const translationMap = {
        "ઘઉં": "Wheat", "ડાંગર / ચોખા": "Paddy(Dhan)(Common)", "બાજરી": "Bajra(Pearl Millet/Cumbu)",
        "મકાઈ": "Maize", "કપાસ": "Cotton", "મગફળી": "Groundnut", "તુવર": "Arhar (Tur/Red Gram)",
        "ચણા": "Bengal Gram(Gram)(Whole)", "બટાકા": "Potato", "ડુંગળી": "Onion", "ટામેટા": "Tomato",
        "જીરું": "Cummin Seed(Jeera)", "ધાણા": "Coriander(Leaves)", "કેરી": "Mango"
    };

    // 2. Data Categories
    const categoryData = {
        "Cereals": ["ઘઉં", "ડાંગર / ચોખા", "બાજરી", "જ્વાર", "મકાઈ", "રાગી"],
        "Pulses": ["તુવર", "ચણા", "મૂંગ", "ઉડદ", "મસૂર", "વટાણા", "મઠ"],
        "Oilseeds": ["મગફળી", "તીલ", "સરસવ / રાઈ", "કાસ્ટર", "સોયાબીન", "સૂર્યમુખી"],
        "Spices": ["જીરું", "ધાણા", "વરીયાળી", "ઇસબગુલ", "મરી", "મેથી"],
        "CashCrops": ["કપાસ", "તમાકુ", "શેરડી"],
        "Vegetables": ["બટાકા", "ડુંગળી", "ટામેટા", "ભીંડા", "રીંગણા", "કોબીજ", "ફુલાવર", "ગાજર", "દૂધી", "તુરીયા", "કારેલા"],
        "Fruits": ["કેરી", "કેળાં", "ચીકુ", "પપૈયા", "દાડમ", "સંતરા", "લીંબુ", "જામફળ", "નાળિયેર"]
    };

    // Mode Toggles
    farmerBtn.addEventListener('click', () => {
        farmerStuff.style.display = 'block';     
        productList.style.display = 'block';
        submitBtn.style.display = 'block';
        buyerBtn.style.display = 'none';
        farmerBtn.style.display = 'none';
    });

    // Update sub-category dropdown
    productList.addEventListener('change', () => {
        const selected = productList.value;
        selectedCategory.innerHTML = '<option value="" disabled selected>-- પસંદ કરો --</option>';
        const items = categoryData[selected];

        if (items) {
            selectedCategoryLabel.style.display = 'block';
            selectedCategory.style.display = 'block';
            items.forEach(item => {
                let option = document.createElement("option");
                option.value = item;
                option.textContent = item;
                selectedCategory.appendChild(option);
            });
        }
    });

    // 3. API Fetch Logic
    submitBtn.addEventListener('click', async () => {
        const gujaratiCrop = selectedCategory.value;
        const englishCrop = translationMap[gujaratiCrop] || gujaratiCrop;
        
        priceBody.innerHTML = '<tr><td colspan="4">માહિતી લોડ થઈ રહી છે...</td></tr>';
        priceResults.style.display = 'block';

        try {
            // Using a sample open endpoint for Agmarknet data
            const response = await fetch(`https://api.data.gov.in/resource/9ef273e5-7f72-45fe-ab93-43141103093c?api-key=579b86e4706d52312600220912345&format=json&filters[state]=Gujarat&filters[commodity]=${englishCrop}`);
            const data = await response.json();

            priceBody.innerHTML = ''; // Clear loading text
            if (data.records && data.records.length > 0) {
                data.records.forEach(record => {
                    const row = `<tr>
                        <td>${record.market}</td>
                        <td>₹${record.min_price}</td>
                        <td>₹${record.max_price}</td>
                        <td>₹${record.modal_price}</td>
                    </tr>`;
                    priceBody.innerHTML += row;
                });
            } else {
                priceBody.innerHTML = '<tr><td colspan="4">માહિતી ઉપલબ્ધ નથી.</td></tr>';
            }
        } catch (error) {
            priceBody.innerHTML = '<tr><td colspan="4">Error: સર્વર સાથે જોડાણ થઈ શક્યું નથી.</td></tr>';
        }
    });
});