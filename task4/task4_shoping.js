// script.js
const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 199, rating: 4.8, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { id: 2, name: "Ergonomic Chair", category: "Home & Office", price: 350, rating: 4.5, img: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=400" },
    { id: 3, name: "Smart Watch Series 7", category: "Electronics", price: 399, rating: 4.7, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
    { id: 4, name: "Yoga Mat Pro", category: "Fitness", price: 45, rating: 4.9, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKBi2Ip1MRrhWGZN_P9-bkMdnXrbICbZ03w&s" },
    { id: 5, name: "Mechanical Keyboard", category: "Home & Office", price: 120, rating: 4.6, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400" },
    { id: 6, name: "Running Sneakers", category: "Fitness", price: 85, rating: 4.3, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
    { id: 7, name: "Leather Backpack", category: "Accessories", price: 110, rating: 4.4, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400" },
    { id: 8, name: "Noise Cancelling Earbuds", category: "Electronics", price: 150, rating: 4.2, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400" },
    { id: 9, name: "Adjustable Dumbbells", category: "Fitness", price: 250, rating: 4.8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWAdNEOM4TRMt9hJ7OsyYtj30wlxamSf8TA&s" },
    { id: 10, name: "Minimalist Desk Lamp", category: "Home & Office", price: 60, rating: 4.1, img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400" },
    { id: 11, name: "Rare Beauty Soft Pinch Liquid Blush", category: "Makeup", price: 500, rating: 4.7, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSZeVFEIYlhYQq1q_8aAHkl-Ac-tl_CVBOSwCaOmmqZsOEqKEGELqDv9BifTNYlS2VCp_cNn2LwFGiQhqrIefbNKSvW98bqcpUGU3aa1JVppJoNheFIr7k-cA" },
    { id: 12, name: "Renee Everyday Face Bright Serum In Cream", category: "Makeup", price: 199, rating: 4.5, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSq6pn4YKWsfpt97I9nPBbtUDPYQB9WKN1hnwkwTnige-SzoT1bTdf2hQ1gMulSIXj58UV9VasT1y-_wTV2LY93vwkuLGU2ZFURtiBsRFeYZ1g7Au6mxLZK2lMI" },
    { id: 13, name: "Ganesh Durable Steel Juicer", category: "Kitchen", price: 399, rating: 3.6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSk9iUWSUx41L9fYuVGcENKnnWaZpT9A2eA&s"},
    { id: 14, name: "Amazon alexa", category: "Electronics", price: 2399, rating: 4.2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0zXW7TaIeQnPj7_y4wUF_QjCoJ7bHIZcbA&s" },
    { id: 7, name: "Aesthetic Cute Butterfly Bag Charms Keychains", category: "Accessories", price: 299, rating: 4.8, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSy06taluG-H8VqCtjUCzbd1fVsTxxQ1PvZJXZLsjYWIFZn3gibdcpNXZ_5ojp6LPZurfiuEJTfNjh0mk_-vw6vSeK4fVJAF63yRJBlzRljZEtw6oPtGWftsw" },
    { id: 14, name: "Myntra Makeup Box", category: "Makeup", price: 4239, rating: 4.7, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRqZ12S5IzB17f7TjC1aaeZx5L79qIPJG8uOvafIol1X0sQxmqM_S3TC_Q09QLc6urg5Cb06awLcbpViJsdb3ZFZTafoiXD3Q" },
    { id: 15, name: "AmazonBasics 8-Piece Non-Stick Kitchen Cookware Set", category: "Kitchen", price: 4999, rating: 4.6, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5zqHaCfJXs1QiSkv65exhbabMJo190RneUW3AXme4NSFfGlkrhsBkEqVmMRPshlgj6QaS6bOtQF-xIWmW1dWM5UpPpYl3iWLugI2pGw8" },
    { id: 16, name: "Desk Organiser Brown", category: "Home & Office", price: 749, rating: 4.7, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS92fM71ap_98jQ6BQkGILNOFojuoEhUo_Z6Edc9abLfGzIF1drmekxniFtpfhiXlcIvfCfqKgTdQl6dn1qASJgyztaG_xeX2VElv3qszA" },
    { id: 17, name: "Michael Kors Parker Rose Gold Watch MK5896 Women", category: "Accessories", price: 24439, rating: 4.7, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkeH3fD-qWaAyFVr-arIcFx3ISIrW2XOiE-eVs5xIxdhB_iUK80yl02wC_d2YBmxSl3quNirfvWcPPS3fLt0GmMzE847ChmdlaYYTMJvkO9Gx86Yc_K9cICec" },
    { id: 18, name: "Fitnesstricks New Home Workout Gym Fitness Accessory Kit Kit", category: "Fitness", price: 466, rating: 4.2, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQlw5i_63KZB6VGtX0C94VF2PP6dwRv_qjTKV7fSxSiaD4_hxicMI7rrSMNVUqeXwmWndBQM9KN52lqMLhFrlbV2-aKMLTkfg" }

];

// Elements
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceInput = document.getElementById('priceInput');
const priceRange = document.getElementById('priceRange');
const sortOptions = document.getElementById('sortOptions');
const resetBtn = document.getElementById('resetBtn');

function renderProducts(data) {
    grid.innerHTML = data.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <div class="card-content">
                <small>${p.category}</small>
                <h4>${p.name}</h4>
                <div style="display:flex; justify-content:space-between; align-items:center">
                    <span class="price">$${p.price}</span>
                    <span class="rating">★ ${p.rating}</span>
                </div>
            </div>
        </div>
    `).join('') || '<div class="no-results">No products found matching your search.</div>';
}

function updateUI(e) {
    // Sync the two price inputs
    if(e.target.id === 'priceInput') priceRange.value = e.target.value;
    if(e.target.id === 'priceRange') priceInput.value = e.target.value;

    const searchTerm = searchInput.value.toLowerCase();
    const cat = categoryFilter.value;
    const maxP = parseInt(priceInput.value);
    const sort = sortOptions.value;

    let filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
        const matchesCat = (cat === 'all' || p.category === cat);
        const matchesPrice = p.price <= maxP;
        return matchesSearch && matchesCat && matchesPrice;
    });

    if (sort === 'low') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'high') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    renderProducts(filtered);
}

// Reset Function
resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    categoryFilter.value = 'all';
    priceInput.value = 1000;
    priceRange.value = 1000;
    sortOptions.value = 'default';
    renderProducts(products);
});

// Event Listeners
[searchInput, categoryFilter, priceInput, priceRange, sortOptions].forEach(el => {
    el.addEventListener('input', updateUI);
});

// Initial Load
renderProducts(products);